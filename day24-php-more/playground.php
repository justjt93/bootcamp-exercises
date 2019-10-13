<?php

// $first_name = 'Rocky';
// $last_name = 'Balboa';
// $br ='<br>';

// echo "First name:{$first_name} &lt<strong>br</strong>&gt{$br}  Last name:{$last_name}<br>";

// $year_of_birth = '1993';
// $height  = '190';
// $br ='<br>';

// echo "year:{$year_of_birth} &lt<strong>br</strong>&gt{$br}  height:{$height}";

// define('SERVER_NAME','Apache');
// echo 'This server is running on '.SERVER_NAME.'.'.'<br>';

// define('MY_OS','Windows');
// echo 'My operating system is '.MY_OS.'.';

// function greet ($person){
//     echo "Hello, {$person}!";
// }

// greet('Jane');


// function truncateString (&$string,$size)
//     {
//     $string = mb_substr($string, 0 , $size);
// }


// $sentence = 'Quick brown fox jumps over the lazy dog.';

// truncateString($sentence, 10);

// echo $sentence; // prints 'Quick brow'
// $time_served = 0;
// // while ($time_served < 10) {
// //     $time_served++;
// //     echo "The prisoner has served {$time_served} years.";
// //     echo "<br>";
// // }

// do {
//     $time_served++;
//     echo "The prisoner has served {$time_served} years.";
//     echo "<br>";
// } while ($time_served < 10);



// for ($i = 10; $i > 0; $i--) {
//     if ($i === 2) {
//         echo "<br>";
//         echo "<br>";
//         echo "Paroled!";
//         break;
//     }
//     echo "<h3>The prisoner has served {$i} years.</h3>";
//     if ($i > 5) {
//         continue;
//     }



//     echo "<br>";
//     echo "Going to a parole hearing...";
// }

$cars_i_want = ['trabant', '120', 'warburg'];
$cars_i_want[] = 'Bugatti';
$cars_i_want[] = 'Ferrari';
$cars_i_want[] = 'Lamborghini';

// $add = ['Aston Martin',
// 'Bugatti',
// 'Ferrari',
// 'Lamborghini',
// 'Maserati',
// 'Mercedes',
// 'Porsche',
// 'Skoda',
// ]


echo "For myself I would buy {$cars_i_want[1]}.<br>";
echo "For my spouse I would buy {$cars_i_want[3]}.<br>";
$cars_i_want[4] = 'Smart';

var_dump($cars_i_want);

echo "<ul>";
foreach ($cars_i_want as $car) {
    echo "<li>{$car}</li>";
}
echo "</ul>";


$car_prices = [
    'Skoda Octavia' => 270000,
    'Volkswagen Golf' => 170000,
    'BMW X6' => 380000,
    'Porsche 911' => 1150000
];

echo "You can have a Porsche 911 for just {$car_prices['Porsche 911']} CZK." . "<br>";

foreach ($car_prices as $car => $carPrice) {
    echo "You can have a {$car} for just {$carPrice} CZK." . "<br>";
}
