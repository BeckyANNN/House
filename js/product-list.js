
	var oList = document.querySelectorAll(".list");
	var oSpan= document.querySelectorAll(".list>span");
	var oUl = document.querySelectorAll(".list>ul");
	var oBtn = document.querySelector(".button");
	var oPrev = document.querySelector(".prev");
	console.log(oPrev);
	var oNext = document.querySelector(".next");
	var obj = {};
	var now = 1;
	//侧边栏显示-隐藏
	for(var i=0; i<oList.length; i++){
		oList[i].index = i;
		oList[i].onclick = function(){
			for(var j=0; j<oList.length; j++){
				oUl[j].style.display = "none";
				oSpan[j].style.backgroundPosition = "-20px -30px";
				oSpan[this.index].style.backgroundPosition = "0 -30px";
				oUl[this.index].style.display = "block";
			}
			
		}
	}

	//侧边栏滑动效果
	var oAll =document.querySelectorAll(".all");
	var oA = document.querySelectorAll(".all>a");
	for(var i=0; i<oAll.length; i++){
		oAll[i].index = i;
		oAll[i].onclick = function(){
			for(var j=0; j<oAll.length; j++){
				oAll[j].style.background = "#fff";
				oA[j].style.color = "#808285";
				this.style.background = "rgb(194, 181, 155)";
				oA[this.index].style.color = "#fff";
			}

		}
	}
	//获取产品信息
	var contPro = document.querySelector(".cont-product");
	var contBanner = document.querySelector(".conbanner");
	//获取URL地址
	var href = location.href;
	//获取URL问号后的内容
	var arr = href.split("?");
	if(arr[1]=="ALL%20AUTUMN"){
		oAll[0].style.background = "rgb(194, 181, 155)";
		oA[0].style.color = "#fff";
		var url = "http://localhost/jiaju/json/all.json";
		ajax("get",url,function(data){
			page(data);

		})

	}else if(arr[1]=="ALL%20SERENITY"){
		var Img = document.createElement("img");
			Img.src="http://localhost/jiaju/img/img1.jpg";
			contBanner.appendChild(Img);
		oAll[1].style.background = "rgb(194, 181, 155)";
		oA[1].style.color = "#fff";
		var url = "http://localhost/jiaju/json/serenity.json";
		ajax("get",url,function(data){
			page(data);

		})
	}else if(arr[1]=="Furniture"){           //家具
		var Img = document.createElement("img");
		Img.src="http://localhost/jiaju/img/Furniture.jpg";
		contBanner.appendChild(Img);
		oSpan[0].style.backgroundPosition = "0 -30px";
		oUl[0].style.display = "block";		
		var url = "http://localhost/jiaju/json/Furniture.json";
		ajax("get",url,function(data){
			page(data);
		});
	}





	function page(data){
		var data = JSON.parse(data);

			//每页数据个数
			var pagelen = 32;
			//所有数据总和
			var len = data.length;
			//获得页数
			var num = Math.ceil(len/pagelen);
			//页数加载到页面
			for(var i=0; i<num;i++){
				var oA = document.createElement("a");
				oA.className = "page";
				oA.innerHTML = i+1;
				oBtn.insertBefore(oA,oNext);
			}
			//加载数据
			datapage(0);
			function datapage(n){
				var str = '';
				for(var i=n*pagelen; i<Math.min(len,(n+1)*pagelen); i++){
					str+=`<dl>
								<dt>
									<a href="http://localhost/jiaju/html/product-detail.html?${data[i].id}">
										<img src="${data[i].src[0]}" alt="">
									</a>
								</dt>
								<dd>
									<a href="#">${data[i].name}</a>
									<p>${data[i].prePrice}</p><span>New Sale</span>
									<p>${data[i].nowPrice}</p>
								</dd>
							</dl>`;
				}
				contPro.innerHTML = str;
			}
			//点击页数			 
			oBtn.onclick = function(e){
				var e = e||event;

				var target = e.target || e.srcElement;
				if(target.className==="page"){
					var inner = Number(target.innerHTML);
					datapage(inner-1);
					now = inner;
				}
			};

			//点击上一页	
			oPrev.onclick = function(){
				console.log(now);
				if(now==1){
					return;
				}else{
					datapage(now-2);
					now--;
				}
			};
			//点击下一页
			oNext.onclick = function(){
				if(now == num){
					return;
				}else{
					datapage(now);
					now++;
				}
			}
			
	}
	