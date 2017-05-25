
function doMove ( obj, attr, dir, target, endFn ) {
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;			// ²½³¤
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			endFn && endFn();
		}
	}, 60);
}
function shake ( obj, attr, endFn ) {
	var pos = parseInt( getStyle(obj, attr) );
	var arr = [];			// 20, -20, 18, -18 ..... 0
	var num = 0;
		
	for ( var i=20; i>0; i-=2 ) {
		arr.push( i, -i );
	}
	arr.push(0);
		
	clearInterval( obj.shake );
	obj.shake = setInterval(function (){
		obj.style[attr] = pos + arr[num] + 'px';
		num++;
		if ( num === arr.length ) {
			clearInterval( obj.shake );
			endFn && endFn();
		}
	}, 50);
}

function changeOpacity ( obj, dir, target, endFn ) {
	
	dir = parseInt(parseFloat(getStyle( obj, 'opacity' ))*100) < target ? dir : -dir;
	
	clearInterval( obj.opacity );
	
	obj.opacity = setInterval(function () {
		
		var speed = parseInt(parseFloat(getStyle( obj, 'opacity' ))*100) + dir;	
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style['opacity'] = speed/100;
		obj.style.filter='alpha(opacity:'+speed+')';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			
			if ( endFn ) {
				endFn();
			}
		}
	}, 30);
}
function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }