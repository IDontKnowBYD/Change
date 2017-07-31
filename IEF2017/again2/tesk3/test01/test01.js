function addEvent(element,event,listener){
	if (element.addEventListener) {
		element.addEventListener(event,listener,false);
	}else if (element.attachEvent) {
		element.attachEvent('on'+ event,listener);
	}else{
		element['on'+ event] = listener;
	}
}

var nam = document.getElementById('input_name');
var btn = document.getElementById('check');
var tip = document.getElementById('tip');

function getLength(str){
	var len = 0;
	for (var i = 0; i < str.length; i++) {
		charCode = str.charCodeAt(i);
		if (charCode >= 0&& charCode <= 128) {
			len +=1;
		}else{
			len +=2;
		}
	}
	return len;
}
function check(){
	var na = nam.value;
	if (getLength(na) >= 4 && getLength(na) <= 16) {
		tip.innerHTML = '名称格式正确';
		tip.style.color = '#5fbc47';
		nam.style.border = '1px solid #5fbc47';
	}else if (getLength(na) == 0) {
		tip.innerHTML = '名称不能为空';
		tip.style.color = '#de000f';
		nam.style.border = '1px solid #de000f';
	}else{
		tip.innerHTML = "格式错误";
		nam.style.border = "1px solid #de000f";
		tip.style.color = "#de000f";
	}
}

addEvent(btn,'click',function(){check();});