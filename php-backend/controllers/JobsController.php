<?php
// Jobs Controller

require_once __DIR__ . '/../db.php';
require_once __DIR__ . '/../mailer.php';

class JobsController {
    public static function formatJob(array $row): array {
        $resp = $row['responsibilities'] ?? '';
        $req = $row['requirements'] ?? '';

        if (is_string($resp)) {
            $decoded = json_decode($resp, true);
            $resp = (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) ? $decoded : array_values(array_filter(array_map('trim', explode("\n", $resp))));
        }

        if (is_string($req)) {
            $decoded = json_decode($req, true);
            $req = (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) ? $decoded : array_values(array_filter(array_map('trim', explode("\n", $req))));
        }

        return [
            'id' => (int)$row['id'],
            'title' => $row['title'] ?? '',
            'slug' => $row['slug'] ?? '',
            'department' => $row['department'] ?? '',
            'location' => $row['location'] ?? '',
            'type' => $row['type'] ?? 'Full-time',
            'experience' => $row['experience'] ?? '',
            'imageUrl' => $row['imageUrl'] ?? $row['image_url'] ?? '',
            'description' => $row['description'] ?? '',
            'responsibilities' => $resp ?: [],
            'requirements' => $req ?: [],
            'status' => $row['status'] ?? 'published',
            'createdAt' => $row['created_at'] ?? null,
            'updatedAt' => $row['updated_at'] ?? null
        ];
    }

    private static function ensureColumnExists() {
        try {
            DB::execute("ALTER TABLE jobs ADD COLUMN image_url VARCHAR(1000) DEFAULT NULL");
        } catch (Exception $e) {}

        try {
            DB::execute("ALTER TABLE jobs MODIFY COLUMN responsibilities LONGTEXT DEFAULT NULL");
            DB::execute("ALTER TABLE jobs MODIFY COLUMN requirements LONGTEXT DEFAULT NULL");
        } catch (Exception $e) {}
    }

    private static function formatJsonList($val): string {
        if (is_array($val)) {
            return json_encode(array_values($val));
        }
        if (is_string($val)) {
            $trimmed = trim($val);
            if ($trimmed === '') return json_encode([]);
            $decoded = json_decode($trimmed, true);
            if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
                return json_encode(array_values($decoded));
            }
            $lines = array_values(array_filter(array_map('trim', explode("\n", $trimmed))));
            return json_encode($lines);
        }
        return json_encode([]);
    }

    public static function listPublic(array $queryParams): array {
        self::ensureColumnExists();
        $where = ["status = 'published'"];
        $params = [];

        if (!empty($queryParams['department'])) {
            $where[] = 'department = ?';
            $params[] = $queryParams['department'];
        }
        if (!empty($queryParams['location'])) {
            $where[] = 'location = ?';
            $params[] = $queryParams['location'];
        }
        if (!empty($queryParams['search'])) {
            $where[] = '(title LIKE ? OR description LIKE ? OR department LIKE ?)';
            $searchStr = '%' . $queryParams['search'] . '%';
            $params[] = $searchStr;
            $params[] = $searchStr;
            $params[] = $searchStr;
        }

        $sql = 'SELECT * FROM jobs WHERE ' . implode(' AND ', $where) . ' ORDER BY id DESC';
        $rows = DB::query($sql, $params);
        $jobs = array_map([self::class, 'formatJob'], $rows);

        return [
            'success' => true,
            'data' => [
                'jobs' => $jobs,
                'count' => count($jobs)
            ]
        ];
    }

    public static function getPublic(string $idOrSlug): array {
        self::ensureColumnExists();
        $job = is_numeric($idOrSlug)
            ? DB::queryOne("SELECT * FROM jobs WHERE id = ? AND status = 'published'", [(int)$idOrSlug])
            : DB::queryOne("SELECT * FROM jobs WHERE slug = ? AND status = 'published'", [$idOrSlug]);

        if (!$job) {
            http_response_code(404);
            return ['success' => false, 'message' => 'Job opening not found'];
        }

        return [
            'success' => true,
            'data' => [
                'job' => self::formatJob($job)
            ]
        ];
    }

    public static function apply(array $body): array {
        $jobId = (int)($body['jobId'] ?? $body['job_id'] ?? 0);
        $fullName = trim($body['fullName'] ?? $body['full_name'] ?? '');
        $email = trim($body['email'] ?? '');
        $phone = trim($body['phone'] ?? '');
        $message = trim($body['message'] ?? '');

        if (!$jobId || !$fullName || !$email || !$phone) {
            http_response_code(400);
            return ['success' => false, 'message' => 'jobId, fullName, email, and phone are required'];
        }

        DB::execute(
            'INSERT INTO job_applications (job_id, full_name, email, phone, message, created_at) VALUES (?, ?, ?, ?, ?, NOW())',
            [$jobId, $fullName, $email, $phone, $message]
        );
        $appId = (int)DB::lastInsertId();

        // Send Email Alert to support@prosperi5.com
        $subject = "💼 New Job Application: $fullName for Job #$jobId";
        $htmlBody = "
        <div style='font-family:Arial,sans-serif;max-w:600px;margin:0 auto;border:1px solid #EBE8EF;border-radius:16px;overflow:hidden;'>
            <div style='background:#7C1FA8;padding:20px;text-align:center;color:#ffffff;'>
                <h2 style='margin:0;font-size:22px;font-weight:800;'>New Job Application!</h2>
            </div>
            <div style='padding:25px;background:#ffffff;'>
                <p style='color:#1E1B2E;font-size:15px;'>A new candidate applied for <strong>Job ID #$jobId</strong> via the Careers portal:</p>
                <table style='width:100%;border-collapse:collapse;margin-top:15px;font-size:14px;'>
                    <tr style='border-bottom:1px solid #EBE8EF;'><td style='padding:8px 12px;font-weight:bold;color:#544F66;background:#FAF5FD;width:35%;'>Applicant Name</td><td style='padding:8px 12px;color:#1E1B2E;font-weight:bold;'>".htmlspecialchars($fullName)."</td></tr>
                    <tr style='border-bottom:1px solid #EBE8EF;'><td style='padding:8px 12px;font-weight:bold;color:#544F66;background:#FAF5FD;'>Email Address</td><td style='padding:8px 12px;color:#1E1B2E;'><a href='mailto:".htmlspecialchars($email)."' style='color:#7C1FA8;'>".htmlspecialchars($email)."</a></td></tr>
                    <tr style='border-bottom:1px solid #EBE8EF;'><td style='padding:8px 12px;font-weight:bold;color:#544F66;background:#FAF5FD;'>Phone Number</td><td style='padding:8px 12px;color:#1E1B2E;'><a href='tel:".htmlspecialchars($phone)."' style='color:#7C1FA8;font-weight:bold;'>".htmlspecialchars($phone)."</a></td></tr>
                    " . ($message ? "<tr style='border-bottom:1px solid #EBE8EF;'><td style='padding:8px 12px;font-weight:bold;color:#544F66;background:#FAF5FD;'>Cover Letter / Message</td><td style='padding:8px 12px;color:#1E1B2E;'>".nl2br(htmlspecialchars($message))."</td></tr>" : "") . "
                </table>
            </div>
        </div>
        ";
        Mailer::send(SMTP_RECEIVER, $subject, $htmlBody, $email);

        return [
            'success' => true,
            'data' => [
                'applicationId' => (int)DB::lastInsertId(),
                'message' => 'Application submitted successfully'
            ]
        ];
    }

    public static function submitEnquiry(array $body): array {
        return [
            'success' => true,
            'message' => 'Enquiry received successfully'
        ];
    }

    public static function listAdmin(array $queryParams): array {
        self::ensureColumnExists();
        $where = ['1=1'];
        $params = [];

        if (!empty($queryParams['status']) && $queryParams['status'] !== 'all') {
            $where[] = 'status = ?';
            $params[] = $queryParams['status'];
        }
        if (!empty($queryParams['search'])) {
            $where[] = '(title LIKE ? OR department LIKE ?)';
            $searchStr = '%' . $queryParams['search'] . '%';
            $params[] = $searchStr;
            $params[] = $searchStr;
        }

        $sql = 'SELECT * FROM jobs WHERE ' . implode(' AND ', $where) . ' ORDER BY id DESC';
        $rows = DB::query($sql, $params);
        $jobs = array_map([self::class, 'formatJob'], $rows);

        return [
            'success' => true,
            'data' => [
                'jobs' => $jobs,
                'count' => count($jobs)
            ]
        ];
    }

    public static function getAdmin(int $id): array {
        self::ensureColumnExists();
        $job = DB::queryOne('SELECT * FROM jobs WHERE id = ?', [$id]);
        if (!$job) {
            http_response_code(404);
            return ['success' => false, 'message' => 'Job not found'];
        }
        return ['success' => true, 'data' => ['job' => self::formatJob($job)]];
    }

    public static function create(array $body): array {
        self::ensureColumnExists();
        $title = trim($body['title'] ?? '');
        $department = trim($body['department'] ?? '');
        $location = trim($body['location'] ?? '');
        $type = trim($body['type'] ?? $body['employmentType'] ?? 'Full-time');
        $experience = trim($body['experience'] ?? '');
        $imageUrl = trim($body['imageUrl'] ?? $body['image_url'] ?? '');
        $description = trim($body['description'] ?? '');
        $status = trim($body['status'] ?? 'published');

        if (!$title || !$department || !$location) {
            http_response_code(400);
            return ['success' => false, 'message' => 'Title, department, and location are required'];
        }

        $slug = preg_replace('/[^a-z0-9]+/', '-', strtolower($title)) . '-' . time();
        $respJson = self::formatJsonList($body['responsibilities'] ?? []);
        $reqJson = self::formatJsonList($body['requirements'] ?? []);

        DB::execute(
            'INSERT INTO jobs (title, slug, department, location, type, experience, image_url, description, responsibilities, requirements, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())',
            [$title, $slug, $department, $location, $type, $experience, $imageUrl ?: null, $description, $respJson, $reqJson, $status]
        );

        $newId = (int)DB::lastInsertId();
        return self::getAdmin($newId);
    }

    public static function update(int $id, array $body): array {
        self::ensureColumnExists();
        $job = DB::queryOne('SELECT * FROM jobs WHERE id = ?', [$id]);
        if (!$job) {
            http_response_code(404);
            return ['success' => false, 'message' => 'Job not found'];
        }

        $title = $body['title'] ?? $job['title'];
        $department = $body['department'] ?? $job['department'];
        $location = $body['location'] ?? $job['location'];
        $type = $body['type'] ?? $body['employmentType'] ?? $job['type'];
        $experience = $body['experience'] ?? $job['experience'];
        $imageUrl = array_key_exists('imageUrl', $body) ? $body['imageUrl'] : (array_key_exists('image_url', $body) ? $body['image_url'] : ($job['image_url'] ?? null));
        $description = $body['description'] ?? $job['description'];
        $status = $body['status'] ?? $job['status'];

        $respJson = isset($body['responsibilities']) ? self::formatJsonList($body['responsibilities']) : self::formatJsonList($job['responsibilities']);
        $reqJson = isset($body['requirements']) ? self::formatJsonList($body['requirements']) : self::formatJsonList($job['requirements']);

        DB::execute(
            'UPDATE jobs SET title = ?, department = ?, location = ?, type = ?, experience = ?, image_url = ?, description = ?, responsibilities = ?, requirements = ?, status = ?, updated_at = NOW() WHERE id = ?',
            [$title, $department, $location, $type, $experience, $imageUrl ?: null, $description, $respJson, $reqJson, $status, $id]
        );

        return self::getAdmin($id);
    }

    public static function delete(int $id): array {
        DB::execute('DELETE FROM jobs WHERE id = ?', [$id]);
        return ['success' => true, 'message' => 'Job deleted successfully'];
    }
}
