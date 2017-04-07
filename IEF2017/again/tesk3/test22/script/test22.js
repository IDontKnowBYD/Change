function addEvent(element,event,listener){
	if (element.addEventListener) {
		element.addEventListener(event,listener,false);
	}else if(element.attachEvent){
		element.attachEvent('on'+event,listener);
	}else{
		element['on'+event] = listener;
	}
}

var nam = document.getElementById('input_name');
var btn = document.getElementById('check');
var tip = document.getElementById('tips');

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
		if(getLength(na) == 0){
			tip.innerHTML = "姓名不能为空";
			nam.style.border = "1px solid #de000f";
			tip.style.color = "#de000f";
		}
		else if (getLength(na) > 6 && getLength(na) < 14){
			tip.innerHTML = "名称格式正确";
			nam.style.border = "1px solid #5ebb46";
			tip.style.color = "#5ebb46";
		}
		else{
			tip.innerHTML = "格式错误·";
			nam.style.border = "1px solid #de000f";
			tip.style.color = "#de000f";
		}
}

addEvent(btn,"click",check);



