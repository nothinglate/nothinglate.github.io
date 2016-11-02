// JavaScript Document
$(function(){
var n=0,x=0;
$(document).scroll(function(){
	n=$(document).scrollTop()
	
	if(n>300)
	{	
		$(".side_bar").addClass("effect")
		}
	else{
		$(".side_bar").removeClass("effect")
		}
	if(n>0 && n<720)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(1).addClass("current")
		}
	if(n>=720 && n<1177)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(2).addClass("current")
		}
	if(n>=1177 && n<1634)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(3).addClass("current")
		}	
	if(n>=1634 && n<2091)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(4).addClass("current")
		}
	if(n>=2091 && n<2548)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(5).addClass("current")
		}
	if(n>2548 && n<3005)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(6).addClass("current")
		}										
	if(n>=3005 && n<3462)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(7).addClass("current")
		}						
	if(n>=3462 && n<3919)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(8).addClass("current")
		}
	if(n>=3919 && n<4376)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(9).addClass("current")
		}
	if(n>=4376 && n<4833)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(10).addClass("current")
		}
	if(n>=4833 && n<5290)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(11).addClass("current")
		}
	if(n>=5290 && n<5747)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(12).addClass("current")
		}
	if(n>=5747 && n<6204)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(13).addClass("current")
		}
	if(n>=6204 && n<6661)
	{	
		$(".hardware").removeClass("current")
		$(".hardware").eq(0).addClass("current")
		}	
	if(n>=6661 && n<7118)
	{	
		$(".hardware").removeClass("current")
		$(".hardware").eq(1).addClass("current")
		}
	if(n>=7118 && n<7575)
	{	
		$(".hardware").removeClass("current")
		$(".hardware").eq(2).addClass("current")
		}
	if(n>=7575 && n<8032)
	{	
		$(".hardware").removeClass("current")
		$(".hardware").eq(3).addClass("current")
		}
	if(n>=8032 && n<8489)
	{	
		$(".hardware").removeClass("current")
		$(".hardware").eq(4).addClass("current")
		}
	if(n>=8489 && n<8946)
	{	
		$(".kitchen").removeClass("current")
		$(".kitchen").eq(0).addClass("current")
		}
	if(n>=8946 && n<9403)
	{	
		$(".kitchen").removeClass("current")
		$(".kitchen").eq(1).addClass("current")
		}
	if(n>=9403 && n<9860)
	{	
		$(".kitchen").removeClass("current")
		$(".kitchen").eq(2).addClass("current")
		}
	if(n>=9860 && n<10317)
	{	
		$(".kitchen").removeClass("current")
		$(".kitchen").eq(3).addClass("current")
		}
	if(n>=10317 && n<10774)
	{	
		$(".kitchen").removeClass("current")
		$(".kitchen").eq(4).addClass("current")
		}
	if(n>=10774 && n<11231)
	{	
		$(".kitchen").removeClass("current")
		$(".kitchen").eq(5).addClass("current")
		}
	if(n>=11231 && n<11688)
	{	
		$(".kitchen").removeClass("current")
		$(".kitchen").eq(6).addClass("current")
		}	
	if(n>=11688 && n<12145)
	{	
		$(".health").removeClass("current")
		$(".health").eq(0).addClass("current")
		}
	if(n>=12145 && n<12602)
	{	
		$(".health").removeClass("current")
		$(".health").eq(1).addClass("current")
		}
	if(n>=12602 && n<13059)
	{	
		$(".health").removeClass("current")
		$(".health").eq(2).addClass("current")
		}	
	if(n>=13059 && n<13516)
	{	
		$(".personal_care").removeClass("current")
		$(".personal_care").eq(0).addClass("current")
		}
	if(n>=13516 && n<13973)
	{	
		$(".personal_care").removeClass("current")
		$(".personal_care").eq(1).addClass("current")
		}
	if(n>=13973 && n<14430)
	{	
		$(".personal_care").removeClass("current")
		$(".personal_care").eq(2).addClass("current")
		}
	if(n>=14430 && n<14887)
	{	
		$(".custom").removeClass("current")
		$(".custom").eq(0).addClass("current")
		}		
																																								
	})
	
$(".hardware,.kitchen,.health,.personal_care,.custom").hide()
$(".list1 .title").click(function(){
	$("body").animate({scrollTop:300}, 300);
		$(".life").show()
		$(".hardware,.kitchen,.health,.personal_care,.custom").hide()
		$(".in_list1,.in_list2,.in_list3,.in_list4,.in_list5").removeClass("bgcolor")
		$(this).addClass("bgcolor")
		
	})
$(".life").click(function(){
	x=$(this).index()
	x-=1
	$("body").animate({scrollTop:300+457*x}, 300);
	})
$(".hardware").click(function(){
	x=$(this).index()
	x-=2
	$("body").animate({scrollTop:300+457*x}, 300);
	})
$(".kitchen").click(function(){
	x=$(this).index()
	x-=3
	$("body").animate({scrollTop:300+457*x}, 300);
	})
$(".health").click(function(){
	x=$(this).index()
	x-=4
	$("body").animate({scrollTop:300+457*x}, 300);
	})
$(".personal_care").click(function(){
	x=$(this).index()
	x-=5
	$("body").animate({scrollTop:300+457*x}, 300);
	})
						
	
$(".list1 .in_list1").click(function(){
	$(".title,.in_list2,.in_list3,.in_list4,.in_list5").removeClass("bgcolor")
	$(".in_list1").addClass("bgcolor")
	$("body").animate({scrollTop:6240}, 300);
		$(".hardware").show()
		$(".life,.kitchen,.health,.personal_care,.custom").hide()
		
	})
$(".list1 .in_list2").click(function(){
	$(".title,.in_list1,.in_list3,.in_list4,.in_list5").removeClass("bgcolor")
	$(".in_list2").addClass("bgcolor")	
	$("body").animate({scrollTop:8525}, 300);
		$(".hardware,.life,.health,.personal_care,.custom").hide()
		$(".kitchen").show()
	})
$(".list1 .in_list3").click(function(){
	$(".title,.in_list2,.in_list1,.in_list4,.in_list5").removeClass("bgcolor")
	$(".in_list3").addClass("bgcolor")	
	$("body").animate({scrollTop:11725}, 300);
		$(".hardware,.kitchen,.life,.personal_care,.custom").hide()
		$(".health").show()
	})
$(".list1 .in_list4").click(function(){
	$(".title,.in_list2,.in_list3,.in_list1,.in_list5").removeClass("bgcolor")
	$(".in_list4").addClass("bgcolor")	
	$("body").animate({scrollTop:13096}, 300);
		$(".hardware,.kitchen,.health,.life,.custom").hide()
		$(".personal_care").show()
	})				
$(".list1 .in_list5").click(function(){
	$(".title,.in_list2,.in_list3,.in_list4,.in_list1").removeClass("bgcolor")
	$(".in_list5").addClass("bgcolor")	
	$("body").animate({scrollTop:14467}, 300);
		$(".hardware,.kitchen,.health,.personal_care,.life").hide()
		$(".custom").show()
	})
	
	
$(".eng").hide();
	$(".language").mouseenter(function(){
		$(".eng").show();$(this).mouseleave(function(){
		$(".eng").hide()		
})})	
	
	
	})