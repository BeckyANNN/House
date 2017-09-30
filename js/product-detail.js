var conTop = document.querySelector(".con-top");
var oMiddle = document.querySelector(".middle");
var pro = document.querySelector(".con-bottom>.pro");
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
					<img src=${data[i].large[0]} alt="">
				</div>
				<div class="con-img">
					<img src=${data[i].large[0]} alt="">
					
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
						<input type="text" value="1">
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
						<li class="active">商品详情</li>
						<li>售后保养</li>
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
								<input type="text" value="1">
								<button class="inc"></button>
								<button class="dec"></button>		
								<span>件</span>
							</p>
							<a href="javascript:void(0)" class="addCart">加入购物车</a>
						</li>
					</ul>`;
					pro.innerHTML = str;
			}
		}
	});
	resolve();
	//放大镜
p1.then(function(){
	var filt = document.querySelector(".filt");
	console.log(filt);
	filt.onmousemove = function(e){
		var e = e||event;
		var l = e.offsetLeft;
		var t = e.offsetTop;
		console.log(l,t);
	}
})
});

