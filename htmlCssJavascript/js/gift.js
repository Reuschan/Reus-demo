var data=['iphone6','ipad','三星note7','1000元超市购物券','谢谢参与','50元充值卡'],
    timer=null;


window.onload=function(){
	    start=document.getElementById('start'),
	    stop=document.getElementById('stop');

	start.onclick=startFun;
	stop.onclick=stopFun;    


 function startFun(){
	clearInterval(timer);
	timer=setInterval(function(){
		var title=document.getElementById('title'),
		    mes=Math.floor(Math.random()*data.length);
		title.innerHTML=data[mes];
	},100);

    start.style.backgroundColor='#666';

  };

  function stopFun(){
     clearInterval(timer);
     start.style.backgroundColor='#f00';

  };

}