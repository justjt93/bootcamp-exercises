<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <title>My eshop</title>

    <link rel="stylesheet" href="css/main.css" />

</head>

<body>

    <div id="page">

        <!-- header -->
        <?php
        include 'header.php'; ?>
        <!-- topmenu -->
        <?php
        include 'topmenu.php'; ?>

        <div id="content">

            <!-- homepage/layout -->
            <?php
            $rest = 'homepage';
            foreach ($_GET as $key => $value) {
                $rest = substr($key, 0, -3);
            }
            include $rest . '/layout.php';
            ?>

        </div>

        <!-- footer -->
        <?php


        include 'footer.php'; ?>

    </div>

</body>

</html>