<?php

function createRandomArray($length)
{
    $data = [];
    for ($i = 0; $i < $length; $i++) {
        $data[] = rand(1, 99);
    }
    return $data;
}

function echoArray($array)
{
    echo '<pre>' . implode('; ', $array) . '</pre>';
}

// generate random array with length 5
$data = createRandomArray(5);

echoArray($data);

for ($j = 0; $j < count($data) - 1; $j++) {
    for ($i = 0; $i < count($data) - $j - 1; $i++) {
        if ($data[$i] > $data[$i + 1]) {
            $tmp      = $data[$i];
            $data[$i] = $data[$i + 1];
            $data[$i + 1] = $tmp;
        }
    }
}

echoArray($data);
