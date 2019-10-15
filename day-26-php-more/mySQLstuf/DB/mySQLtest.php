<?php

require_once 'DB.php';
require_once 'DB_functions.php';
require_once 'Country.php';
require_once 'Region.php';

// connect to a db
connect('localhost', 'world', 'root', 'rootroot');

// prepare a query
$query = 'SELECT
    * FROM `country`
    WHERE `Population` > ?
    ';

// run the query
$results = select($query, [2000000], 'Country');

// var_dump($results);

// $region = new Region;
// $region->name = 'Central Africa';
// $region->slug = 'green_part_of_africa';
// $region->insert();

// echo 'A new region was inserted with id ' . $region->id;

// update the slug of Central Africa
$query = "
    SELECT *
    FROM `region`
    WHERE `name` = ?
    ";
$central_africa = select_one($query, ['Central Africa'], 'Region');

var_dump($central_africa);
$central_africa->slug = 'central-africa';
$central_africa->update();
var_dump($central_africa);
