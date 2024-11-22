<?php
/*Esto es un comentario de bloque*/
//Comentario de linea

echo "Hola mundo \n"; //! console.log
$nombre = "Enzo Peralta"; //! Declaracion de variables, siempre con signo $ delante

echo "Nombre completo: $nombre \n";

const MY_CONSTANT = "constante";
$list = ["hola", 5, true, ["hola",5]];

echo "$list[0] \n";
print_r($list[3]); 

for ($i = 0; $i < 10; $i++){
  echo "$i $nombre \n";
}

