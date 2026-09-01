<?php
// Enquiries Controller

require_once __DIR__ . '/../db.php';
require_once __DIR__ . '/../mailer.php';

class EnquiriesController {
    private static function ensureTableExists() {
        try {
            DB::execute("
                CREATE TABLE IF NOT EXISTS enquiries (
                    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    form_name VARCHAR(255) NOT NULL DEFAULT 'Website Form',
                    form_path VARCHAR(255) NOT NULL DEFAULT '/',
                    name VARCHAR(191) DEFAULT NULL,
                    email VARCHAR(191) DEFAULT NULL,
                    phone VARCHAR(100) DEFAULT NULL,
                    city VARCHAR(100) DEFAULT NULL,
                    service VARCHAR(255) DEFAULT NULL,
                    message LONGTEXT DEFAULT NULL,
                    extra_data LONGTEXT DEFAULT NULL,
                    status VARCHAR(50) NOT NULL DEFAULT 'new',
                    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                    KEY idx_enquiries_path (form_path),
                    KEY idx_enquiries_status (status)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
            ");
        } catch (Exception $e) {
            // Ignore DB table error
        }
    }

    public static function formatEnquiry(array $row): array {
        $extra = [];
        if (!empty($row['extra_data'])) {
            $decoded = json_decode($row['extra_data'], true);
            if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
                $extra = $decoded;
            }
        }

        return [
            'id' => (int)$row['id'],
            'formName' => $row['form_name'] ?? 'Website Form',
            'formPath' => $row['form_path'] ?? '/',
            'name' => $row['name'] ?? '',
            'email' => $row['email'] ?? '',
            'phone' => $row['phone'] ?? '',
            'city' => $row['city'] ?? '',
            'service' => $row['service'] ?? '',
            'message' => $row['message'] ?? '',
            'extra' => $extra,
            'status' => $row['status'] ?? 'new',
            'createdAt' => $row['created_at'] ?? null
        ];
    }

    public static function submit(array $body): array {
        self::ensureTableExists();

        $formName = trim($body['formName'] ?? $body['form_name'] ?? 'Website Form');
        $formPath = trim($body['formPath'] ?? $body['form_path'] ?? '/');
        $name = trim($body['name'] ?? $body['fullName'] ?? $body['full_name'] ?? '');
        $email = trim($body['email'] ?? '');
        $phone = trim($body['phone'] ?? '');
        $city = trim($body['city'] ?? '');
        $service = trim($body['service'] ?? '');
        $message = trim($body['message'] ?? '');

        $extra = $body['extra'] ?? [];
        if (is_string($extra)) {
            $extra = json_decode($extra, true) ?: [];
        }
        $extraJson = !empty($extra) ? json_encode($extra) : null;

        try {
            DB::execute(
                'INSERT INTO enquiries (form_name, form_path, name, email, phone, city, service, message, extra_data, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())',
                [$formName, $formPath, $name, $email, $phone, $city, $service, $message, $extraJson]
            );
            $newId = (int)DB::lastInsertId();

            // Send Realtime Email Alert via Gmail SMTP to support@prosperi5.com
            $subject = "🔔 New Website Lead: $formName from $name";
            
            $extraRows = '';
            if (!empty($extra) && is_array($extra)) {
                foreach ($extra as $k => $v) {
                    $valStr = is_array($v) ? implode(', ', $v) : (string)$v;
                    $extraRows .= "<tr><td style='padding:8px 12px;font-weight:bold;color:#544F66;background:#FAF5FD;'>".htmlspecialchars(ucwords($k))."</td><td style='padding:8px 12px;color:#1E1B2E;'>".htmlspecialchars($valStr)."</td></tr>";
                }
            }

            $htmlBody = "
            <div style='font-family:Arial,sans-serif;max-w:600px;margin:0 auto;border:1px solid #EBE8EF;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.05);'>
                <div style='background:#7C1FA8;padding:20px;text-align:center;color:#ffffff;'>
                    <h2 style='margin:0;font-size:22px;font-weight:800;'>New Lead Received!</h2>
                    <p style='margin:5px 0 0 0;font-size:13px;opacity:0.9;'>PROSPERi5 Lead Capture System</p>
                </div>
                <div style='padding:25px;background:#ffffff;'>
                    <p style='margin-top:0;color:#1E1B2E;font-size:15px;line-height:1.5;'>A new customer lead/enquiry has been submitted via your website. Here are the captured details:</p>
                    
                    <table style='width:100%;border-collapse:collapse;margin-top:15px;font-size:14px;'>
                        <tr style='border-bottom:1px solid #EBE8EF;'><td style='padding:8px 12px;font-weight:bold;color:#544F66;background:#FAF5FD;width:35%;'>Form Name</td><td style='padding:8px 12px;color:#7C1FA8;font-weight:bold;'>".htmlspecialchars($formName)."</td></tr>
                        <tr style='border-bottom:1px solid #EBE8EF;'><td style='padding:8px 12px;font-weight:bold;color:#544F66;background:#FAF5FD;'>Page Path</td><td style='padding:8px 12px;color:#1E1B2E;'>".htmlspecialchars($formPath)."</td></tr>
                        <tr style='border-bottom:1px solid #EBE8EF;'><td style='padding:8px 12px;font-weight:bold;color:#544F66;background:#FAF5FD;'>Full Name</td><td style='padding:8px 12px;color:#1E1B2E;font-weight:bold;'>".htmlspecialchars($name)."</td></tr>
                        <tr style='border-bottom:1px solid #EBE8EF;'><td style='padding:8px 12px;font-weight:bold;color:#544F66;background:#FAF5FD;'>Email Address</td><td style='padding:8px 12px;color:#1E1B2E;'><a href='mailto:".htmlspecialchars($email)."' style='color:#7C1FA8;'>".htmlspecialchars($email)."</a></td></tr>
                        <tr style='border-bottom:1px solid #EBE8EF;'><td style='padding:8px 12px;font-weight:bold;color:#544F66;background:#FAF5FD;'>Phone Number</td><td style='padding:8px 12px;color:#1E1B2E;'><a href='tel:".htmlspecialchars($phone)."' style='color:#7C1FA8;font-weight:bold;'>".htmlspecialchars($phone)."</a></td></tr>
                        " . ($city ? "<tr style='border-bottom:1px solid #EBE8EF;'><td style='padding:8px 12px;font-weight:bold;color:#544F66;background:#FAF5FD;'>City / Location</td><td style='padding:8px 12px;color:#1E1B2E;'>".htmlspecialchars($city)."</td></tr>" : "") . "
                        " . ($service ? "<tr style='border-bottom:1px solid #EBE8EF;'><td style='padding:8px 12px;font-weight:bold;color:#544F66;background:#FAF5FD;'>Service Interested</td><td style='padding:8px 12px;color:#1E1B2E;'>".htmlspecialchars($service)."</td></tr>" : "") . "
                        " . ($message ? "<tr style='border-bottom:1px solid #EBE8EF;'><td style='padding:8px 12px;font-weight:bold;color:#544F66;background:#FAF5FD;'>Message</td><td style='padding:8px 12px;color:#1E1B2E;'>".nl2br(htmlspecialchars($message))."</td></tr>" : "") . "
                        $extraRows
                    </table>
                    
                    <div style='margin-top:25px;padding-top:15px;border-top:1px solid #EBE8EF;text-align:center;font-size:12px;color:#8E8A9D;'>
                        Submitted on ".date('Y-m-d H:i:s')." | PROSPERi5 Automated System
                    </div>
                </div>
            </div>
            ";

            Mailer::send(SMTP_RECEIVER, $subject, $htmlBody, $email);

            return [
                'success' => true,
                'data' => [
                    'id' => $newId,
                    'message' => 'Enquiry submitted and recorded successfully'
                ]
            ];
        } catch (Exception $e) {
            http_response_code(500);
            return ['success' => false, 'message' => 'Failed to save enquiry: ' . $e->getMessage()];
        }
    }

    public static function listAdmin(array $queryParams): array {
        self::ensureTableExists();

        $where = ['1=1'];
        $params = [];

        if (!empty($queryParams['path']) && $queryParams['path'] !== 'all') {
            $where[] = 'form_path LIKE ?';
            $params[] = '%' . $queryParams['path'] . '%';
        }
        if (!empty($queryParams['search'])) {
            $where[] = '(name LIKE ? OR email LIKE ? OR phone LIKE ? OR form_name LIKE ? OR message LIKE ?)';
            $searchStr = '%' . $queryParams['search'] . '%';
            $params[] = $searchStr;
            $params[] = $searchStr;
            $params[] = $searchStr;
            $params[] = $searchStr;
            $params[] = $searchStr;
        }

        $sql = 'SELECT * FROM enquiries WHERE ' . implode(' AND ', $where) . ' ORDER BY id DESC';
        $rows = DB::query($sql, $params);
        $enquiries = array_map([self::class, 'formatEnquiry'], $rows);

        return [
            'success' => true,
            'data' => [
                'enquiries' => $enquiries,
                'count' => count($enquiries)
            ]
        ];
    }

    public static function deleteAdmin(int $id): array {
        self::ensureTableExists();
        DB::execute('DELETE FROM enquiries WHERE id = ?', [$id]);
        return ['success' => true, 'message' => 'Enquiry deleted successfully'];
    }
}
