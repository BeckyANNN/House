window.onload = function(){
	//家具
	var bottomBox = document.querySelectorAll(".bottomlist_box");
	var url = "http://localhost/jiaju/json/jiaju.json";
	var oHello = document.querySelector(".hello>a");
	ajax("get",url,function(data){
		var data = JSON.parse(data);
		var bottomLeft = document.querySelectorAll(".bottomlist_left");
		var oUl = bottomLeft[0].children;
		var str = '';
		str += `<li>${data[0].name}</li>`;
		for(var i=1; i<9; i++){
			str += `<li><a href="${data[i].src}"  data-id="${data[i].id}">${data[i].name}</a></li>`;
		}
		oUl[0].innerHTML = str;
	

		str = "";
		str += `<li>${data[9].name}</li>`;
		for(var i=11; i<15; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl[1].innerHTML = str;
		
														
		str = "";
		str += `<li>${data[15].name}</li>`;
		for(var i=16; i<25; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl[2].innerHTML = str;
		

		str = "";
		str += `<li>${data[25].name}</li>`;
		for(var i=26; i<28; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl[3].innerHTML = str;
		

		str = "";
		str += `<li>${data[28].name}</li>`;
		for(var i=29; i<33; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl[4].innerHTML = str;
		oUl[4].style.paddingLeft = "135px";
		oUl[4].style.paddingRight = "40px";

		str = "";
		str += `<li>${data[51].name}</li>`;
		for(var i=52; i<56; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl[5].innerHTML = str;
		oUl[5].style.paddingTop = "0";

		str = "";
		str += `<li>${data[60].name}</li>`;
		for(var i=61; i<63; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl[6].innerHTML = str;

		str = "";
		str += `<li>${data[33].name}</li>`;
		for(var i=34; i<38; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl[7].innerHTML = str;		
		oUl[7].style.position = "absolute";
		oUl[7].style.left = "0";
		oUl[7].style.top = "250px";
		
		str = "";
		str += `<li>${data[38].name}</li>`;
		for(var i=39; i<47; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl[8].innerHTML = str;
		oUl[8].style.position = "absolute";
		oUl[8].style.left = "196px";
		oUl[8].style.top = "163px";

		str = "";
		str += `<li>${data[47].name}</li>`;
		for(var i=48; i<51; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl[9].innerHTML = str;
		oUl[9].style.position = "absolute";
		oUl[9].style.left = "307px";
		oUl[9].style.top = "272px";

		str = "";
		str += `<li>${data[55].name}</li>`;
		for(var i=56; i<59; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl[10].innerHTML = str;
		oUl[10].style.position = "absolute";
		oUl[10].style.left = "504px";
		oUl[10].style.top = "272px";



		bottomLeft[1].style.width = "305px";
		var oUl_1 = bottomLeft[1].children;
		var str = '';
		str += `<li>${data[63].name}</li>`;
		for(var i=64; i<70; i++){
			str += `<li><a href="${data[i].src}"  data-id="${data[i].id}">${data[i].name}</a></li>`;
		}
		oUl_1[0].innerHTML = str;
	
		str = "";
		str += `<li>${data[60].name}</li>`;
		for(var i=61; i<63; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl_1[1].innerHTML = str;

		str = "";
		str += `<li>${data[70].name}</li>`;
		for(var i=71; i<74; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl_1[2].innerHTML = str;
		oUl_1[2].style.position = "absolute";
		oUl_1[2].style.left = "0";
		oUl_1[2].style.top = "210px";
														
		
		bottomLeft[2].style.width = "305px";
		var oUl_2 = bottomLeft[2].children;
		var str = '';
		str += `<li>${data[74].name}</li>`;
		for(var i=75; i<78; i++){
			str += `<li><a href="${data[i].src}"  data-id="${data[i].id}">${data[i].name}</a></li>`;
		}
		oUl_2[0].innerHTML = str;
	
		str = "";
		str += `<li>${data[60].name}</li>`;
		for(var i=61; i<63; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl_2[1].innerHTML = str;

		str = "";
		str += `<li>${data[78].name}</li>`;
		for(var i=79; i<82; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl_2[2].innerHTML = str;
		oUl_2[2].style.position = "absolute";
		oUl_2[2].style.left = "0";
		oUl_2[2].style.top = "180px";



		//家纺
		
		bottomLeft[3].parentNode.style.position = "absolute";
		bottomLeft[3].parentNode.style.left = "210px";
		bottomLeft[3].style.width = "650px";
		var oUl_3 = bottomLeft[3].children;
		var str = '';
		str += `<li>${data[82].name}</li>`;
		for(var i=83; i<88; i++){
			str += `<li><a href="${data[i].src}"  data-id="${data[i].id}">${data[i].name}</a></li>`;
		}
		oUl_3[0].innerHTML = str;
		

		str = '';
		str += `<li>${data[88].name}</li>`;
		for(var i=89; i<97; i++){
			str += `<li><a href="${data[i].src}"  data-id="${data[i].id}">${data[i].name}</a></li>`;
		}
		oUl_3[1].innerHTML = str;

		str = '';
		str += `<li>${data[97].name}</li>`;
		for(var i=98; i<101; i++){
			str += `<li><a href="${data[i].src}"  data-id="${data[i].id}">${data[i].name}</a></li>`;
		}
		oUl_3[2].innerHTML = str;

		str = "";
		str += `<li>${data[28].name}</li>`;
		for(var i=29; i<33; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl_3[3].innerHTML = str;
		oUl_3[3].style.position = "absolute";
		oUl_3[3].style.left ="470px";

		str = "";
		str += `<li>${data[60].name}</li>`;
		for(var i=61; i<63; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl_3[4].innerHTML = str;
		oUl_3[4].style.position = "absolute";
		oUl_3[4].style.left ="470px";
		oUl_3[4].style.top ="158px";
		
		str = "";
		str += `<li>${data[101].name}</li>`;
		for(var i=102; i<104; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl_3[5].innerHTML = str;
		oUl_3[5].style.position = "absolute";
		oUl_3[5].style.left ="311px";
		oUl_3[5].style.top ="130px";

		str = "";
		str += `<li>${data[104].name}</li>`;
		for(var i=105; i<107; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl_3[6].innerHTML = str;
		oUl_3[6].style.position = "absolute";
		oUl_3[6].style.left ="0";
		oUl_3[6].style.top ="185px";

		str = "";
		str += `<li>${data[107].name}</li>`;
		for(var i=108; i<111; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl_3[7].innerHTML = str;
		oUl_3[7].style.position = "absolute";
		oUl_3[7].style.left ="154px";
		oUl_3[7].style.top ="240px";

		//装饰品
		bottomLeft[4].parentNode.style.position = "absolute";
		bottomLeft[4].parentNode.style.left = "385px";
		bottomLeft[4].style.width = "480px";
		var oUl_4 = bottomLeft[4].children;
		str = "";
		str += `<li>${data[111].name}</li>`;
		for(var i=112; i<117; i++){
			str += `<li><a href="${data[i].src}"  data-id="${data[i].id}">${data[i].name}</a></li>`;
		}
		oUl_4[0].innerHTML = str;
	
		str = "";
		str += `<li>${data[117].name}</li>`;
		for(var i=118; i<119; i++){
			str += `<li><a href="${data[i].src}"  data-id="${data[i].id}">${data[i].name}</a></li>`;
		}
		oUl_4[1].innerHTML = str;
		oUl_4[1].style.margin = "0 50px";

		str = "";
		str += `<li>${data[60].name}</li>`;
		for(var i=61; i<63; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl_4[2].innerHTML = str;

		str = "";
		str += `<li>${data[119].name}</li>`;
		for(var i=120; i<125; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl_4[3].innerHTML = str;
		oUl_4[3].style.position = "absolute";
		oUl_4[3].style.left ="280px";
		oUl_4[3].style.top ="94px";

		str = "";
		str += `<li>${data[125].name}</li>`;
		for(var i=126; i<130; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl_4[4].innerHTML = str;
		oUl_4[4].style.position = "absolute";
		oUl_4[4].style.left ="0";
		oUl_4[4].style.top ="192px";


		str = "";
		str += `<li>${data[130].name}</li>`;
		for(var i=131; i<133; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl_4[5].innerHTML = str;
		oUl_4[5].style.position = "absolute";
		oUl_4[5].style.left ="179px";
		oUl_4[5].style.top ="267px";

		str = "";
		str += `<li>${data[133].name}</li>`;
		for(var i=134; i<136; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl_4[6].innerHTML = str;
		oUl_4[6].style.position = "absolute";
		oUl_4[6].style.left ="0";
		oUl_4[6].style.top ="333px";

		//餐厨用品
		bottomLeft[5].parentNode.style.position = "absolute";
		bottomLeft[5].parentNode.style.left = "585px";
		bottomLeft[5].style.width = "480px";
		var oUl_5 = bottomLeft[5].children;
		str = "";
		str += `<li>${data[136].name}</li>`;
		for(var i=137; i<143; i++){
			str += `<li><a href="${data[i].src}"  data-id="${data[i].id}">${data[i].name}</a></li>`;
		}
		oUl_5[0].innerHTML = str;

		str = "";
		str += `<li>${data[143].name}</li>`;
		for(var i=144; i<151; i++){
			str += `<li><a href="${data[i].src}"  data-id="${data[i].id}">${data[i].name}</a></li>`;
		}
		oUl_5[1].innerHTML = str;

		str = "";
		str += `<li>${data[60].name}</li>`;
		for(var i=61; i<63; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl_5[2].innerHTML = str;

		str = "";
		str += `<li>${data[151].name}</li>`;
		for(var i=152; i<157; i++){
			str += `<li><a href="${data[i].src}"  data-id="${data[i].id}">${data[i].name}</a></li>`;
		}
		oUl_5[3].innerHTML = str;



		//儿童
		bottomLeft[6].parentNode.style.position = "absolute";
		bottomLeft[6].parentNode.style.left = "610px";
		bottomLeft[6].style.width = "650px";
		var oUl_6 = bottomLeft[6].children;
		str = "";
		str += `<li>${data[157].name}</li>`;
		for(var i=158; i<165; i++){
			str += `<li><a href="${data[i].src}"  data-id="${data[i].id}">${data[i].name}</a></li>`;
		}
		oUl_6[0].innerHTML = str;

		str = '';
		str += `<li>${data[88].name}</li>`;
		for(var i=89; i<96; i++){
			str += `<li><a href="${data[i].src}"  data-id="${data[i].id}">${data[i].name}</a></li>`;
		}
		oUl_6[1].innerHTML = str;

		str = "";
		str += `<li>${data[165].name}</li>`;
		for(var i=166; i<173; i++){
			str += `<li><a href="${data[i].src}"  data-id="${data[i].id}">${data[i].name}</a></li>`;
		}
		oUl_6[2].innerHTML = str;

		str = "";
		str += `<li>${data[60].name}</li>`;
		for(var i=61; i<63; i++){
			str += `<li><a href="${data[i].src}" data-id="${data[i].id}">${data[i].name}</a></li>`
		}
		oUl_6[3].innerHTML = str;

		str = "";
		str += `<li>${data[173].name}</li>`;
		for(var i=174; i<176; i++){
			str += `<li><a href="${data[i].src}"  data-id="${data[i].id}">${data[i].name}</a></li>`;
		}
		oUl_6[4].innerHTML = str;

	});	
}