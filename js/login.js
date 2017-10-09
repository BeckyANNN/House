
var user = document.querySelector(".username");
var pwd = document.querySelector(".password");
var oBtn = document.getElementById("btn");
var username = getCookie("user");
oBtn.onclick = function(){
	if(username==undefined){
		alert("用户名或密码错误")
	}else{
		user.value = username;
		setCookie("user",user.value,7);
	}
	
}
