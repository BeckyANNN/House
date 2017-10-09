var conTop = document.querySelector(".con-top");
var oMiddle = document.querySelector(".middle");
var pro = document.querySelector(".con-bottom>.pro");
var con = document.querySelector(".content");
var url = "http://localhost/jiaju/json/serenity.json";
var href = location.href;
var arr = href.split("?");
var p1 = new Promise(function(resolve){
	ajax("get",url,function(data){	
		var data = JSON.parse(data);
		var len = data.length;
		for(var i=0; i<len; i++){
			if(arr[1]==data[i].id){
				var series = data[i].series;
				var str="";
				str+=`
				<div class="largeImg">
					<img src=${data[i].large[0]} class="large">
				</div>
				<div class="con-img">
					<img src=${data[i].large[0]} class="middlepic">				
					<div class="filt"></div>
				</div>
				<div class="detail">
					<h3>${data[i].name}</h3>
					<p>
						<span>编号：${data[i].id}</span>
						<span>销量：${data[i].sale}</span>
					</p>
					<p>
						<span>${data[i].prePrice}</span><span>${data[i].nowPrice}</span>
					</p>
					<div class="midd-img">
						<a href="javascript:void(0);"><img src=${data[i].src[0]}></a>
					</div>
					<p>材质：<a href="#">${data[i].material}</a></p>
					<p>颜色：<a href="#"><img src=${data[i].src1[0]}></a></p>
					<p>规格：<a href="javascript:void(0);">${data[i].specifications[0]}</a></p>
					<p>数量：					
						<input type="text" value="1" class="num_now num">
						<button class="inc"></button>
						<button class="dec"></button>					
						<span>件</span>
					</p>
					<a href="javascript:void(0)" class="addCart">加入购物车</a>
					<a href="javascript:void(0)">加入收藏夹</a>
				</div>`;
				conTop.innerHTML = str;	
				str="";
				str+=`<div class="list">
					<ul>
						<li class="active goods-detail">商品详情</li>
						<li class="baoyang">售后保养</li>
					</ul>
				</div>
				<div class="pro-detail">
					<dl>
						<dt>商品系列</dt>
						<dd>${data[i].series}</dd>
					</dl>
					<dl>
						<dt>商品名称</dt>
						<dd>${data[i].name}</dd>
					</dl>
					<dl>
						<dt>商品货号</dt>
						<dd>${data[i].id}</dd>
					</dl>
					<dl>
						<dt>材质</dt>
						<dd>${data[i].material}</dd>
					</dl>
					<dl>
						<dt>规格</dt>
						<dd>${data[i].specifications[0]}</dd>
					</dl>
					<dl>
						<dt>风格</dt>
						<dd>${data[i].style}</dd>
					</dl>

				</div>
				<div class="des">
					<p>${data[i].descrip[0]}</p>
				</div>
				<div class="shouhou">
					<p>常温水洗,可非氯漂洗,中温熨烫,低温烘干</p>
				</div>`;	
				oMiddle.innerHTML = str;
			}

			if(data[i].series==series && data[i].id!=arr[1]){
				var str="";
				str+=`<ul>
						<li>
							<a href="javascript:void(0)"><img src="${data[i].src[0]}"></a>
						</li>
						<li>						
							<h3><a href="#">${data[i].name}</a></h3>
							<p>
								<span>编号：${data[i].id}</span>
								<span>销量：${data[i].sale}</span>
							</p>
							<p class="price">
								<span>${data[i].prePrice}</span>
								<span>${data[i].nowPrice}</span>
							</p>
						</li>
						<li class="charac">
							<p>材质：<a href="javascript:void(0);">${data[i].material}</a></p>
							<p>规格：<a href="javascript:void(0);">${data[i].specifications}</a></p>
						</li>
						<li>
							<p>数量：					
								<input type="text" value="1" class="num">
								<button class="inc"></button>
								<button class="dec"></button>		
								<span>件</span>
							</p>
							<a href="javascript:void(0)" class="add"  num-id="${data[i].id}">加入购物车</a>
						</li>
					</ul>`;
					pro.innerHTML = str;
			}
		}
	});
	resolve();
});
//放大镜
setTimeout(function(){
	var filt = document.querySelector(".filt");
	var conImg = document.querySelector(".con-img");
	var largeImg = document.querySelector(".largeImg");
	var large = document.querySelector(".large");
	var header = document.querySelector(".header");
	var scroll = 0;
	var t = 0;
	window.onscroll = function(){
		scroll = document.body.scrollTop||document.documentElement.scrollTop;	
	}
	
	conImg.onmousemove = function(e){
		largeImg.style.display = "block";
		filt.style.display = "block";
			var e = e||event;
			var l = e.clientX-con.offsetLeft-filt.offsetWidth/2;
			var top = header.offsetHeight-scroll;
			t = e.clientY-conImg.offsetTop-filt.offsetHeight/2-top;
			if(l<0){
				l = 0;
			}
			if(l>conImg.offsetWidth-filt.offsetWidth){
				l = conImg.offsetWidth-filt.offsetWidth;
			}
			if(t<0){
				t = 0;
			}
			if(t>conImg.offsetHeight-filt.offsetHeight){
				t = conImg.offsetHeight-filt.offsetHeight;
			}
			filt.style.left = l+"px";
			filt.style.top = t+"px";
			large.style.left = -l*largeImg.offsetWidth/conImg.offsetWidth+"px";
			large.style.top = -t*largeImg.offsetHeight/conImg.offsetHeight+"px";
		}
		conImg.onmouseout = function(e){
			largeImg.style.display = "none";
			filt.style.display = "none";
		}


		//详情，售后
		var oDes = document.querySelector(".des");
		var oSale = document.querySelector(".shouhou");
		var goodsDet = document.querySelector(".goods-detail");
		var baoyang = document.querySelector(".baoyang");
		goodsDet.onclick = function(){
			oDes.style.display = "block";
			oSale.style.display = "none";
			console.log(1);
		}
		baoyang.onclick = function(){
			oSale.style.display = "block";
			oDes.style.display = "none";
		}

		//购物数量加减
		var oDec = document.querySelectorAll(".dec");
		var oInc = document.querySelectorAll(".inc");
		var oNumNow = document.querySelector(".num_now");
		var oNum = document.querySelectorAll(".num");
		for(var i=0; i<oInc.length; i++){
			
			oDec[i].index = i;
			oInc[i].index = i;
			oDec[i].onclick = function(){
				var val = Number(oNum[this.index].value);
				if(val==1){
					return;
				}else{
					val--;
				}
				oNum[this.index].value = val;
			};
			oInc[i].onclick = function(){
				var val = Number(oNum[this.index].value);
				val++;
				oNum[this.index].value= val;
				
			};
		}
		//加入购物车
		var addCart = document.querySelector(".addCart");
		var sumNow = Number(oNumNow.value);
		addCart.onclick = function(){
			var numId = arr[1];	
			if(getCookie("init")==undefined){
				var obj = {};
			}else{
				var obj = JSON.parse(getCookie("init")); 
			}
			
			if(obj[numId]==undefined){
				obj[numId] = sumNow;
			}else{
				var sum1 = obj[numId];
				sum1 += Number(oNumNow.value);
				obj[numId] = sum1;
			}
			setCookie("init",JSON.stringify(obj),7);

			//购物车数量_顶部
			var cartNum = document.querySelector(".cart_num");
			var count = 0;
			for(var key in obj){
				count+=Number(obj[key]);
			}
			cartNum.innerHTML = count;
		}
		
		//同系列加入购物车
		var oPro = document.querySelector(".pro");
		oPro.onclick = function(e){
			var e = e||event;
			var target = e.target||e.srcElement;			
			if(target.className="add"&&target.tagName=="A"){
				var numId = target.getAttribute("num-id");
				var sum = Number(target.previousElementSibling.firstElementChild.value);
				if(getCookie("init")==undefined){
					var obj = {};
				}else{
					var obj = JSON.parse(getCookie("init")); 
				}
				if(obj[numId]==undefined){
					obj[numId] = sum;
				}else{
					var sum1 = obj[numId];
					sum1 += Number(target.previousElementSibling.firstElementChild.value);
					obj[numId] = sum1;
				}
				setCookie("init",JSON.stringify(obj),7);

				//购物车数量_顶部
				var cartNum = document.querySelector(".cart_num");
				var count = 0;
				for(var key in obj){
					count+=Number(obj[key]);
				}
				cartNum.innerHTML = count;
			}
		}
},500)

