$(window).resize(function(){
	$('#container_left').css({
		top: ($(window).height() - $('#container_left').outerHeight())/2
	});
	$('td img').css({
		width: ($(window).width()-$('#container_left').width())/4
	});
	$('#container_right').css({
		top: ($(window).height() - $('#container_right').outerHeight())/2
	});
});

$(document).ready(function(){
	$(window).resize();
});