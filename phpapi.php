<?php
header('Content-Type: text/html; charset=utf-8');
$donglist = explode("||||", file_get_contents("items.txt"));
$id = array_rand($donglist);
$array = ["id" => $id,
                "item" => $donglist[$id]];
if (isset($_GET["textonly"])) {
echo $donglist[$id];
} else {
echo json_encode($array);
}
die();
