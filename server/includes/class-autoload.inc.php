<?php

spl_autoload_register('myAutoLoader');

function myAutoLoader ($className) {
    $path = 'classes/';
    $extension = '.class.php';
    $fileName = $path . strtolower($className) . $extension;

    if (!file_exists($fileName)) {
        return false;
    }

    include_once $path . strtolower($className) . $extension;
}