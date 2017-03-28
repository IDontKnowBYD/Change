function radioChange(){
	if (document.getElementById("inSchoolRadio").checked) {
		document.querySelector(".inSchool").className = "inSchool";
		document.querySelector(".outSchool").className = "outSchool hide";
	}
	else{
		document.querySelector(".inSchool").className = "inSchool hide";
		document.querySelector(".outSchool").className = "outSchool";
	}
}
function selectDistrict(){
	var data ={
		bj:["北京大学","清华大学"],
		sh:["复旦大学","同济大学"]
	}
	var source = document.getElementById("select1");
	var target = document.getElementById("select2");
	var selected = source.options[source.selectedIndex].value;
	target.innerHTML="";
	for(var i=0;i<data[selected].length;i++){
		 var opt = document.createElement("option");
		 opt.value = data[selected][i];
		 opt.innerHTML=data[selected][i];
		 document.getElementById("select2").appendChild(opt);
	}
}