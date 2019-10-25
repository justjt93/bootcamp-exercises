<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css" />
    <title>Chessboard</title>
</head>

<body>


    <div class="board">
        <?php for ($i = 0; $i < 8; $i++) : ?>
            <div class="row">
                <?php for ($j = 0; $j < 8; $j++) : ?>
                    <div class="<?php echo ($j + $i) % 2 == 0 ? 'white' : 'black' ?>">
                        <?php if ($i == 3 && $j == 1) : ?>
                            <img src="http://classes.codingbootcamp.cz/assets/classes/33/pieces/whites/king.png" alt="">
                        <?php endif; ?>

                    </div>

                <?php endfor; ?>
            </div>
        <?php endfor; ?>
    </div>

</body>

</html>