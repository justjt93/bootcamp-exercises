<?php

for ($number = 0; $number < 8; $number++) {
    echo '<div class="row">';
    if ($number % 2 == 0) {
        for ($i = 0; $i < 8; $i++) {
            if ($i % 2 == 0) {
                echo '
                <div class="white"></div>
                <div class="black"></div>
            ';
            } else {
                echo '
                <div class="black"></div>
                <div class="white"></div>
            ';
            }
        }
    } else {
        for ($i = 0; $i < 8; $i++) {
            if ($i % 2 == 0) {
                echo '
                <div class="black"></div>
                <div class="white"></div>
            ';
            } else {
                echo '
                <div class="white"></div>
                <div class="black"></div>
                
            ';
            }
        }
    }

    echo '</div>';
}


<div class="board">
<?php for(i=0; $i<8; $i++): ?>
<div class="row">
<?php for($j=0; $j<8; $j++): ?>
<div class="<?php echo ($j +$i) % 2 == 0 ? 'white':'black' ?>">
<?php if ($i ==3 && $j == 1): ?>
<img src="http://classes.codingbootcamp.cz/assets/classes/33/pieces/whites/king.png" alt="">
<?php endif; ?>

</div>

<?php endfor; ?>
</div>
<?php endfor; ?>
</div>



<div class="board">
        <?php

        for ($number = 0; $number < 8; $number++) {

            if ($number % 2 == 1) {
                if ($number == 1) {
                    echo '<div class="row">
                    <div class="white"></div>
                    <div class="black"></div>
                    <div class="white"></div>
                    <div class="black king"></div>
                    <div class="white"></div>
                    <div class="black"></div>
                    <div class="white"></div>
                    <div class="black"></div>
                    </div>
                    ';
                } else {
                    echo '<div class="row">
                    <div class="white"></div>
                    <div class="black"></div>
                    <div class="white"></div>
                    <div class="black"></div>
                    <div class="white"></div>
                    <div class="black"></div>
                    <div class="white"></div>
                    <div class="black"></div>
                    </div>
                    ';
                }
            } else {
                echo '<div class="row">
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                </div>
                ';
            }
        }
        ?>
    </div>