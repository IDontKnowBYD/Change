
var hintText=[{hint:"必填，长度为4~16位字符",right:"名称格式正确",wrong:"名称格式有误",isPassed:false},
             {hint:"必填，长度为4~16位字符,包含字母和数字",right:"密码可用",wrong:"密码不可用",isPassed:false},
             {hint:"必填，必须与密码相同",right:"密码输入一致",wrong:"密码输入不一致",isPassed:false},
             {hint:"填写正确的邮箱格式",right:"邮箱格式正确",wrong:"邮箱格式错误",isPassed:false},
             {hint:"必填，长度为4~16位字符",right:"手机格式正确",wrong:"手机格式错误",isPassed:false}];
var regEvent=function(node,event,func){
	if (node.addEventListener) {
		node.addEventListener(event,func);
	}
	else if(node.attachEvent){
		node.attachEvent("on"+event,func);
	}
	else{
		node["on"+event]=func;
	}
};

function regValue(id){
	var flag=false;
	var input=document.getElementById("t"+id);
	var hint=document.getElementById("h"+id);
	var content=document.getElementById("c"+id);
	var value=input.value;
	switch(parseInt(id)){
		case 1:
            flag=/^[a-zA-Z0-9_]{4,16}$/.test(value.replace(/[\u0391-\uFFE5]/g,"nn"));
            break;
        case 2:
            flag=/^\S{4,16}$/.test(value);
            break;
        case 3:
            flag=document.getElementById("t2").value==value;
            break;
        case 4:
            flag=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/.test(value);
            break;
        case 5:
            flag=/^[1][0-9]{10}$/.test(value);
            break;
	}
	if(flag){
        input.style.borderColor = "green";
        hint.className="right";
        content.innerHTML=hintText[id-1].right;
        hintText[id-1].isPassed=true;
        }
    else{
        input.style.borderColor = "red";
        hint.className="wrong";
        content.innerHTML=hintText[id-1].wrong;
        hintText[id-1].isPassed=false;
        }
};

var inputs=document.getElementsByTagName("input");
[].forEach.call(inputs,function(v){
	var id=v.getAttribute("id").slice(1);
	var hintID="h"+v.getAttribute("id").slice(1);
	regEvent(v,"focus",function(){
		document.getElementById(hintID).style.display="table-row";
	});
	regEvent(v,"blur",function(){regValue(id)});
});

regEvent(document.getElementById("check"),"click",function(e){
	e.preventDefault();

	[1,2,3,4,5].forEach(function(v){
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
});