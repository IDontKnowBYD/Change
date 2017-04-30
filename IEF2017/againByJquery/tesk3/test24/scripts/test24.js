$(function(){
	var $inSchool = $('.inSchool');
	var $outSchool = $('.outSchool');
	var $inSchoolRadio = $('#inSchoolRadio');
	var $outSchoolRadio = $('#outSchoolRadio');
	$inSchoolRadio.click(function() {
		alert('a');
		$inSchool.show();
		$outSchool.hide();
	}).click();
	
	$outSchoolRadio.click(function() {
		alert('b');
		$inSchool.hide();
		$outSchool.show();
	});

	
	var $source = $("#select1");
	$source.change(function() {

		var data ={
		bj:["北京大学","清华大学"],
		sh:["复旦大学","同济大学"]
	};
	var $target = $("#select2");
	var selected = $source.find('option:checked').val();
	$target.html("");
	for(var i=0;i<data[selected].length;i++){
		 var opt = document.createElement("option");
		 opt.value = data[selected][i];
		 opt.innerHTML=data[selected][i];
		 document.getElementById("select2").appendChild(opt);
	}
	});
	
});
