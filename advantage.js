// JavaScript Document
$(document).ready(function(){
	var n,x,i=0
	$(document).scroll(function(){
		n=$(document).scrollTop()
		if(n>150)
		{
			$(".nav_children").slideUp(300)
			}
		else
		{	$(".nav_children").slideDown(300)
			}
		})
		
$(".image_box:gt(0)").hide()
	$(".content li").mouseenter(function(){
		$(".content li").removeClass("current")
		x=$(this).addClass("current").index()
		if(x==i)
		{
			$(".image_box").eq(x).show()
			}
		else if(x>i){	
		$(".image_box").fadeOut(700)
		$(".image_box").eq(x).fadeIn(700)
		i=x
		}
		else{ 
		$(".image_box").stop(false,true).fadeOut(700)
		$(".image_box").eq(x).stop(false,true).fadeIn(700)
		
		i=x	
			}
	})
		
		
$(".list1_opa").hide();
$(".list1").mouseenter(function(){
	$(this).children(".list1_opa").fadeIn(300).mouseleave(function(){
		$(".list1_opa").fadeOut(300)
		})
	  
	})
	
 $(".list3 img:gt(1):odd").hide()
 $(".list3 img:first").hide()
 $(".list3").mouseenter(function(){
 $(".list3 img:odd").hide()
 $(".list3 img:even").show()
	$(this).children().eq(0).hide()
	$(this).children().eq(1).show()
	 })
	 
$(".eng").hide();
	$(".language").mouseenter(function(){
		$(".eng").show();$(this).mouseleave(function(){
		$(".eng").hide()	
		
			})})
			
$(".circle").hide()
$(".circle_1").hide()
$(".circle_2").hide()
$(".circle_3").hide()
$(".circle_4").hide()
$(".circle_5").hide()
$(".circle_6").hide()
$(".circle_7").hide()
$(".circle_8").hide()

function sca(){
	$(".circle").addClass("scale").show()
	}
setInterval(sca,10)
function sca_1(){
	$(".circle_1").addClass("scale_1").show()
	}
setInterval(sca_1,1000)
function sca_2(){
	$(".circle_2").addClass("scale_2").show()
	}
setInterval(sca_2,2000)

function sca_3(){
	$(".circle_3").addClass("scale_3").show()
	}
setInterval(sca_3,1000)
function sca_4(){
	$(".circle_4").addClass("scale_4").show()
	}
setInterval(sca_4,2000)
function sca_5(){
	$(".circle_5").addClass("scale_5").show()
	}
setInterval(sca_5,3000)

function sca_6(){
	$(".circle_6").addClass("scale_6").show()
	}
setInterval(sca_6,2300)
function sca_7(){
	$(".circle_7").addClass("scale_7").show()
	}
setInterval(sca_7,3300)
function sca_8(){
	$(".circle_8").addClass("scale_8").show()
	}
	});



