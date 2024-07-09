<?php

namespace LundBot69Api\Models;

class HttpMessage
{
    private $content;
    private $success;
    private $statusCode;

    /**
     * @param mixed $content The actual usable content for the frontend
     * @param boolean $success Indicates if the response is good or not
     * @param int  $statusCode HTTP status code, for the message
     */
    public function __construct($content, $success, $statusCode)
    {
        $this->content = $content;
        $this->success = $success;
        $this->statusCode = $statusCode;
    }

    public function sendMessage()
    {
        http_response_code($this->statusCode);
        header('Content-Type', 'application/json');
        echo json_encode(['success' => $this->success, 'result' => $this->content]);
    }
}
