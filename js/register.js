

window.onload = function(){
	var user = document.querySelector(".username");
	var pwd = document.querySelector(".password");
	var confirm = document.querySelector(".confirm");
	var identify = document.querySelector(".identify");
	var iden = document.querySelector(".identify+span");
	var oForm =document.querySelector("form");
	var oI = document.querySelector(".identify~i");
	var oSpan = document.querySelectorAll("form>span");
	var oCheck = document.querySelector(".check");
	var oBtn = document.getElementById("btn");
	var oHello = document.querySelector(".hello>a");
	//验证账号
	user.onblur = function(){
	    var reglen = /^[a-zA-Z0-9_\-]{2,20}$/;
	    var val = user.value;
	    oSpan[0].innerHTML = "";
	    if(val.length<2||val.length>20){
	    	oSpan[0].innerHTML = "账号长度只能在2-20位字符之间";
	    	return false;
	    }
	    if(reglen.test(val)){
	    	oSpan[0].innerHTML = "";
	    }else{
	    	oSpan[0].innerHTML = "账号只能由中文、英文、数字及“_”、“-”组成";
	    }

	}

	//验证密码
	pwd.onblur = function(){
	    var reglen = /^[a-zA-Z0-9\.]{6,20}$/;
	    var val = pwd.value;
	    oSpan[1].innerHTML = "";
	    if(val.length<6||val.length>20){
	    	oSpan[1].innerHTML = "密码长度只能在6-20位字符之间";
	    	return false;
	    }
	    return true;
	    
	}
	//确认密码
	confirm.onblur = function(){
	    var val = confirm.value;
	    oSpan[2].innerHTML = "";
	   if(val!=pwd.value){
	   		oSpan[2].innerHTML = "两次输入密码不一致";
	   		return false;
	   }
	   return true;
	}
	//生成验证码
	oI.onclick = function(){
		iden.innerHTML = "";
		var arr=[1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		for(var i=0; i<4; i++){
			iden.innerHTML+=arr[parseInt(Math.random()*36)];
		}
	};	
	//验证验证码
	identify.onblur = function(){
		if(iden.innerHTML != identify.value){
			oSpan[3].innerHTML = "验证码不正确";
			return false;
		}
		return true;
	}
	//验证复选框
	oCheck.onclick = function(){
		if(oCheck.checked){
			oBtn.style.background = "#414042";
			oBtn.style.color = "white";
		}else{
			oBtn.style.background = "white";
			oBtn.style.color = "#bcbec0";
		}
	}
	oBtn.onclick = function(){
		if(user.value==""||pwd.value==""||confirm.value==""||identify.value==""||!oCheck.checked){
			alert("请完善信息");
			return false;
		} 	
		if(user.onblur()==false||pwd.onblur()==false||confirm.onblur()==false||identify.onblur()==false){
			alert("请验证信息");
			return false;
		}
		setCookie("user",user.value,7);
		
	}


}
