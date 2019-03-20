<?php
do{
    $f = stream_get_line(STDIN, 10000, PHP_EOL);
    if($f!==false){
        $input[] = $f;
    }
}while($f!==false);

/* Vous pouvez aussi effectuer votre traitement ici après avoir lu toutes les données */

$bidQuantity = $input[0];
$initialPrice = $input[1];
$auction = explode(" ", $input[2]);
$bestbid = 0;

for ($i=2; $i<count($input[$i]); $i++ )
    if($bestbid > $auction[0]){
        $bestbid = $auction[0];
        $bestbidder = $auction[1];
    }

echo $bestbid > $initialPrice ? $bestbidder : 'KO'
?>

