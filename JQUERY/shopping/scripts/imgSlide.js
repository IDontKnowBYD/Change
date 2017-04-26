$(function(){
	$('#jnBrandTab li a').click(function() {
		$(this).parent().addClass('chos')
				.siblings().removeClass('chos');
		var idx = $('#jnBrandTab li a').index(this);
		showBrandList(idx);
		return false;
	});
});

function showBrandList(index){
	var $rollobj = $('#jnBrandList');
	var rollWidth = $rollobj.find('li').outerWidth();
	rollWidth = rollWidth*4;
	$rollobj.stop(true,false).animate({left: -rollWidth*index}, 1000);
}