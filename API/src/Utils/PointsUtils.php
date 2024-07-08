<?php

namespace LundBot69Api\Utils;

class PointsUtils
{
    private static $instance = null;

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new PointsUtils();
        }
        return self::$instance;
    }
}
