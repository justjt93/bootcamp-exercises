<?php
$pdo = new PDO(
    "mysql:dbname=games;host=localhost;charset=utf8",
    'root',
    'rootroot'
);

var_dump($pdo);

$query = "
SELECT *
FROM 'games'
WHERE 'rating' > ?
ORDER BY 'rating' DESC
";

//prepare the query

$statement = $pdo->prepare($query);

var_dump($statement);

// send query to db
$statement->execute([50]);
