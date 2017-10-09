<?php
	//获取注册传递的数据
	$username = $_POST["username"];
	$password = $_POST["password"];
	//连接数据库
	$con = mysql_connect("localhost:3306","root","");

	//选择数据库
	mysql_select_db("test");
	//创建添加的SQL语句
	$sql = "INSERT INTO users (username,password) VALUES ('$username','$password')";
	//执行SQL语句,返回执行结果的boolean值
	$result = mysql_query($sql);
	//根据查询结果集判断
	if($result){
		echo '{"status":1,"message":"success"}';
	}else{
		echo '{"status":0,"message":"faild"}';
	}
	//关闭数据库
	mysql_close();
?>