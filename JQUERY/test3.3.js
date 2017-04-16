$(function(){
	var x = 10;
	var y = 20;
	$("a.tooltip").mouseover(function(e){
		this.myTitle = this.title;
		this.title = "";
		var tooltip = "<div id = 'tooltip'>"+this.myTitle+"</div>";
		$("body").append(tooltip);
		$("#tooltip")
			.css({
				"position": "absolute",
				"top": (e.pageY+y) + "px",
				"left": (e.pageX+x) + "px"
			}).show("fast");
	}).mouseout(function() {
		$("#tooltip").remove();
	}).mousemove(function(e) {
		$("#tooltip")
		.css({
				"position": "absolute",
				"top": (e.pageY+y) + "px",
				"left": (e.pageX+x) + "px"
			});
	});
});