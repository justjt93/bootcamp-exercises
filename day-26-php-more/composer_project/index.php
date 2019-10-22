<?php
require_once 'C:\web\bootcamp\exercises\day-26-php-more\composer_project\vendor\autoload.php';


// if (class_exists('GuzzleHttp\Client')) {
//     echo 'Guzzle HTTP client is ready to be used';
// } else {
//     echo 'Guzzle HTTP client is not loaded';
// }

$client = new GuzzleHttp\Client();

$res = $client->request('GET', 'https://www.imdb.com/title/tt5848272', [
    'verify' => false
]);

echo $res->getBody();
