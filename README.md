# jquery-rollPic
jQuery rollPic plug-in
<br><b>大圣图片滚动特效--rollPic</b></br>
<br>
<br><link type="text/css" rel="stylesheet" href="css/rollPic.css" />
<br><script language="javascript" src="js/jquery-1.3.2.min.js"></script>
<br><script language="javascript" src="js/jquery.rollPic.js"></script>
<br>
<br><script language="javascript">
<br>$(document).ready(function(){
<br>	$(".v_show").rollPic({
<br>	num:	4,		//每版显示个数:(数值) 默认值:1
<br>	speed: 	"slow",	//显示速度:"fast"|"nomarl"|"slow"|(毫秒数) 默认值:"nomarl"
<br>	auto:true,		//自动滚动:true|false 默认值:false
<br>	delay:2			//自滚延时:(秒) 默认值:3
<br>	});
<br>});
<br></script>
