var hintText=[{right:"名称格式正确",wrong:"名称格式有误",isPassed:false},
             {right:"密码可用",wrong:"密码不可用",isPassed:false},
             {right:"密码输入一致",wrong:"密码输入不一致",isPassed:false},
             {right:"邮箱格式正确",wrong:"邮箱格式错误",isPassed:false},
             {right:"手机格式正确",wrong:"手机格式错误",isPassed:false}];

function addEvent(element,event,listener){
	if (element.addEventListener) {
		element.addEventListener(event,listener,false);
	}
	else if (element.attachEvent) {
		element.attachEvent("on"+event,listener);
	}
	else{
		element["on"+event] = listener;
	}
}

var myForm = document.forms[0];
var oneInput = myForm.elements;
var tips = document.getElementsByTagName('p');
for (var i = 0; i < oneInput.length-1; i++) {
	addEvent(oneInput[i],"focus",function(num){
		return function(){
		tips[num].removeAttribute("class");
		};
	}(i));
}


function regValue(i){
	var flag = false;
	var value = oneInput[i].value;
	switch(i){
		case 0:
            flag=/^[a-zA-Z0-9_]{4,16}$/.test(value.replace(/[\u0391-\uFFE5]/g,"nn"));
            break;
        case 1:
            flag=/^\S{4,16}$/.test(value);
            break;
        case 2:
            flag=oneInput[1].value==value;
            break;
        case 3:
            flag=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/.test(value);
            break;
        case 4:
            flag=/^[1][0-9]{10}$/.test(value);
            break;
	}
		if (flag) {
			oneInput[i].setAttribute("class","right_border");
			tips[i].setAttribute("class","right_tips");
			tips[i].innerHTML = hintText[i].right;
		}else{
				oneInput[i].setAttribute("class","wrong_border");
				tips[i].setAttribute("class","wrong_tips");
				tips[i].innerHTML = hintText[i].wrong;
			}
}
for (var i = 0; i < oneInput.length-1; i++) {
	addEvent(oneInput[i],"blur",function(i){
		return function(){
		regValue(i);
		};
	}(i));
}