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

//顶部导航条

$(document).ready(function(){
//	console.log($('.top_nav .right li').eq(0)[0].offsetLeft)
	// 显示弹出框
	var liCss1 = {
		borderLeft:'1px #f7f7f7 solid',
		borderRight:'1px #f7f7f7 solid',
		background:'',
		zIndex:'0'
	}   // li不变之时的样式
	var liCss2 = {
		borderLeft:'1px #ccc solid',
		borderRight:'1px #ccc solid',
		background:'#fff',
		position:'relative',
		zIndex:100
	}   // li变化之后的样式
	for(var i = 0; i < $('.top_nav li').has('i').length; i++){
		$('.top_nav li').has('i').eq(i).attr('index',i)
		$('.top_nav li').has('i').css({borderLeft:'1px #f7f7f7 solid',borderRight:'1px #f7f7f7 solid'})
		$('.top_nav li').has('i').eq(i).on('mouseenter',function(){
			$(this).children('i').css({
				transform:'rotate(-180deg)',
				transition:'0.5s'
			})
			$(this).css(liCss2)
			var index = $(this).attr('index')
			$('.top_nav .top_box').eq(index).css({display:'block',zIndex:10})
		})
		$('.top_nav .top_box').eq(i).attr('index',i)
		$('.top_nav .top_box').eq(i).on('mouseover',function(){
			var index = $(this).attr('index')
			$(this).css({display:'block'})
			
			$('.top_nav li').has('i').eq(index).children('i').css({
				transform:'rotate(-180deg)',
				transition:'0.5s'
			})
			$('.top_nav li').has('i').eq(index).css(liCss2)
		})
		$('.top_nav li').has('i').on('mouseleave',function(){
			$(this).children('i').css({
				transform:'rotate(0)',
				transition:'0.5s'
			})
			$(this).css(liCss1)
			var index = $(this).attr('index')
			$('.top_nav .top_box').eq(index).css({display:'none'})
		})
		$('.top_nav .top_box').eq(i).on('mouseleave',function(){
			$(this).css({display:'none'})
			var index = $(this).attr('index')
			$('.top_nav li').has('i').eq(index).children('i').css({
				transform:'rotate(0)',
				transition:'0.5s'
			})
			$('.top_nav li').has('i').eq(index).css(liCss1)
		})
	}
	$('#guanzhu r').eq(1).on('mouseenter',function(){
		$('.top_nav .top_box5').css({display:'block'})
	})
	$('.top_nav .top_box5').on('mouseenter',function(){
		$(this).css({display:'block'})
	})
	$('#guanzhu r').eq(1).on('mouseleave',function(){
		$('.top_nav .top_box5').css({display:'none'})
	})
	$('.top_nav .top_box5').on('mouseleave',function(){
		$(this).css({display:'none'})
	})
	
	// 定义一个存放地址的数组  
	
	var addArr = $('.top_nav .top_box1').children().children().children('a')
	for(var i = 0; i < addArr.length; i++){
		addArr[i].index = i;
		addArr[i].onclick = function(){
			for(var j = 0; j < addArr.length; j++){
				if(j == this.index){
					addArr[j].style.background = '#c20053';
					addArr[j].style.color = '#fff';
				}else{
					addArr[j].style.background = '';
					addArr[j].style.color = '';
				}
			}
			
			$('#address').html(this.innerHTML)
		}
		if($('#address').html() == addArr[i].innerHTML){
			addArr[i].style.background = '#c20053';
			addArr[i].style.color = '#fff';
		}
	}   // 让送货地址根据点击位置发生改变
	
	
//			var address = $('#address').html()
//			console.log($('#address').text() == '海南')
//			console.log(addArr[10].innerText == '海南')
	
	// 让四个弹出框放置到对应的位置   现在使用css改变
//			var weizhiArr = [];
//			for(var i = 0; i < $('.top_nav li').has('i').length; i++){
//				weizhiArr.push($('.top_nav li').has('i')[i].offsetLeft)
//			}
	
	
	// 微信弹出二维码
	
})



// header 包含搜索框和logo
$(document).ready(function(){
	$('.header4 .header_che').on('mouseenter',function(){
		$('.header_box').css({display:'block'})
	})
	$('.header_box').on('mouseenter',function(){
		$(this).css({display:'block'})
	})
	$('.header4 .header_che').on('mouseleave',function(){
		$('.header_box').css({display:'none'})
	})
	$('.header_box').on('mouseleave',function(){
		$(this).css({display:'none'})
	})
})


$(document).ready(function(){
	// banner 左侧栏
//			$('.banner_left li').on('mouseenter',function(){
//				$(this).animate({paddingLeft:'18px'},50)
//			})
//			$('.banner_left li').on('mouseleave',function(){
//				$(this).animate({paddingLeft:'10px'},50)
//			})
	
	// banner图  出现弹框
	for(var i=0; i < $('.banner_left li').length; i++){
		$('.banner_left li').eq(i).attr('index',i);
		$('.banner_left li').eq(i).on('mouseenter',function(){
			$('.banLeft_tan').css({display:'block'})
			$(this).animate({paddingLeft:'18px'},50)
			var index = $(this).attr('index');
			$('.banLeft_tan').eq(index).css({display:'block'}).siblings().not('.banner_left').css({display:'none'})
			tankuang($('.banLeft_tan .banTan_left' + index))
//					console.log($('.banLeft_tan').eq(index).siblings())
		})
		$('.banLeft_tan').eq(i).attr('index',i);
		$('.banLeft_tan').eq(i).on('mouseenter',function(){
			$(this).css({display:'block'});
			var index = $(this).attr('index');
			
			// 标签页的li样式变化
			$('.banner_left li').eq(index).css({background:'#c20053'})
			$('.banner_left li').eq(index).animate({paddingLeft:'18px'},50)
			$('.banner_left li').eq(index).children('i').css({color:'#fff'})
			$('.banner_left li').eq(index).children('a').css({color:'#fff',textDecoration: 'underline'})
			// 让弹框的左边部分按照已设置好的布局改变
			tankuang($(this).children('.banTan_left'))
		})
		$('.banLeft_tan').eq(i).on('mouseleave',function(){
			$(this).css({display:'none'});
			var index = $(this).attr('index');
			// 标签页的li样式变化
			$('.banner_left li').eq(index).css({background:''})
			$('.banner_left li').eq(index).animate({paddingLeft:'10px'},50)
			$('.banner_left li').eq(index).children('i').css({color:''})
			$('.banner_left li').eq(index).children('a').css({color:'',textDecoration: 'none'})
		})
		
		$('.banner_left li').eq(i).on('mouseleave',function(){
			$('.banLeft_tan').css({display:'none'})
			$(this).animate({paddingLeft:'10px'},50)
		})
	}
	
	
	
	// banner图弹框   自动去下一列设置
	function tankuang(obj){
		var banTanHeight = 0;
		var banTanHeight2 = 0;
		var banTanHeight3 = 0;
		// obj = $('.banTan_left')
		for(var i = 0;i < obj.children('div').length; i++){
			if(i >= 1){
//					console.log(parseInt($('.banTan_left div').eq(i).css('height')))
				obj.children('div').eq(i).css({top:parseInt(obj.children('div').eq(i-1).css('height'))+parseInt(obj.children('div').eq(i-1).css('top'))})
				
			}
			banTanHeight += parseInt(obj.children('div').eq(i).css('height'))   // 所有div应该有的总高度
//				console.log(banTanHeight)
			var banLeftHeight = obj.height()
			console.log()
			var lastHeight = 0;
			var lastHeight2 = 0;
			if(banTanHeight > banLeftHeight){
				banTanHeight2 += parseInt(obj.children('div').eq(i).css('height'))   // 从第二列开始的div的高度
				lastHeight = banTanHeight - banTanHeight2;   // 第一列内容的高度
				var banTanDiv1 = parseInt(obj.children('div').eq(0).css('left'))+parseInt(obj.children('div').eq(0).css('width'))
				obj.children('div').eq(i).css({left:banTanDiv1+10,marginTop:-lastHeight})
			}
			if(banTanHeight2 > banLeftHeight){
				banTanHeight3 += parseInt(obj.children('div').eq(i).css('height'))   // 从第三列开始的div的高度
				lastHeight2 = banTanHeight2 - banTanHeight3; // 第二列内容的高度
				obj.children('div').eq(i).css({left:20+220*2+20,marginTop:-(lastHeight2+lastHeight)})
		//  这里第一个20是最左边的div距离左边的距离，第二个220是每个div的宽度，因为有两列  所以乘2，第三个是每列div右边距10px，这里第三列，所以20px
			}
			if(banTanHeight3 > banLeftHeight){
				obj.children('div').eq(i).css({display:'none'})
			}
		}
	}
	
	
	
	
	
	
	$('.big_img li img').on('mouseenter',function(){
		$('.big_btn div').css({display:'block'})
	})
	$('.big_img li img').on('mouseleave',function(){
		$('.big_btn div').css({display:'none'})
	})
	$('.big_btn div').on('mouseenter',function(){
		$('.big_btn div').css({display:'block'})
	})
	$('.big_btn div').on('mouseleave',function(){
		$('.big_btn div').css({display:'none'})
	})
	// banner图的轮播（大轮播）
	var index = 0;
	$('.big_btn .big_left').on('click',function(){
		clearInterval(timer);
		index--;
		if(index == -1){
			index = $('.big_img li').length-1;
		}
		$('.big_img li').eq(index).fadeIn().siblings().fadeOut()
		$('.big_circle li').eq(index).css({
			background:'#c20053',
			border:0
		}).siblings().css({
			background:'inherit',
			border:'2px solid rgba(255,255,255,1)'
		})
		timer = setInterval(move_big,3000)
	})
	$('.big_btn .big_right').on('click',function(){
		clearInterval(timer);
		if(index == $('.big_img li').length-1){
			index = -1;
		}
		index++;
		$('.big_img li').eq(index).fadeIn().siblings().fadeOut()
		$('.big_circle li').eq(index).css({
			background:'#c20053',
			border:0
		}).siblings().css({
			background:'inherit',
			border:'2px solid rgba(255,255,255,1)'
		})
		timer = setInterval(move_big,3000)
	})
	for(var i = 0; i < $('.big_circle li').length; i++){
		$('.big_circle li').eq(i).attr('index',i);
		$('.big_circle li').eq(i).on('mouseenter',function(){
			clearInterval(timer);
			$(this).css({
				background:'#c20053',
				border:0
			}).siblings().css({
				background:'inherit',
			    border:'2px solid rgba(255,255,255,1)'
			})
			index = $(this).attr('index')
			$('.big_img li').eq(index).fadeIn().siblings().fadeOut()
			
		})
		$('.big_circle li').eq(i).on('mouseleave',function(){
			timer = setInterval(move_big,3000)
		})
	}
	function move_big(){
		if(index == $('.big_img li').length-1){
			index = -1;
		}
		index++;
		$('.big_img li').eq(index).fadeIn().siblings().fadeOut()
		$('.big_circle li').eq(index).css({
			background:'#c20053',
			border:0
		}).siblings().css({
			background:'inherit',
			border:'2px solid rgba(255,255,255,1)'
		})
	}
	var timer = setInterval(move_big,3000)
	
	// banner 右侧栏
	for(var i = 0; i < $('.banMain_top li').length; i++){
		$('.banMain_top li').eq(i).attr('index',i);
		$('.banMain_top li').on('click',function(){
			$(this).css({borderTop:'2px solid #c20053',borderBottom:'0'}).siblings().css({borderBottom:'1px solid #ccc',borderTop:'1px solid #ccc'})
			var index = $(this).attr('index')
			$('.banMain_md form').eq(index).css({display:'block'}).siblings().css({display:'none'})
		})
	}
	
	var num = true;
	$('.xiala div').on('click',function(){
		
		if(num){
			$('.xiala ul').css({display:'block'})
		}else{
			$('.xiala ul').css({display:'none'})
		}
		num = !num;
		
	})
	$('.xiala ul li').on('click',function(){
		$(this).parent().siblings('div').html($(this).html()+'<i class="fa fa-angle-down"></i>');
//				$('.xiala div').html($(this).html()+'<i class="fa fa-angle-down"></i>');
		$('.xiala ul').css({display:'none'})
		num = !num;
		var price = parseInt($(this).html());
		$(this).parent().parent().siblings('p').children('span').html('￥'+price+'元')
	})
	
	   // 右侧正则判断手机号
	document.forms[0].target = 'rfFrame1'	  // 提交禁止刷新页面
	document.forms[1].target = 'rfFrame2'     // 提交禁止刷新页面
	$(".banMain_md form input[type='submit']").click(function(){
		var value = $(this).siblings('input').prop('value');
		var re = /^1[3,5,8]\d{9}$/
		if(!re.test(value)){
			$(this).siblings('span').css({display:'block'})
		}
	})
	$(".banMain_md form input[type='text']").click(function(){
		if(!$(this).prop('value')){
			$(this).siblings('span').css({display:'none'})
		}
	})
	
	
	
})



// 无缝轮播图  封装    obj是要轮播的盒子
function carousel(obj){
	// 简单的无缝轮播图 
	// 轮播图格式设定
	// <div class="container className">
	//		<ul class="carousel">
	//			<li><a href=""><img src="" alt="" /></a></li>
	//			<li><a href=""><img src="" alt="" /></a></li>
	//			<li><a href=""><img src="" alt="" /></a></li>
	//			<li><a href=""><img src="" alt="" /></a></li>
	//		</ul>
	//		<div class="left"><i class="fa fa-angle-left fa-2x"></i></div>
	//		<div class="right"><i class="fa fa-angle-right fa-2x"></i></div>
	//		<ul class="circle">
	//
	//      </ul>
	//	</div>
	var index = 0;
	var box = obj;
	obj.timer = setInterval(move,3000)
	
	function move(){
		if(index==liLength2-1){
			index = 0;
			$(carousel).css({left:0})
		}
		index++;
		$(carousel).animate({left:-liWidth*index},200)
		
		if(index == liLength){
			$(circle).find('li').eq(0).css({background:'#c20053'}).siblings().css({background:'rgba(0,0,0,0.3)'})
		}else{
			$(circle).find('li').eq(index).css({background:'#c20053'}).siblings().css({background:'rgba(0,0,0,0.3)'})
		}
	}
	$(box).css({position:'relative',width:399,height:243,overflow:'hidden',boxSizing:'border-box!important',margin:0,padding:0});
	$(box).children().css({position:'absolute',cursor:'pointer'})
	var carousel = $(box).children('.carousel');
	var circle = $(box).children('.circle');
	var left = $(box).children('.left');
	var right = $(box).children('.right');
	
	// 图片及其盒子相关样式
	
	$(carousel).find('li').css({float:'left',listStyle:'none'})
	$(carousel).find('a').css({display:'block',float:'left'})
	$(carousel).find('img').css({width:399,height:243});
	var liLength = $(carousel).find('li').length;
	var liWidth = $(carousel).find('li').width()
	$(carousel).css({width:liLength*liWidth})
//	console.log(liWidth)
	// 左右按钮 样式设置
	$(left).css({display:'none',left:0,top:'50%',width:25,height:40,padding:'4px 0',textAlign:'center',marginTop:'-20px',background:'rgba(0,0,0,0.4)',color:'#fff'})
	$(right).css({display:'none',right:0,top:'50%',width:25,height:40,padding:'4px 0',textAlign:'center',marginTop:'-20px',background:'rgba(0,0,0,0.4)',color:'#fff'})
	$(left).hover(function(){
		$(this).css({background:'rgba(0,0,0,0.6)'})
	},function(){
		$(this).css({background:'rgba(0,0,0,0.4)'})
	});
	$(right).hover(function(){
		$(this).css({background:'rgba(0,0,0,0.6)'})
	},function(){
		$(this).css({background:'rgba(0,0,0,0.4)'})
	})
	// 下方小圆点设置
	
	for(var i = 0; i < liLength; i++){
		$(circle).append('<li></li>')
	}
	
	
	$(circle).find('li').css({width:13,height:13,borderRadius:'50%',background:'rgba(0,0,0,0.3)',float:'left',listStyle:'none',marginLeft:5})
	$(circle).find('li').hover(function(){
		$(this).css({background:'#c20053'})
	},function(){
		$(circle).find('li').eq(index).css({background:'#c20053'}).siblings().css({background:'rgba(0,0,0,0.3)'})
	})
	var circleWidth = $(circle).width()
//			console.log($(circle).width())
	$(circle).css({left:'50%',bottom:15,marginLeft:-circleWidth/2})
//	console.log($(circle).height())
	// 点击无缝轮播设置
	// 克隆一个元素
	
	
	$(carousel).find('li').first().clone().insertAfter($(carousel).find('li').last())
	
	var liLength2 = $(carousel).find('li').length;
	// 让小圆点颜色改变
	$(circle).find('li').eq(0).css({background:'#c20053'})
	$(carousel).css({width:liLength2*liWidth})
	$(left).on('click',function(){
		clearInterval(obj.timer)
		if(index==0){
			index = liLength2-1;
			$(carousel).css({left:-liWidth*index},200)
		}
		index--;
		$(carousel).animate({left:-liWidth*index},200)
		$(circle).find('li').eq(index).css({background:'#c20053'}).siblings().css({background:'rgba(0,0,0,0.3)'})
		obj.timer = setInterval(move,3000);
	})
	$(right).on('click',function(){
		clearInterval(obj.timer)
		if(index==liLength2-1){
			index = 0;
			$(carousel).css({left:0})
		}
		index++;
		$(carousel).animate({left:-liWidth*index},200)
		if(index == liLength){
			$(circle).find('li').eq(0).css({background:'#c20053'}).siblings().css({background:'rgba(0,0,0,0.3)'})
		}else{
			$(circle).find('li').eq(index).css({background:'#c20053'}).siblings().css({background:'rgba(0,0,0,0.3)'})
		}
		obj.timer = setInterval(move,3000);
	})
	for(var i = 0; i < liLength; i++){
		$(circle).find('li').eq(i).attr('index',i);
		$(circle).find('li').eq(i).mouseenter(function(){
			clearInterval(obj.timer)
			var value = $(this).attr('index');
			index = value;
			$(carousel).animate({left:-liWidth*index},200)
			$(circle).find('li').eq(index).css({background:'#c20053'}).siblings().css({background:'rgba(0,0,0,0.3)'})
			
		})
		$(circle).find('li').eq(i).mouseleave(function(){
			obj.timer = setInterval(move,3000);
		})
	}
	// 鼠标移动到盒子上才显示左右点击按钮
	$(box).hover(function(){
		$(left).css({display:'block'})
		$(right).css({display:'block'})
	},function(){
		$(left).css({display:'none'})
		$(right).css({display:'none'})
	})
}