$(function(){
$('#add').click(function() {
	var $options = $('#select1 option:selected');
	$options.appendTo('#select2');
});
$('#add_all').click(function() {
	var $options = $('#select1 option');
	$options.appendTo('#select2');
});
$('#select1').dblclick(function() {
	var $options = $('option:selected,this');
	$options.appendTo('#select2');
});
});