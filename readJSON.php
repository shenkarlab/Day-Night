<?php


header('Content-Type: text/html; charset=utf-8');

// file_put_contents('jsonTest.json', json_encode($arr, JSON_UNESCAPED_UNICODE)); // Write

//$arr = json_decode(file_get_contents('jsonTest.json')); // Read
$arr = json_decode(file_get_contents('jsonTest.json'), true); // Read

     
echo json_encode($arr, JSON_UNESCAPED_UNICODE);

?>