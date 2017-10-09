//冒泡排序
function maopao(arr){
	for(var i=0; i<arr.length-1; i++){
		for(var j=0; j<arr.length-1-i; j++){
			if(arr[j]>arr[j+1]){
				var temp;
				temp = a[j];
				a[j] = a[j+1];
				a[j+1] = temp;
			}
		}
	}
	return arr;
}

//选择排序
function select(arr){
	for(var i=0; i<arr.length-1; i++){
		for(var j=i; j<arr.length-1; j++){
			if(arr[i]>arr[j+1]){
				var temp;
				temp = a[i];
				a[i] = a[j+1];
				a[j+1] = temp;
			}
		}
	}
	return arr;
}
//将日期格式转换为字符串
function datetoString(date,sign){
	sign = sign==undefined?"/":"sign";
	return date.getFullYear()+sign+isGeWei(date.getMonth()+1)+sign+isGeWei(date.getDate())+" "+isGeWei(date.getHours())+":"+isGeWei(date.getMinutes())+":"+isGeWei(date.getSeconds());
}

//生成一个n行m列的表格
function createTable(n,m){
		var str = "";
		str += "<table>";
		for(var i=0; i<n;i++){
			str += "<tr>";
			for(var j=0; j<m; j++){
				str += "<td>"+parseInt(Math.random()*100)+"</td>";
			}
			str += "</tr>";
		}
		str += "<table>";
		document.body.innerHTML = str;
	}

//整数num从右边开始的第n位数字的值
function digit(num,n){
		var str = num.toString();
		var val = str.charAt(str.length-n);
		return val;
	}

//传入任意个数字，返回最大值
function getMax(){
	for(var i=0; i<arguments.length; i++){
		var max = arguments[0];
		if(max<arguments[i]){
			max = arguments[i];
		}
	}
	return max;
}
//判断一个字符串的内容是不是纯数字
function isNumber(str){
	var n = Number(str);
	if(typeof n=="number" && !isNaN(n)){
		alert(str+"是一个纯数字");
	}else{
		alert(str+"不是一个纯数字");
	}
}
//字符串格式转换成时间对象
function stringtoDate(date){
	var time = new Date(date);
	return time;
}

// 将时间戳转换成时间
function parsetoDate(date){//date为时间戳
	var time = new Date(date);
	return time;
}
//判断num是否为个位数
function isGeWei(num){
	return num<10?'0'+num:num;
}

//事件监听（捕获）的封装
function addEventListener(elem,type,fn,useCapture){
	useCapture = useCapture||false;
	if(arguments.length<3){
		return;
	}
	if(elem.addEventListener){
		elem.addEventListener(type,fn,useCapture);
	}else{
		elem.attachEvent("on"+type,fn);
	}


}

//获取非行间样式
function getStyle(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr];
	}else{
		return getComputedStyle(ele,false)[attr];
	}
}

//封装自定义属性
function attr(ele,eleName,val){
	if(arguments.length==3){
		if(val=="del"){
			return ele.removeAttribute(eleName);
		}else{
			return ele.setAttribute(eleName, val);
		}

	}
	if(arguments.length==2){
		return ele.getAttribute(eleName);
	}
}

//完美运动框架
function move(obj,json,fn){
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
				var bStop = true;
				for(var attr in json){
					var iCur = 0;
					if(attr=="opacity"){
						oCur = parseInt(parseFloat(getStyle(obj,attr))*100);
					}else{
						oCur = parseInt(getStyle(obj,attr));
					}

					var speed = 0;
					speed = (json[attr]-oCur)/8;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					if(oCur!=json[attr]){
						bStop = false;
					}

					if(attr == "opacity"){
						obj.style.filter = "alpha(opacity:"+oCur+speed+")";
						obj.style.opacity = (oCur+speed)/100;
					}else{
						obj.style[attr] = oCur+speed+"px";
					}
				}
				if(bStop){
					clearInterval(obj.timer);
					if(fn){
						fn();
					}
				}
			},30);
		}

//获取元素类名
function getElementsByClassName(className){
	var arr = [];
	var oTag = document.getElementsByTagName("*");
	for(var i=0; i<oTag.length;i++){
		if(oTag[i].className == className){
			arr.push(oTag[i]);
		}
	}
	return arr;
}