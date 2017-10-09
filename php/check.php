<?php
	//跨域
	header("Access-Control-Allow-Origin:*");
	$username = $_REQUEST["username"];

	/* 在数据库中去查询是否有这条数据的用户信息 */
	// 连接数据库服务器
	$conn = mysql_connect("localhost:3306", "root", "");
	// 选择数据库
	mysql_select_db("test", $conn);
	// 创建查询SQL语句
	$sql = "SELECT count(*) FROM users WHERE username='$username'";
	// $sql = "SELECT * FROM users";
	//执行sql语句
	$result = mysql_query($sql, $conn);
	if($row = mysql_fetch_array($result)){
		if($row[0]==1){
			echo '{"status":0,"message":"exist"}';
		}else{
			echo '{"status":1,"message":"not exist"}';
		}
	}else{
		echo '{"status":2,"message":"error"}';
	}
	mysql_close();
?>