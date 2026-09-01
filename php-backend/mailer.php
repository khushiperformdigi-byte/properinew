<?php
// Native PHP SMTP Mailer Helper for Gmail / Outlook (PHP 8)

require_once __DIR__ . '/config.php';

class Mailer {
    
    /**
     * Send an HTML Email using native PHP stream sockets (No Composer required)
     */
    public static function send(string $to, string $subject, string $htmlBody, string $replyTo = ''): bool {
        $host = SMTP_HOST;
        $port = (int)SMTP_PORT;
        $username = SMTP_USER;
        $password = SMTP_PASS;
        $fromEmail = SMTP_FROM;
        $fromName = SMTP_FROM_NAME;

        if (empty($host) || empty($username) || empty($password)) {
            error_log("SMTP credentials missing in config.php");
            return false;
        }

        try {
            $context = stream_context_create([
                'ssl' => [
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true,
                ]
            ]);

            $timeout = 15;
            $socket = @stream_socket_client("tcp://{$host}:{$port}", $errno, $errstr, $timeout, STREAM_CLIENT_CONNECT, $context);
            if (!$socket) {
                error_log("SMTP Socket Connection Failed: $errstr ($errno)");
                return self::fallbackMail($to, $subject, $htmlBody, $replyTo);
            }

            self::readResponse($socket);

            // Send EHLO
            self::sendCommand($socket, "EHLO " . gethostname());

            // Initiate STARTTLS for Port 587
            if ($port === 587) {
                self::sendCommand($socket, "STARTTLS");
                $crypto = @stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT | STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT);
                if (!$crypto) {
                    error_log("SMTP TLS Encryption Handshake Failed");
                    fclose($socket);
                    return self::fallbackMail($to, $subject, $htmlBody, $replyTo);
                }
                // Send EHLO again after TLS
                self::sendCommand($socket, "EHLO " . gethostname());
            }

            // Authenticate with AUTH LOGIN
            self::sendCommand($socket, "AUTH LOGIN");
            self::sendCommand($socket, base64_encode($username));
            self::sendCommand($socket, base64_encode($password));

            // MAIL FROM & RCPT TO
            self::sendCommand($socket, "MAIL FROM: <{$fromEmail}>");
            self::sendCommand($socket, "RCPT TO: <{$to}>");

            // DATA
            self::sendCommand($socket, "DATA");

            // Build Headers & MIME Body
            $headers = [];
            $headers[] = "MIME-Version: 1.0";
            $headers[] = "Content-Type: text/html; charset=UTF-8";
            $headers[] = "From: =?UTF-8?B?" . base64_encode($fromName) . "?= <{$fromEmail}>";
            $headers[] = "To: <{$to}>";
            if (!empty($replyTo)) {
                $headers[] = "Reply-To: <{$replyTo}>";
            }
            $headers[] = "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=";
            $headers[] = "Date: " . date('r');
            $headers[] = "X-Mailer: PROSPERi5 Native PHP Mailer 2026";

            $message = implode("\r\n", $headers) . "\r\n\r\n" . $htmlBody . "\r\n.";
            self::sendCommand($socket, $message);

            // QUIT
            self::sendCommand($socket, "QUIT");
            fclose($socket);
            return true;

        } catch (Throwable $e) {
            error_log("SMTP Mailer Exception: " . $e->getMessage());
            return self::fallbackMail($to, $subject, $htmlBody, $replyTo);
        }
    }

    private static function sendCommand($socket, string $cmd): string {
        fwrite($socket, $cmd . "\r\n");
        return self::readResponse($socket);
    }

    private static function readResponse($socket): string {
        $response = "";
        while ($line = fgets($socket, 512)) {
            $response .= $line;
            if (substr($line, 3, 1) == " ") break;
        }
        return $response;
    }

    private static function fallbackMail(string $to, string $subject, string $htmlBody, string $replyTo = ''): bool {
        $headers = [];
        $headers[] = "MIME-Version: 1.0";
        $headers[] = "Content-Type: text/html; charset=UTF-8";
        $headers[] = "From: " . SMTP_FROM_NAME . " <" . SMTP_FROM . ">";
        if ($replyTo) $headers[] = "Reply-To: " . $replyTo;
        return @mail($to, $subject, $htmlBody, implode("\r\n", $headers));
    }
}
