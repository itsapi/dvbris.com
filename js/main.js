$(window).resize(function(){
	if ($(window).width() > 1024) {
		$('#container_left').css({
			position: 'absolute',
			top: ($(window).height() - $('#container_left').outerHeight())/2,
			left: '10%'
		});
		$('td img').css({
			width: ($(window).width()-$('#container_left').width())/4
		});
		$('#container_right').css({
			position: 'absolute',
			top: ($(window).height() - $('#container_right').outerHeight())/2,
			right: '5%'
		});
	} else {
		$('#container_left').css({
			position: 'absolute',
			top: '10%',
			left: ($(window).width() - $('#container_left').outerWidth())/2
		});
		$('td img').css({
			width: $(window).width()/4
		});
		$('#container_right').css({
			position: 'absolute',
			top: $('#container_left').outerHeight()+$(window).width()/5,
			right: ($(window).width() - $('#container_right').outerWidth())/2,
		});
	}
});

$(document).ready(function(){
	$(window).resize();
	$(window).resize();
});