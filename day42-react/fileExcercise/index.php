<?php

// echo __FILE__;
// echo '<br>';
// echo __DIR__;
// echo '<br>';
// var_dump(pathinfo(__FILE__));
// echo '<br>';
// var_dump(pathinfo(__FILE__, PATHINFO_EXTENSION));

$file_handle = fopen('2019/info.txt', 'a');
fwrite($file_handle, "Photos from our \r\n2019 vacation" . "\r\n");

fclose($file_handle);

$data = [
    'species' => 'Turtle',
    'color' => 'Green',
    'special' => 'Shell',
    'yob' => '2009',
    'desc' => 'Turtle uses special shell attack'
];

$fh = fopen('data.csv', 'w');
fputcsv($fh, $data, ';');

fclose($fh);

$fh = fopen('data.csv', 'r');
while (false !== ($line = fgetcsv($fh))) {
    var_dump($line);
}
fclose($fh);

// var_dump(
//     file_get_contents('photos.txt')
// );

file_put_contents(
    'data.json',
    json_encode($data)
);

var_dump($data);

// var_dump(
//     json_decode(file_get_contents('data.json'), true)
// );


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
