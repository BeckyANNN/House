<?php
	$username = $_REQUEST["username"];
	$conn = mysql_connect("localhost:3306","root","");

	mysql_select_db("test");

	$sql = "SELECT * FROM users WHERE username='$username'";
	$result = mysql_query($sql);
	if($result){
		echo '{"status":0,"message":"exist"}';
	}else{
		echo '{"status":1,"message":"not exist"}';
	}
	mysql_close();
?>