var hintText=[{right:"名称格式正确",wrong:"名称格式有误",isPassed:false},
             {right:"密码可用",wrong:"密码不可用",isPassed:false},
             {right:"密码输入一致",wrong:"密码输入不一致",isPassed:false},
             {right:"邮箱格式正确",wrong:"邮箱格式错误",isPassed:false},
             {right:"手机格式正确",wrong:"手机格式错误",isPassed:false}];



$(function(){
	var $lis = $('input');
	var $tips = $('p');
	$lis.focus(function() {
		$(this).next().show();
	});
	$lis.blur(function() {
		if ($(this).val() === "") {
			$(this).next().hide();
		}else{

			var i = $(this).index('input');
			var flag = regValue(i);
			

			if (flag) {
				$(this).attr("class","right_border");
				$tips.eq(i).attr("class","right_tips");
				$tips.eq(i).html (hintText[i].right);
				hintText[i].isPassed=true;
			}else{
				$(this).attr("class","wrong_border");
				$tips.eq(i).attr("class","wrong_tips");
				$tips.eq(i).html( hintText[i].wrong);
				 hintText[i].isPassed=false;
			}
		}
		
	});


function regValue(i){
	var flag = false;
	var value = $lis.eq(i).val();
	
	switch(i){
		case 0:
            flag=/^[a-zA-Z0-9_]{4,16}$/.test(value.replace(/[\u0391-\uFFE5]/g,"nn"));
            break;
        case 1:
            flag=/^\S{4,16}$/.test(value);
            break;
        case 2:
            flag=$lis.eq(1).val()==value;
            break;
        case 3:
            flag=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/.test(value);
            break;
        case 4:
            flag=/^[1][0-9]{10}$/.test(value);
            break;
	}
		return flag;
}


});

function check(){
	for (var i = 0; i < oneInput.length-1; i++) {
		[0,1,2,3,4].forEach(function(v){
		regValue(v);
	});
	var flag=hintText.every(function(v){
		return v.isPassed;
	});
	if (flag) {
		alert("成功");
	}
	else{
		alert("失败");
	}
}
}
