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
var  oneInput = myForm.elements;
for (var i = 0; i < oneInput.length-1; i++) {
	addEvent(oneInput[i],"focus",function(){
		alert(oneInput[i].class);
		oneInput[i].setAttribute("class","appear");
		oneInput[i].blur();
	});
}