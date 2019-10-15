<?php
include 'data.php';
require_once 'Celebrity.php';

$celebrities = [];

foreach ($data as $celeb) {
    $newCeleb = new Celebrity;
    $newCeleb->fromArray($celeb);
    array_push($celebrities, $newCeleb);
}


// send JSON header
header('Content-type: application/json');

// send data as JSON
echo json_encode($celebrities);

// var_dump($celebrities).die();