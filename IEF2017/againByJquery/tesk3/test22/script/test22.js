
$(function(){
	var $text = $('#input_name');
	var $btn = $('#check');
	var $tip = $('#tips');

	function getLength(str){
	var len = 0;
	for (var i = 0; i < str.length; i++) {
		char = str.charCodeAt(i);
		if (char >= 0 && char <= 128) {
			len += 1;
		}else{
			len += 2;
		}
	}
	return len;
}

	function check(){
		var str = $text.val();
		alert(str);
	if (getLength(str) >= 4&&getLength(str) <= 16) {
		$tip.html('名称格式正确')
			.css('color', '#5ebb46');
		$text.css('border', '1px solid #5ebb46');
	}else if (getLength(str) === 0) {
		$tip.html('名称不能为空')
			.css('color', '#de000f');
		$text.css('border', '1px solid #de000f');
	}else{
		$tip.html('名称格式错误')
			.css('color', '#de000f');
		$text.css('border', '1px solid #de000f');
	}
}

$btn.click(function() {
		check();
	});

});


