<?php

// if a specific path is given in get parameters
if (isset($_GET['path'])) {
    // get the requested path from get parameters
    $path = $_GET['path'];

    // for ease of use get the real path for the given path (removing '..' etc.)
    $path = realpath($path);
}

// if path was not in GET parameters or is empty (which is illegal)
if (empty($path)) {
    // use the current script's path
    $path = __DIR__;
}

// do your thing here
$content = scandir($path);

var_dump($content);

function browse_directory($directory)
{
    $files = scandir($directory);
    foreach ($files as $file) {
        if ($file == '.' || $file == '..') continue;
        if (is_dir($directory . '/' . $file)) {
            // using recursiveness to go deeper
            browse_directory($directory . '/' . $file);
        } else {
            // do something with the file
        }
    }
}
