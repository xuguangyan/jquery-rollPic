/*
 * jQuery rollPic plug-in
 * http://www.dasheng.com/
 *
 * Copyright (c) 2010-2012
 * Author: Dasheng
 *
 * Date: 2010-01-10
 * Revision: 0.01
 */
(function($){
	$.fn.rollPic=function(setting){
		return this.each(function(){
			
			//分析参数并设定默认值
			var num		=1;			//每版显示个数:(数值) 默认值:1
			var speed	="normal";	//显示速度:"fast"|"nomarl"|"slow"|(毫秒数) 默认值:"nomarl
			var auto	= false;	//自动滚动:true|false 默认值:false
			var delay	=3;			//自滚延时:(秒) 默认值:3
			
			if(!(typeof(setting)=="undefined")){
				if(!(typeof(setting.num)=="undefined")) num=setting.num;
				if(!(typeof(setting.speed)=="undefined")) speed=setting.speed;
				if(!(typeof(setting.auto)=="undefined")) auto=setting.auto;
				if(!(typeof(setting.delay)=="undefined")) delay=setting.delay;
			}
		
			var page=1;
			var intervalID=null;
			var $v_content=$(this).find(".v_content");
			var $v_list=$(this).find(".v_list");
			var $toolTip=$(this).find(".tool_tip");
			var $nbtn=$(this).find(".next");
			var $pbtn=$(this).find(".prev");
			
			//var v_width=$v_content.width();//滚动一屏
			var v_width=$v_list.find("li").outerWidth()*num;//滚动num个
			var len=$v_list.find("li").length;
			var count=Math.ceil(len / num);
			
			//插入页码提示
			for(var i=1;i<=count;i++)
				$toolTip.append("<span title="+i+"> </span>");
			$toolTip.find("span").css("cursor","pointer").eq(0).addClass("current");
			
			//点击页码提示
			$toolTip.find("span").each(function(index){
				var ipage=index+1;
				$(this).click(function(){
					page=ipage;
					$v_list.animate({opacity:0.1},50);
					$v_list.animate({left:-v_width*(page-1),opacity:1},speed);
					$toolTip.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
				});
			});
			
			//往前点击
			$pbtn.click(function(){
				if(!$v_list.is(":animated")){
					$v_list.animate({opacity:0.1},50);
					if(page == 1){
						$v_list.animate({left:"-="+v_width*(count-1),opacity:1},speed);
						page=count;
					}else{
						$v_list.animate({left:"+="+v_width,opacity:1},speed);
						page--;
					}
				}
				$toolTip.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
			});
			
			//往后点击
			$nbtn.click(function(){
				if(!$v_list.is(":animated")){
					$v_list.animate({opacity:0.1},50);
					if(page == count){
						$v_list.animate({left:"0px",opacity:1},speed);
						page=1;
					}else{
						$v_list.animate({left:"-="+v_width,opacity:1},speed);
						page++;
					}
				}
				$toolTip.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
			});
			
			//添加定时器
			if(auto){
				intervalID=setInterval(function(){
					$nbtn.trigger("click");
				},1000*delay);
				
				//鼠标悬浮,清除定时器
				$(this).hover(function(){
					clearInterval(intervalID);
				},function(){
					intervalID=setInterval(function(){
						$nbtn.trigger("click");
					},1000*delay);
				});
			}
		});
	}
})(jQuery);