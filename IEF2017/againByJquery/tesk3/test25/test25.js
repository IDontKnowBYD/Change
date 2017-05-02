$(function(){
	var $box = $('#box');
	var $btnGo = $('#btn_go');
	 $btnGo.click(function() {
		
		var $boxClass = $box.attr('class');
		var $boxNum = $box.attr('style').match(/-\d+|\d+/g);

		switch($boxClass){
			case 'top':
			if ($boxNum[0]>-369) {
				$box.animate({top:"-=41px"}, 300);
			}
				break;
			case 'bottom':
			if ($boxNum[0]<0) {
				$box.animate({top:"+=41px"}, 300);
			}
				break;
			case 'left':
			if ($boxNum[1]>0) {
				$box.animate({left:"-=41px"}, 300);
			}
				break;
			case 'right':
			if ($boxNum[1]<369) {
				$box.animate({left:"+=41px"}, 300);
			}
				break;
			}
		

	}); 
	var $btnTunLeft = $('#btn_left');
	var turn = ['top','left','bottom','right'];
	var forword = 0;
	$btnTunLeft.click(function() {
		forword++;
		$box.attr('class', turn[forword%4]); 
	});
	var $btnTunRight = $('#btn_right');
	$btnTunRight.click(function() {
		$box.attr('class', turn[3-forword%4]);
		forword++;
	});
	var $btnTunBack = $('#btn_back');
	$btnTunBack.click(function() {
		forword += 2;
		$box.attr('class', turn[forword%4]); 
	});
});