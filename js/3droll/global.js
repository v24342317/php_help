$(function(){ 
   $(".Tab .TabTag a").click(function(){
	   $(this).addClass("active").siblings().removeClass("active");
	   var TabIndex = $(this).index();
	   var TabContent = $(this).parent(".TabTag").siblings(".TabContentList").children(".TabContent");
	   TabContent.eq(TabIndex).show().siblings(TabContent).hide();
	})
	$(".SignInput input").focus(function(){
		$(this).siblings("label").hide()
	})
	$(".SignInput input").blur(function(){
		if($(this).val()=="")$(this).siblings("label").show();
	})
    $(".nav a").click(function(){
		alert("建设中，敬请期待");
		
		})
}); 

window.onload=function(){
	document.getElementById("load").remove();
}

document.addEventListener("visibilitychange",function(){document.title=document.hidden?"出BUG了，快看！":"Hello 小白"})