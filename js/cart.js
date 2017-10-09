
var checkAll = document.querySelector(".checkAll");
str="";
var item = document.querySelector(".item");
if(getCookie("init")==undefined){
	var obj = {};
}else{
	var obj = JSON.parse(getCookie("init")); 
}

//加载购物数据
ajax("get","../json/serenity.json",function(cart_data){
	var cart_data = JSON.parse(cart_data);
	for(var i=0; i < cart_data.length; i++){
		for(var key in obj){
			if(cart_data[i].id==key){
					str+=`<ul>
								<li>
									<label>
										<input type="checkbox" class="checkbox">
										<a href="product-detail.html?${cart_data[i].id}"><img src="${cart_data[i].src[0]}" alt=""></a>
									</label>
								</li>
								<li>
									<a href="product-detail.html?${cart_data[i].id}">${cart_data[i].name}</a>
									<p>${cart_data[i].material}</p>
									<p>规格:${cart_data[i].specifications[0]}</p>
								</li>
								<li>
									<p>${cart_data[i].prePrice}</p>
									<p>${cart_data[i].nowPrice}</p>
								</li>
								<li>
									<div class="product-num"  data-id="${cart_data[i].id}">
										<input type="button" value="-" class="dec">
										<input type="text" class="num" value="${obj[key]}">
										<input type="button" value="+" class="inc">
									</div>
								</li>
								<li>
									<a href="javascript:void(0);" class="modify">[ 修改 ]</a>
									<a href="javascript:void(0);" class="collection">[ 收藏 ]</a>
									<a href="javascript:void(0);" class="del">[ 删除 ]</a>
								</li>
							</ul>`;
							
				}
				item.innerHTML = str;
			}
	}
	var checkbox = document.querySelectorAll("input.checkbox");
	//全选
	checkAll.onclick = function(){
		if(checkAll.checked){
			for(var i=0; i<checkbox.length; i++){
				checkbox[i].checked = true;
			}
		}else{
			for(var i=0; i<checkbox.length; i++){
				checkbox[i].checked = false;
			}
		}
		
	}


	var inc = document.querySelectorAll(".inc");
	var dec = document.querySelectorAll(".dec");
	var num = document.querySelectorAll(".num");
	var num1 = document.querySelector(".num1");
	var oTotal = document.querySelectorAll(".total");
	var arr=[];
	


	
	item.onclick = function(e){
		var e = e||event;
		var price = [];
		var target = e.target||e.srcElement;
		var dataId = target.parentNode.getAttribute("data-id");
		//加商品
		if(target.tagName=="INPUT"&&target.className=="inc"){
			var val = Number(target.previousElementSibling.value);
			var all = 0;
			val++;
			target.previousElementSibling.value = val;
			num1.innerHTML = val;
			for(var key in obj){
				if(dataId == key){
					obj[key] = target.previousElementSibling.value;
					setCookie("init",JSON.stringify(obj),7);
					
				}
			}
			//商品数量
			var sum2 = 0;
			var oNum1 = document.querySelector(".num1");
			for(var m=0; m<num.length; m++){
				sum2 += Number(num[m].value);
			}
			oNum1.innerHTML = sum2;
			
			//商品金额
			var all_inc = 0;
			for(var i=0;i<cart_data.length; i++){
				for(var key in obj){
					if(cart_data[i].id==key){
						price = cart_data[i].nowPrice.split("￥");
						arr.push(price[1]);	
					}
				}

			}
			for(var n=0; n<num.length; n++){
				all_inc += Number(arr[n])*Number(num[n].value);	
			}
			for(var i=0; i<oTotal.length; i++){
				oTotal[i].innerHTML = "￥"+all_inc;
			}
			
			
			
			
		}
		//减商品
		if(target.tagName=="INPUT"&&target.className=="dec"){
			var val = Number(target.nextElementSibling.value);
			if(val==1){
				return;
			}else{
				val--;
			}
			target.nextElementSibling.value = val;
			num1.innerHTML = val;
			for(var key in obj){
				if(dataId == key){
					obj[key] = target.nextElementSibling.value;
					setCookie("init",JSON.stringify(obj),7);
				}
			}
			//商品数量
			var sum2 = 0;
			var oNum1 = document.querySelector(".num1");
			for(var m=0; m<num.length; m++){
				sum2 += Number(num[m].value);
			}
			oNum1.innerHTML = sum2;
		}

		//商品金额
		var all_dec = 0;
		for(var i=0;i<cart_data.length; i++){
			for(var key in obj){
				if(cart_data[i].id==key){
					price = cart_data[i].nowPrice.split("￥");
					arr.push(price[1]);	
				}
			}

		}
		for(var n=0; n<num.length; n++){
			all_dec += Number(arr[n])*Number(num[n].value);	
		}
		for(var i=0; i<oTotal.length; i++){
			oTotal[i].innerHTML = "￥"+all_dec;
		}

		//删除
		if(target.tagName=="A"&&target.className=="del"){
			for(var key in obj){
				if(target.parentNode.previousElementSibling.children[0].getAttribute("data-id") == key){
					delete obj[key];
					setCookie("init",JSON.stringify(obj),7);
				}
			}
			target.parentNode.parentNode.remove();

		}
	}
	

	//商品数量
	var sum2 = 0;
	var oNum1 = document.querySelector(".num1");
	for(var m=0; m<num.length; m++){
		sum2 += Number(num[m].value);
	}
	oNum1.innerHTML = sum2;


	//商品金额
	var all = 0;
	for(var i=0;i<cart_data.length; i++){
		for(var key in obj){
			if(cart_data[i].id==key){
				price = cart_data[i].nowPrice.split("￥");
				arr.push(price[1]);	
			}
		}
	}
	for(var n=0; n<num.length; n++){
		all += Number(arr[n])*Number(num[n].value);	
	}
	for(var i=0; i<oTotal.length; i++){
		oTotal[i].innerHTML = "￥"+all;
	}

	

	
})
