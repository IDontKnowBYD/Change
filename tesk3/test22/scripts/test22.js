var msgDOM = document.getElementById("msg");
var tipDOM = document.getElementById("tip");

function checkmsg(){
	var msg = msgDOM.value;
	if (GetLength(msg)==0) {
		tipDOM.innerHTML = "姓名不能为空";
		tipDOM.style.color = "#dc1b3a";
		msgDOM.style.border = "1px solid #dc1b3a";
	}
	else if (GetLength(msg)>=4&&GetLength(msg)<=16) {
		tipDOM.innerHTML = "名称格式正确";
		tipDOM.style.color = "#67be53";
		msgDOM.style.border = "1px solid #67be53";
	}
	else{
		tipDOM.innerHTML = "格式错误";
		tipDOM.style.color = "#dc1b3a";
		msgDOM.style.border = "1px solid #dc1b3a";
	}
}
var GetLength = function(str){
	var realLength = 0;
	for(var i=0;i<str.length;i++){
		charCode = str.charCodeAt(i);
		if (charCode >=0&& charCode<=128) {
			realLength+=1;
		}
		else{
			realLength+=2;
		}
	}
	return realLength;
};