function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src",source);
	if(document.getElementById("description")){
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	if(description.firstChild.nodeType == 3){
	description.firstChild.nodeValue = text;
	}
	}
	return true;
}
//function countBodyChildren(){
	//var body_element = document.getElementsByTagName("body")[0];
	//alert(body_element.nodeType);
	//}
//window.onload = countBodyChildren;
function prepareGallery(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var link = gallery.getElementsByTagName("a");
	for(var i = 0;i < link.length;i++){
		link[1].onclick = function(){
			return !showPic(this);
		}
	}
}
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != "function"){
		window.onload = func;
	}else{
		wondow.onload = function(){
			oldonload();
			func();
		}
	}
}
addLoadEvent(prepareGallery);