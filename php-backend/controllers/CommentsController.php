<?php
// Blog Comments Controller (PHP 8)

require_once __DIR__ . '/../db.php';

class CommentsController {
    
    /**
     * Format a single comment row for frontend consumption
     */
    public static function formatComment(array $row): array {
        $name = $row['author_name'] ?? 'User';
        $initials = strtoupper(substr($name, 0, 2));

        return [
            'id' => (int)$row['id'],
            'post_id' => (string)($row['post_id'] ?? ''),
            'parent_id' => $row['parent_id'] ? (int)$row['parent_id'] : null,
            'author' => $name,
            'author_name' => $name,
            'author_email' => $row['author_email'] ?? '',
            'avatar' => $initials,
            'avatarBg' => 'bg-purple-100 text-[#7C1FA8]',
            'date' => isset($row['created_at']) ? date('M j, Y, g:i a', strtotime($row['created_at'])) : 'Just now',
            'content' => $row['content'] ?? '',
            'likes' => (int)($row['likes_count'] ?? 0),
            'liked' => false,
            'status' => $row['status'] ?? 'pending',
            'replies' => []
        ];
    }

    /**
     * Public API: List approved comments & nested replies for a specific blog post
     */
    public static function listPublic(string $postId): array {
        // Fetch top-level approved comments
        $sql = "SELECT * FROM blog_comments WHERE post_id = ? AND status = 'approved' AND parent_id IS NULL ORDER BY id DESC";
        $topRows = DB::query($sql, [$postId]);
        
        $comments = array_map([self::class, 'formatComment'], $topRows);

        // Fetch approved nested replies for each top-level comment
        foreach ($comments as &$c) {
            $replySql = "SELECT * FROM blog_comments WHERE parent_id = ? AND status = 'approved' ORDER BY id ASC";
            $replyRows = DB::query($replySql, [$c['id']]);
            $c['replies'] = array_map([self::class, 'formatComment'], $replyRows);
        }

        return [
            'success' => true,
            'data' => [
                'comments' => $comments,
                'count' => count($comments)
            ]
        ];
    }

    /**
     * Public API: Submit a new comment or reply (Defaults to status = 'pending')
     */
    public static function submit(string $postId, array $body): array {
        $authorName = trim($body['author_name'] ?? $body['author'] ?? '');
        $authorEmail = trim($body['author_email'] ?? $body['email'] ?? '');
        $content = trim($body['content'] ?? '');
        $parentId = !empty($body['parent_id']) ? (int)$body['parent_id'] : null;

        if (!$authorName || !$authorEmail || !$content) {
            http_response_code(400);
            return ['success' => false, 'message' => 'Name, email, and content are required.'];
        }

        $sql = "INSERT INTO blog_comments (post_id, parent_id, author_name, author_email, content, status) VALUES (?, ?, ?, ?, ?, 'pending')";
        DB::execute($sql, [$postId, $parentId, $authorName, $authorEmail, $content]);
        $newId = (int)DB::lastInsertId();

        return [
            'success' => true,
            'message' => 'Your comment has been submitted and is pending admin approval.',
            'data' => [
                'comment' => [
                    'id' => $newId,
                    'status' => 'pending'
                ]
            ]
        ];
    }

    /**
     * Admin API: List comments for moderation (filtered by status: pending | approved | rejected)
     */
    public static function listAdmin(array $queryParams): array {
        $status = $queryParams['status'] ?? 'pending';
        $params = [];
        
        if (in_array($status, ['pending', 'approved', 'rejected'])) {
            $sql = "SELECT * FROM blog_comments WHERE status = ? ORDER BY id DESC";
            $params[] = $status;
        } else {
            $sql = "SELECT * FROM blog_comments ORDER BY id DESC";
        }

        $rows = DB::query($sql, $params);
        $comments = array_map([self::class, 'formatComment'], $rows);

        return [
            'success' => true,
            'data' => [
                'comments' => $comments,
                'count' => count($comments)
            ]
        ];
    }

    /**
     * Admin API: Approve a comment
     */
    public static function approve(int $id): array {
        $sql = "UPDATE blog_comments SET status = 'approved' WHERE id = ?";
        DB::execute($sql, [$id]);

        return [
            'success' => true,
            'message' => "Comment #$id approved successfully.",
            'data' => ['id' => $id, 'status' => 'approved']
        ];
    }

    /**
     * Admin API: Reject a comment
     */
    public static function reject(int $id): array {
        $sql = "UPDATE blog_comments SET status = 'rejected' WHERE id = ?";
        DB::execute($sql, [$id]);

        return [
            'success' => true,
            'message' => "Comment #$id rejected.",
            'data' => ['id' => $id, 'status' => 'rejected']
        ];
    }

    /**
     * Admin API: Delete a comment
     */
    public static function delete(int $id): array {
        $sql = "DELETE FROM blog_comments WHERE id = ?";
        DB::execute($sql, [$id]);

        return [
            'success' => true,
            'message' => "Comment #$id deleted."
        ];
    }
}
