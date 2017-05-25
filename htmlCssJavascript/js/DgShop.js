$(document).ready(function(){
	$(window).scroll(function(){
		var top=$(document).scrollTop();
		var menu=$(".menu");
		var items=$(".container").find(".item");
		var currentId="";
        items.each(function(){
        	var m=$(this);
        	if(top>m.offset().top - 200){
        		currentId="#"+ m.attr("id");
        	}else{
        		return false;
        	}
        });
         
        var link=menu.find(".current");
        if(currentId && link.attr("href")!=currentId){
        	link.removeClass("current");
        	menu.find("[href=" + currentId + "]").addClass("current");

        }
	});
});

