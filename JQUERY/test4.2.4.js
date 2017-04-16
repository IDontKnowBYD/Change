$(function(){
	$("#panel").css('opacity', '0.5');
	$("#panel").click(function(event) {
		$(this).animate({left: "500px",height: "200px",opacity: "1"},3000)
				.animate({top: "200px",width: "200px"},3000,function(){
					$(this).css('border', '5px solid blue');
				});
			
	});
});