$(function(){
	$("tbody>tr:odd").addClass('odd');
	$("tbody>tr:even").addClass('even');
	$("tbody>tr").click(function() {
		$(this)
			.addClass('selected')
			.siblings().removeClass('selected')
			.end()
			.find(':raido').attr('checked',true);
		$('table :radio:checked').parent().parent().addClass('selected');
	});
});