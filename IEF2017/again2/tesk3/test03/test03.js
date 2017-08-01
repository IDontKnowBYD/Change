function radioChange(){
	if (document.getElementById("inSchoolRadio").checked) {
		document.getElementById("inSchool").style.display= "block";
		document.getElementById("outSchool").style.display = "none";
	}
	else{
		document.getElementById("inSchool").style.display = "none";
		document.getElementById("outSchool").style.display = "block";
	}
}

function selectDistrict(){
	var data = {
		bj:["北京大学","清华大学"],
		sh:["复旦大学","同济大学"]
	};

	var source = document.getElementById("select1");
	var target = document.getElementById("select2");
	var selected = source.options[source.selectedIndex].value;
	target.innerHTML = '';
	for (var i = 0; i < data[selected].length; i++) {
		var opt =document.createElement('option');        
		opt.innerHTML = data[selected][i];
		target.appendChild(opt);
	}
}