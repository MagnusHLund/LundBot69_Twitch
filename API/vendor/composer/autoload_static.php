<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitbbdb69cc24a8d1a4503dd4666b3d40ca
{
    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'Magnushlund\\Lundbot69Api\\' => 25,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Magnushlund\\Lundbot69Api\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitbbdb69cc24a8d1a4503dd4666b3d40ca::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitbbdb69cc24a8d1a4503dd4666b3d40ca::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitbbdb69cc24a8d1a4503dd4666b3d40ca::$classMap;

        }, null, ClassLoader::class);
    }
}