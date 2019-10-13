Function arguments  
<?php

// function assess_number($a)
// {
//     return $a > 10;
// }

$number = 6;
// $result = assess_number($number);

// if ($result){
//     echo 'true';
// }else{
//     echo 'false';
// }
// // echo $result;
// // echo assess_number($number);

function headline($text, $hValue = 1)
{
    return "<h{$hValue}>{$text}</h{$hValue}>";
}

echo headline('Main headline');
echo headline ('modifiable headline', 3);

$array = ['pes','kocka', 12];


var_dump($number);
var_dump($array);