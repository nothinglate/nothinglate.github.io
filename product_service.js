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
	if(n>=0 && n<757)
	{	
		$(".in_list1,.in_list2,.in_list3,.in_list4,.in_list5").removeClass("bgcolor")
		$(".title").addClass("bgcolor")
		$(".hardware,.kitchen,.health,.personal_care,.custom").hide()	
		$(".life").show()	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(1).addClass("current")
		}
	if(n>=757 && n<1214)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(2).addClass("current")
		}
	if(n>=1214 && n<1671)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(3).addClass("current")
		}	
	if(n>=1671 && n<2128)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(4).addClass("current")
		}
	if(n>=2128 && n<2585)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(5).addClass("current")
		}
	if(n>2585 && n<3042)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(6).addClass("current")
		}										
	if(n>=3042 && n<3499)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(7).addClass("current")
		}						
	if(n>=3499 && n<3956)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(8).addClass("current")
		}
	if(n>=3956 && n<4413)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(9).addClass("current")
		}
	if(n>=4413 && n<4870)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(10).addClass("current")
		}
	if(n>=4870 && n<5327)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(11).addClass("current")
		}
	if(n>=5327 && n<5784)
	{	
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(12).addClass("current")
		}
	if(n>=5784 && n<6241)
	{	
		$(".in_list1,.in_list2,.in_list3,.in_list4,.in_list5").removeClass("bgcolor")
		$(".title").addClass("bgcolor")
		$(".hardware,.kitchen,.health,.personal_care,.custom").hide()	
		$(".life").show()
		$(".list1 li").removeClass("current")
		$(".list1 li").eq(13).addClass("current")
		}
		
	if(n>=6241 && n<6698)
	{	
		$(".title,.in_list2,.in_list3,.in_list4,.in_list5").removeClass("bgcolor")
		$(".in_list1").addClass("bgcolor")
		$(".life,.kitchen,.health,.personal_care,.custom").hide()	
		$(".hardware").show()
		}
		$(".hardware").removeClass("current")
		$(".hardware").eq(0).addClass("current")
	
	if(n>=6698 && n<7155)
	{	
		$(".hardware").removeClass("current")
		$(".hardware").eq(1).addClass("current")
		}
	if(n>=7155 && n<7612)
	{	
		$(".hardware").removeClass("current")
		$(".hardware").eq(2).addClass("current")
		}
	if(n>=7612 && n<8069)
	{	
		$(".hardware").removeClass("current")
		$(".hardware").eq(3).addClass("current")
		}
	if(n>=8069 && n<8526)
	{	
		$(".title,.in_list2,.in_list3,.in_list4,.in_list5").removeClass("bgcolor")
		$(".in_list1").addClass("bgcolor")
		$(".life,.kitchen,.health,.personal_care,.custom").hide()	
		$(".hardware").show()
		$(".hardware").removeClass("current")
		$(".hardware").eq(4).addClass("current")
		}
	if(n>=8526 && n<8983)
	{	
		$(".title,.in_list1,.in_list3,.in_list4,.in_list5").removeClass("bgcolor")
		$(".in_list2").addClass("bgcolor")
		$(".life,.hardware,.health,.personal_care,.custom").hide()	
		$(".kitchen").show()
		$(".kitchen").removeClass("current")
		$(".kitchen").eq(0).addClass("current")
		}
	if(n>=8983 && n<9440)
	{	
		$(".kitchen").removeClass("current")
		$(".kitchen").eq(1).addClass("current")
		}
	if(n>=9440 && n<9897)
	{	
		$(".kitchen").removeClass("current")
		$(".kitchen").eq(2).addClass("current")
		}
	if(n>=9897 && n<10354)
	{	
		$(".kitchen").removeClass("current")
		$(".kitchen").eq(3).addClass("current")
		}
	if(n>=10354 && n<10811)
	{	
		$(".kitchen").removeClass("current")
		$(".kitchen").eq(4).addClass("current")
		}
	if(n>=10811 && n<11268)
	{	
		$(".kitchen").removeClass("current")
		$(".kitchen").eq(5).addClass("current")
		}
	if(n>=11268 && n<11725)
	{	
		$(".title,.in_list1,.in_list3,.in_list4,.in_list5").removeClass("bgcolor")
		$(".in_list2").addClass("bgcolor")
		$(".life,.hardware,.health,.personal_care,.custom").hide()	
		$(".kitchen").show()			
		$(".kitchen").removeClass("current")
		$(".kitchen").eq(6).addClass("current")
		}	
	if(n>=11725 && n<12182)
	{	
		$(".title,.in_list1,.in_list2,.in_list4,.in_list5").removeClass("bgcolor")
		$(".in_list3").addClass("bgcolor")
		$(".life,.hardware,.kitchen,.personal_care,.custom").hide()	
		$(".health").show()	
		$(".health").removeClass("current")
		$(".health").eq(0).addClass("current")
		}
	if(n>=12182 && n<12639)
	{	
		$(".health").removeClass("current")
		$(".health").eq(1).addClass("current")
		}
	if(n>=12639 && n<13096)
	{	
		$(".title,.in_list1,.in_list2,.in_list4,.in_list5").removeClass("bgcolor")
		$(".in_list3").addClass("bgcolor")
		$(".life,.hardware,.kitchen,.personal_care,.custom").hide()	
		$(".health").show()	
		$(".health").removeClass("current")
		$(".health").eq(2).addClass("current")
		}	
	if(n>=13096 && n<13553)
	{	
		$(".title,.in_list1,.in_list3,.in_list2,.in_list5").removeClass("bgcolor")
		$(".in_list4").addClass("bgcolor")
		$(".life,.hardware,.health,.kitchen,.custom").hide()	
		$(".personal_care").show()	
		$(".personal_care").removeClass("current")
		$(".personal_care").eq(0).addClass("current")
		}
	if(n>=13553 && n<14010)
	{	
		$(".personal_care").removeClass("current")
		$(".personal_care").eq(1).addClass("current")
		}
	if(n>=14010 && n<14467)
	{	
		$(".title,.in_list1,.in_list3,.in_list2,.in_list5").removeClass("bgcolor")
		$(".in_list4").addClass("bgcolor")
		$(".life,.hardware,.health,.kitchen,.custom").hide()	
		$(".personal_care").show()		
		$(".personal_care").removeClass("current")
		$(".personal_care").eq(2).addClass("current")
		}
	if(n>=14467 && n<14924)
	{	
		$(".title,.in_list1,.in_list3,.in_list2,.in_list4").removeClass("bgcolor")
		$(".in_list5").addClass("bgcolor")
		$(".life,.hardware,.health,.kitchen,.personal_care").hide()	
		$(".custom").show()		
		$(".custom").removeClass("current")
		$(".custom").eq(0).addClass("current")
		}		
																																								
	})
	
$(".hardware,.kitchen,.health,.personal_care,.custom").hide()

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
						
$(".list1 .title").click(function(){
	$("body").animate({scrollTop:300}, 300);		
	})	
$(".list1 .in_list1").click(function(){
	$("body").animate({scrollTop:6241}, 300);	
	})
$(".list1 .in_list2").click(function(){	
	$("body").animate({scrollTop:8526}, 300);	
	})
$(".list1 .in_list3").click(function(){
	$("body").animate({scrollTop:11726}, 300);
	})
$(".list1 .in_list4").click(function(){
	$("body").animate({scrollTop:13097}, 300);
	})				
$(".list1 .in_list5").click(function(){
	$("body").animate({scrollTop:14468}, 300);
	})
	
	
$(".eng").hide();
	$(".language").mouseenter(function(){
		$(".eng").show();$(this).mouseleave(function(){
		$(".eng").hide()		
})})	
	
	
	})