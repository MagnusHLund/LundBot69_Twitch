<?php

namespace LundBot69Api\Utils;

use LundBot69Api\Models\HttpMessage;

class MessageManager
{
    private static $instance = null;

    private function __construct()
    {
    }

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new MessageManager();
        }
        return self::$instance;
    }

    public function sendMessage($responseMessage, $statusCode = 200, $logMessage = null)
    {
        $success = $statusCode <= 300 ? true : false;

        if ($logMessage) {
            //    $this->createLog($logMessage);
        }

        $httpMessage = new HttpMessage($responseMessage, $success, $statusCode);
        $httpMessage->sendMessage();
    }

    public function missingParameters()
    {
        $this->sendMessage("Missing parameters, when calling the API.", 422);
    }

    // TODO: Finish implementation
    public function createLog($logMessage)
    {
        $logFolder = __DIR__ . "../../logs/";

        $current_time = date("Y-m-d H-i-s");
        $logName = $current_time . ".txt";

        $logFile = $logFolder . $logName;

        error_log($logMessage, 3, $logFile);
    }
}
