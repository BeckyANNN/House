
setTimeout(function(){
	var user = document.querySelector(".username");
	var pwd = document.querySelector(".password");
	var oBtn = document.getElementById("btn");
	var check = document.querySelector(".checkbox");
    oBtn.onclick = function(){
	//待登录用户的对象信息
	var userInfo = {
		username:user.value,
		password:pwd.value
	}
	//异步post请求
	$.post("/jiaju/php/login.php",userInfo,function(data){
		if(data.status==0){
			location = "/jiaju/index.html";
			if(check.checked){
				setCookie("user",user.value,7);
			}else{
				setCookie("user",user.value,1);
			}
		}else{
			alert("用户名或密码错误");
		}
	},"json");

	
}
},50)
