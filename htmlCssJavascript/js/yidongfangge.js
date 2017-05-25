var square={
	obj:document.querySelector("#move"),
	deg:0,  //旋转度数
	direction:4,  //方向判断  1下 2左 3上 4右
	tunlef:function(){
		square.deg+=90;
		square.obj.style.transform = "rotate(" + square.deg+ "deg)";
	},
	tunrig:function(){
		square.deg-=90;
		square.obj.style.transform = "rotate(" + square.deg + "deg)";
	},
	tunbac:function(){
		square.deg+=180;
		square.obj.style.transform = "rotate(" + square.deg + "deg)";
	},
	go:function(){
		var xPos = parseInt(square.obj.style.left);
		var yPos = parseInt(square.obj.style.top);
		square.direction=square.deg<0?(4+(square.deg/90)%4):((square.deg/90)%4);
		if (square.direction == 3) {
			square.obj.style.top = (yPos - 40) + 'px';
		} else if (square.direction == 0) {
			square.obj.style.left = (xPos + 40) + 'px';
		} else if (square.direction == 1) {
			square.obj.style.top = (yPos + 40) + 'px';
		} else if (square.direction == 2) {
			square.obj.style.left = (xPos - 40) + 'px';
		}
		square.touch();
	},
	touch:function(){
		var xPos = parseInt(square.obj.style.left);
		var yPos = parseInt(square.obj.style.top);
		if (xPos > 360) {
			alert("碰壁了！！");
			square.obj.style.left = (xPos - 40) + 'px';
		} else if (xPos < 0) {
			alert("碰壁了！！");
			square.obj.style.left = (xPos + 40) + 'px';
		} else if (yPos > 360) {
			alert("碰壁了！！");
			square.obj.style.top = (yPos - 40) + 'px';
		} else if (yPos < 0) {
			alert("碰壁了！！");
			square.obj.style.top = (yPos + 40) + 'px';
		}
	}
}
//事件绑定
document.querySelector(".go").addEventListener("click",function(){
	square.go();
})
document.querySelector(".tunlef").addEventListener("click",function(){
	square.tunlef();
})
document.querySelector(".tunrig").addEventListener("click",function(){
	square.tunrig();
})
document.querySelector(".tunbac").addEventListener("click",function(){
	square.tunbac();
})

