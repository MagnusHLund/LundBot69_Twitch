<?php

namespace LundBot69Api\Utils;

class MessageManager
{
    public static function sendSuccess($responseMessage)
    {
        http_response_code(200);
        echo json_encode(["Success" => true, "result" => $responseMessage], JSON_UNESCAPED_UNICODE);
    }

    public static function sendError($responseMessage, $responseCode, $logMessage = null)
    {
        if ($logMessage) {
            self::createLog($logMessage);
        }

        http_response_code($responseCode);
        echo json_encode(["Success" => false, "result" => $responseMessage]);
        exit;
    }

    public static function missingParameters()
    {
        self::sendError("Missing parameters, when calling the API.", 422);
    }

    public static function createLog($logMessage)
    {
        $logFolder = __DIR__ . "../../logs/";

        $current_time = date("Y-m-d H-i-s");
        $logName = $current_time . ".txt";

        $logFile = $logFolder . $logName;

        error_log($logMessage, 3, $logFile);
    }
}
