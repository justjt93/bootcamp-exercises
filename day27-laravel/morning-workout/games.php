<?php
require_once 'DB.php';
require_once 'DB_functions.php';
// connect to a database
connect('localhost', 'games', 'root', 'rootroot');



// prepare a query string
$query = "SELECT `*` 
    FROM `games`
    WHERE 1
    ORDER BY " . (isset($_GET['orderby']) ? $_GET['orderby'] : 'name') . " " . (isset($_GET['way']) ? $_GET['way'] : 'asc') . ";
";

$orderby = isset($_GET['orderby']) && strtolower($_GET['orderby']) == 'rating' ? 'rating' : 'name';

// run the query
$results = select($query);



header('Content-type: application/json');
echo json_encode($results);
