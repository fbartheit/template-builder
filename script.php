<?php

function generateRandomString($length = 64) {
	$characters = '0123456789abcdef';
	$charactersLength = strlen($characters);
	$randomString = '';
	for ($i = 0; $i < $length; $i++) {
		$randomString .= $characters[rand(0, $charactersLength - 1)];
	}
	return $randomString;
}

	
	$sql = "INSERT INTO bravo_projekat (segments)
	VALUES ";
	
	for($i=0; $i<100000; $i++){
		$rStr = generateRandomString();
		$sql .= "('{$rStr}'),";
	}
	
	$sql = rtrim($sql, ",");
print_r($sql);
?>