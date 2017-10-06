//设置cookie
function setCookie(_name,_value,_expires){
	var d = new Date();
	d.setDate(d.getDate()+_expires);
	document.cookie=_name+"="+_value+";path=/;expires="+d.toGMTString();
}

//删除cookie
function delCookie(_name,_value){
	setCookie(_name,_value,-1)
}


//获取指定cookie
function getCookie(_name){
	var str = document.cookie;
	var arr = str.split("; ");
	var len = arr.length;
	for(var i=0; i<len; i++){
		var newArr = arr[i].split("=");
		if(newArr[0]==_name){
			return newArr[1]
		}
	}
}
