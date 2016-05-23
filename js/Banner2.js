var scrollInterval=0;
$(document).ready(function(){
	scrollInterval = setInterval(showAuto,8000);
	<!--button display-->
	$('#fc_turnbox').hover(function(){
		$('.arr_pre').animate({left:'0px'},'fast');
		$('.arr_next').animate({right:'0px'},'fast');
		clearInterval(scrollInterval);
	},function(){
		$('.arr_pre').animate({left:'-48px'},'fast');
		$('.arr_next').animate({right:'-48px'},'fast');
		clearInterval(scrollInterval);
		scrollInterval = setInterval(showAuto,8000);
	});
	<!--button click-->
	var step=-1024,
		k=0,
		imglength=$('#img_list li').length-1;
	$('#ban_bt1').click(function(){
		$('#bts_list .on').attr('class','');
		if(k==0){
			k=imglength;
			$('#img_list').css({marginLeft:step*imglength+1024+'px'}).animate({marginLeft:step*imglength+'px'},'normal');
			$('#bts_list li').eq(imglength).attr('class','on');
		}
		else{
			$('#img_list').animate({marginLeft:(--k)*step+'px'},'normal');
			$('#bts_list li').eq(k).attr('class','on');
		}
	});
	$('#ban_bt2').click(function(){
		$('#bts_list .on').attr('class','');
		if(k==imglength){
			k=0;
			$('#img_list').css({marginLeft:'-1024px'}).animate({marginLeft:'0'},'normal');
			$('#bts_list li').eq(0).attr('class','on');
		}
		else{
			$('#img_list').animate({marginLeft:(++k)*step+'px'},'normal');
			$('#bts_list li').eq(k).attr('class','on');
		}
	});
	<!--small button-->
	$('#bts_list li').each(function(i){
		$(this).click(function(){
			$('#bts_list .on').attr('class','');
			$('#img_list').animate({marginLeft:i*step+'px'},'normal',function(){
				$('#img_list li').eq(i).fadeIn('normal')
			})
			$(this).attr('class','on');
			k=i;
		})
	})
})
function showAuto(){
	$('#ban_bt2').trigger('click')
}
