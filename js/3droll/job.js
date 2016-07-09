$(function(){
	var JobPic = $(".JobPicImages img").size();
	var deg = 360/JobPic;
	var roy = 0;
	var rox = -10;
	var xn = 0;
	var yn = 0;
	var play=null
	$(".JobPicImages img").each(function(i) {
        $(this).css({'transform':'rotateY(' + deg*i + 'deg) translatez(350px)'});
		$(this).attr('ondragstart','return false')
    });
	$(document).mousedown(function(ev){
		var x_=ev.clientX;
		var y_=ev.clientY;
		clearInterval(play);
		$(this).bind('mousemove',function(ev){
			var x=ev.clientX;
			var y=ev.clientY;
			xn = x - x_;
			yn = y - y_;
			roy += xn*0.2;
			rox += yn*0.1;
			$(".JobPicImages").css({
transform:'perspective(1000px) rotateX(' +rox+'deg)	 rotateY(' +roy+'deg)'
			},300)
			x_=ev.clientX;
			y_=ev.clientY;
		});
	}).mouseup(function(){
	   $(this).unbind('mousemove');
		var play = setInterval(function(){
			xn *=0.95;
			yn *=0.95;
			if(Math.abs(xn)<1&&Math.abs(yn)<1){
				clearInterval(play);	
			}
			roy+=xn*0.2;
			rox-=yn*0.1;
			$(".JobPicImages").css({
transform:'perspective(1000px) rotateX(' +rox+'deg)	 rotateY(' +roy+'deg)'
			},300)
		})
	})
})