//顶端banner
$(document).ready(function(){
	$('.top_banner .close').on('click',function(){
		$('.top_banner').css({display:'none'})
	})
	var fold = true;
	$('.top_banner span').on('click',function(){
		if(fold){
			$('.top_banner .small').animate({height:300},500,function(){
				$('.top_banner span').html('收起<i class="fa fa-caret-up"></i>')
			});
			$('.top_banner .small').css({background:'url(img/top_big.jpg)'})
				
		}else{
			$('.top_banner .small').animate({height:60},function(){
				$(this).css({background:'url(img/top_small.jpg)'});
				$('.top_banner span').html('展开<i class="fa fa-caret-down"></i>')
			});
		}
		fold = !fold;
	})
})



// 主体内容部分

$(document).ready(function(){
var index = 0;
$('.mainTop1_carousel li:first').clone().insertAfter($('.mainTop1_carousel li:last'));
var liWidth = $('.mainTop1_carousel li').width();
$('.mainTop1_carousel').css({width:liWidth*$('.mainTop1_carousel li').length})
$('.mainTop1Car_left').on('click',function(){
	if(index==0){
		index = $('.mainTop1_carousel li').length-1;
		$('.mainTop1_carousel').css({left:-liWidth*index})
	}
	index--;
	$('.mainTop1_carousel').animate({left:-liWidth*index})
})
$('.mainTop1Car_right').on('click',function(){
	if(index==$('.mainTop1_carousel li').length-1){
		index = 0;
		$('.mainTop1_carousel').css({left:0})
	}
	index++;
	$('.mainTop1_carousel').animate({left:-liWidth*index})
})

// main_top 主体顶部第二部分轮播
carousel($('.mainTop2_car'))
carousel($('.main5Right_car'))
carousel($('.main8Right_car'))
// 主体内容的   h标题右侧  tab
var tabLength = $('.mainHeader .tab li').length
//			console.log($('.mainHeader .tab li').eq(0).after())
for(var i = 0; i < tabLength; i++){
	$('.main1 .mainHeader .tab li').eq(i).attr('index',i);
	$('.main1 .mainHeader .tab li').eq(i).hover(function(){
		tab($(this))
	})
	$('.main2 .mainHeader .tab li').eq(i).attr('index',i);
	$('.main2 .mainHeader .tab li').eq(i).hover(function(){
		tab($(this))
	})
	$('.main3 .mainHeader .tab li').eq(i).attr('index',i);
	$('.main3 .mainHeader .tab li').eq(i).hover(function(){
		tab($(this))
	})
	$('.main4 .mainHeader .tab li').eq(i).attr('index',i);
	$('.main4 .mainHeader .tab li').eq(i).hover(function(){
		tab($(this))
	})
	$('.main5 .mainHeader .tab li').eq(i).attr('index',i);
	$('.main5 .mainHeader .tab li').eq(i).hover(function(){
		tab($(this))
	})
	$('.main6 .mainHeader .tab li').eq(i).attr('index',i);
	$('.main6 .mainHeader .tab li').eq(i).hover(function(){
		tab($(this))
	})
	$('.main7 .mainHeader .tab li').eq(i).attr('index',i);
	$('.main7 .mainHeader .tab li').eq(i).hover(function(){
		tab($(this))
	})
	$('.main8 .mainHeader .tab li').eq(i).attr('index',i);
	$('.main8 .mainHeader .tab li').eq(i).hover(function(){
		tab($(this))
	})
	$('.main9 .mainHeader .tab li').eq(i).attr('index',i);
	$('.main9 .mainHeader .tab li').eq(i).hover(function(){
		tab($(this))
	})
	$('.main10 .mainHeader .tab li').eq(i).attr('index',i);
	$('.main10 .mainHeader .tab li').eq(i).hover(function(){
		tab($(this))
	})
}
// 10楼的百叶窗
$('#baiye ul').mouseenter(function(){
	console.log(this)
	$(this).find('li').first().css({display:'none'})
	$(this).find('li').last().css({display:'block'})
	$(this).siblings().find('li:odd').css({display:'none'})
	$(this).siblings().find('li:even').css({display:'block'})
	$(this).css({height:70}).siblings().css({height:40})
	$(this).find('b').css({backgroundPosition:'0 -124px'})
	$(this).siblings().find('b').css({backgroundPosition:'-20px -124px'})
})
$('#baiye').children().first().css({height:70});


// 主体  最下边   天天抢活动
$('.mainBottom .mainBtm table img').mouseenter(function(){
	$(this).animate({marginLeft:-8},150)
})
$('.mainBottom .mainBtm table img').mouseleave(function(){
	$(this).animate({marginLeft:0},150)
})


// 主体最后一部分      天天抢     轮播图
var num1 = 0;
var bliHeight = $('.mainBotm_car ul li').height();
$('.mainBotm_car ul li').eq(0).clone().insertAfter($('.mainBotm_car ul li:last'));
$('.mainBotm_car ul li').eq(1).clone().insertAfter($('.mainBotm_car ul li:last'));
$('.mainBotm_car ul').css({height:bliHeight*$('.mainBotm_car ul li').length})
//			console.log($('.mainBotm_car ul').height())
var timer2 = setInterval(move1,3000)
$('.mainBotm_car').mouseenter(function(){
	clearInterval(timer2)
})
$('.mainBotm_car').mouseleave(function(){
	clearInterval(timer2)
	timer2 = setInterval(move1,3000)
})
function move1(){
	
	if(num1 == $('.mainBotm_car ul li').length-2){
		num1 = 0;
		$('.mainBotm_car ul').css({top:0})
	}
	num1++;
	$('.mainBotm_car ul').animate({top:-bliHeight*num1})
//	console.log(num1)
}

//			console.log($('.mainBotm_car'))
})
// 标签页  选项卡
function tab(obj){
	var obj = obj;
	var index = $(obj).attr('index')
$(obj).siblings($('.kuang')).css({left:index*93})
$(obj).parent().parent().siblings().children().last().children().eq(index).css({display:'block'}).siblings().css({display:'none'})
}






//  左侧边栏

$(document).ready(function(){
	// 左侧边栏   js效果
			
	var num = -1;
	var arr1 = [1240,1960,2600,3200,3800,4400,5000,5660,6260,6860]
	// 分别对应main部分 1，2，3，4，5，6，7，8，9，10
	var arr2 = [1240,7640]
	var text = null;
	window.onscroll = function(){
	//				console.log($('body').scrollTop())
		num = -1;
		
		// 出现左侧边栏
		if($('body').scrollTop()<arr1[0]){
			$('.leftSide').css({display:'none',width:900,height:800,left:450})
		}else{
			$('.leftSide').css({display:'block'})
			$('.leftSide').animate({height:340,width:35,left:10})
		}
		
		// 出现顶部侧栏  和右部侧栏
		if($('body').scrollTop() < 800){
			$('.topSide').css({display:'none'})
			$('.rightSide').css({display:'none'})
		}else{
			$('.topSide').css({display:'block'})
			$('.rightSide').css({display:'block'})
		}
		for(var i = 0; i < arr1.length; i++){
			$('.leftSide a').eq(i).html($('.leftSide a').eq(i).attr('title1'));
			$('.leftSide a').eq(i).css({fontSize:'16px',lineHeight:'34px',color:'#4d4d4d',background:'#fff'})
			
			if(num>0){
				$('.leftSide a').eq(num).html($('.leftSide a').eq(num).attr('title1'));
				$('.leftSide a').eq(num).css({fontSize:'16px',lineHeight:'34px',color:'#4d4d4d',background:'#fff'})
			}
		}
		
		// 点击跳转到指定位置
		
		$('.mainHeader h3 span').animate({backgroundPosition:'-124px -94px'})
		function leftSide(num){
			text = $('.leftSide a').eq(num).attr('title2');
			$('.leftSide a').eq(num).html(text);
			$('.leftSide a').eq(num).css({fontSize:'12px',lineHeight:'17px',color:'#fff',background:'#c20053'})
			$('.main'+(num+1)+' '+'.mainHeader h3 span').css({backgroundPosition:'-156px -94px',color:'#fff'})
		}
		
		
		
		if($('body').scrollTop()>=arr1[0] && $('body').scrollTop()< arr1[1]){
			num = 0;
			leftSide(num);
		}else if($('body').scrollTop()>=arr1[1] && $('body').scrollTop()< arr1[2]){
			num = 1;
			leftSide(num);
		}else if($('body').scrollTop()>=arr1[2] && $('body').scrollTop()< arr1[3]){
			num = 2;
			leftSide(num);
		}else if($('body').scrollTop()>=arr1[3] && $('body').scrollTop()< arr1[4]){
			num = 3;
			leftSide(num);
		}else if($('body').scrollTop()>=arr1[4] && $('body').scrollTop()< arr1[5]){
			num = 4;
			leftSide(num);
		}else if($('body').scrollTop()>=arr1[5] && $('body').scrollTop()< arr1[6]){
			num = 5;
			leftSide(num);
		}else if($('body').scrollTop()>=arr1[6] && $('body').scrollTop()< arr1[7]){
			num = 6;
			leftSide(num);
		}else if($('body').scrollTop()>=arr1[7] && $('body').scrollTop()< arr1[8]){
			num = 7;
			leftSide(num);
		}else if($('body').scrollTop()>=arr1[8] && $('body').scrollTop()< arr1[9]){
			num = 8;
			leftSide(num);
		}else if($('body').scrollTop()>=arr1[9] && $('body').scrollTop()<= arr2[1]){
			num = 9;
			leftSide(num);
			
		}else if($('body').scrollTop()>arr2[1]){
			for(var i = 0; i < $('.leftSide a').length;i++){
				$('.leftSide a').eq(i).html($('.leftSide a').eq(i).attr('title1'));
				$('.leftSide a').css({fontSize:'16px',lineHeight:'34px',color:'#4d4d4d',background:'#fff'})
			}
			$('.mainHeader h3 span').animate({backgroundPosition:'-124px -94px'})
			num = -1;
		}
	//				console.log(text)
		if(num>=0){
			$('.leftSide a').eq(num).html($('.leftSide a').eq(num).attr('title2'));
			$('.leftSide a').eq(num).css({fontSize:'12px',lineHeight:'17px',color:'#fff',background:'#c20053'})
		}
		
		
	}
	
	
	//  鼠标进入a标签     a标签的样式设置
	
	for(var i = 0; i < $('.leftSide a').length; i++){
		$('.leftSide a').eq(i).attr('index',i);
	}
	$('.leftSide a').mouseenter(function(){
		var text2 = $(this).attr('title2')
		var text1 = $(this).attr('title1')
		var value = $(this).attr('index');
		$(this).html(text2)
		$(this).css({fontSize:'12px',lineHeight:'17px',color:'#fff',background:'#c20053'})
		for(var i = 0; i < $('.leftSide a').length; i++){
			if(num>=0){
				$('.leftSide a').eq(num).html($('.leftSide a').eq(num).attr('title2'));
				$('.leftSide a').eq(num).css({fontSize:'12px',lineHeight:'17px',color:'#fff',background:'#c20053'})
			}else if(i == value){
				$('.leftSide a').eq(i).html($('.leftSide a').eq(i).attr('title2'));
				$('.leftSide a').eq(i).css({fontSize:'12px',lineHeight:'17px',color:'#fff',background:'#c20053'})
			}else{
				$('.leftSide a').eq(i).html($('.leftSide a').eq(i).attr('title1'));
				$('.leftSide a').eq(i).css({fontSize:'16px',lineHeight:'34px',color:'#4d4d4d',background:'#fff'})
			}
		}
	})
	$('.leftSide a').mouseleave(function(){
		var text2 = $(this).attr('title2')
		var text1 = $(this).attr('title1')
		$(this).html(text1)
		$(this).css({fontSize:'16px',lineHeight:'34px'})
		for(var i = 0; i < $('.leftSide a').length; i++){
			$('.leftSide a').eq(i).html($('.leftSide a').eq(i).attr('title1'));
			$('.leftSide a').eq(i).css({fontSize:'16px',lineHeight:'34px',color:'#4d4d4d',background:'#fff'})
			if(num>=0){
				$('.leftSide a').eq(num).html($('.leftSide a').eq(num).attr('title2'));
				$('.leftSide a').eq(num).css({fontSize:'12px',lineHeight:'17px',color:'#fff',background:'#c20053'})
			}
		}
	})
	//			
	$('.leftSide a').click(function(){
		num = $(this).attr('index');
		$('html,body').animate({scrollTop:arr1[num]});
		if(num>=0){
			$('.leftSide a').eq(num).html($('.leftSide a').eq(num).attr('title2'));
			$('.leftSide a').eq(num).css({fontSize:'12px',lineHeight:'17px',color:'#fff',background:'#c20053'})
			}
		})
})



// 右侧边框具体设置

$(document).ready(function(){
	$('.rightH li').mouseenter(function(){
		$(this).children('span').css({display:'block'})
		$(this).children('span').stop().animate({right:40})
		$(this).children('span').css({backgroundColor:'#c20053'})
		$(this).children('i').css({background:'#c20053'})
	})
	$('.rightH li').mouseleave(function(){
		$(this).children('span').animate({right:-60})
		$(this).children('span').css({display:'none',backgroundColor:'inherit'})
		$(this).children('i').css({background:'inherit'})
	})
	
	
	$('.rightF').css({top:$(window).height()-40})
	window.onresize = function(){
		$('.rightF').css({top:$(window).height()-40})
	}
	$('.rightF').mouseenter(function(){
		$(this).css({backgroundColor:'#c20053'})
		$(this).children('span').css({display:'block'})
		$(this).children('span').stop().animate({right:40})
		$(this).children('span').css({backgroundColor:'#c20053'})
		$(this).children('i').css({background:'#c20053'})
	})
	$('.rightF').mouseleave(function(){
		$(this).css({backgroundColor:'#4d4d4d'})
		$(this).children('span').stop().animate({right:-60})
		$(this).children('span').css({display:'none',backgroundColor:'#4d4d4d'})
		$(this).children('i').css({background:'#4d4d4d'})
	})
	$('.rightF').click(function(){
		$('html,body').animate({scrollTop:0})
	})
})