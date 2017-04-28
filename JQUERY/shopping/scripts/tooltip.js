/* 超链接文字提示 */
$(function(){
	var x = 10;
	var y = 20;
	var myTitle = '';
	$('a.tooltip').mouseover(function(e) {
		myTitle = this.title;
		this.title = '';
		var tooltip = "<div id='tooltip'> "+ myTitle + "</div>";
		$('body').append(tooltip);
		$('#tooltip')
				.css({
					"top": (e.pageY + y) + "px",
					"left": (e.pageX + x) + "px"
				}).show("fast");
	}).mouseout(function() {
		this.title = myTitle;
		$('#tooltip').remove();
	}).mousemove(function(e) {
		$('#tooltip')
		.css({
			"top": (e.pageY + y) + "px",
			"left": (e.pageX + x) + "px"
		});
	});
});