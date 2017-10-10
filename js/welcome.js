var timer = null;
timer = setTimeout(function(){
	var count = getCookie("user");
	var user = document.querySelector(".count");
	user.innerHTML = count;
},50)