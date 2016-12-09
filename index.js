// JavaScript Document
window.onload=function(){
	var x=0,i=0
	$(".banner div:gt(0)").hide();
	setInterval(time,4000);
function time(){
	if(x<3)
	{
		x+=1;
		i=x;
	}
	else{x=0}
	$(".banner div").fadeOut(700).eq(x).fadeIn(700);
	$(".banner li").removeClass("current")
	$(".banner li").eq(x).addClass("current")
	}
	$(".banner a").click(function(){
	$(".banner li").removeClass("current");
	$(this).children().addClass("current")
	x=$(this).index();
	if(i==x){
		$(".banner div").eq(x).show()
		}
		else{
		$(".banner div").stop(false,true).fadeOut(700).eq(x).fadeIn(700)
		i=x;
		}
	})
	
	$(".eng").hide();
	$(".language").mouseenter(function(){
		$(".eng").show();$(this).mouseleave(function(){
		$(".eng").hide()	
		
			})})
			
var n=0
int=setInterval(product_switch,3000)
	function product_switch(){
		if(n<4){	
			n+=1
		}else{
			$(".special").css({left:0})
			n=1
			}
		$(".special").animate({left:-1170*n},200)
		}
		
$(".arrow_r").click(function(){
	clearInterval(int)
	if(n<4){
		n+=1
		$(".special").animate({left:-1170*n},200)
		}
	else{
		$(".special").css({left:0})
		n=1
		$(".special").animate({left:-1170*n},200)
		}
	})
		
$(".arrow_l").click(function(){
	clearInterval(int)
	if(n==0)
	{
	$(".special").css({left:-4680})
	n=3
		}	
	else{
		n-=1;
		}	
	$(".special").animate({left:-1170*n},200)
	})
	
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
setTimeout(sca,10)
function sca_1(){
	$(".circle_1").addClass("scale_1").show()
	}
setTimeout(sca_1,800)
function sca_2(){
	$(".circle_2").addClass("scale_2").show()
	}
setTimeout(sca_2,1500)

function sca_3(){
	$(".circle_3").addClass("scale_3").show()
	}
setTimeout(sca_3,1000)
function sca_4(){
	$(".circle_4").addClass("scale_4").show()
	}
setTimeout(sca_4,1800)
function sca_5(){
	$(".circle_5").addClass("scale_5").show()
	}
setTimeout(sca_5,2500)

function sca_6(){
	$(".circle_6").addClass("scale_6").show()
	}
setTimeout(sca_6,2300)
function sca_7(){
	$(".circle_7").addClass("scale_7").show()
	}
setTimeout(sca_7,3100)
function sca_8(){
	$(".circle_8").addClass("scale_8").show()
	}
setTimeout(sca_8,3800)
}