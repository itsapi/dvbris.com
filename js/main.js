$.fn.teletype = function(opts){
	var $this = this,
		defaults = {
			animDelay: 50
		},
		settings = $.extend(defaults, opts);

	$.each(settings.text.split(''), function(i, letter){
		setTimeout(function(){
			$this.html($this.html() + letter);
		}, settings.animDelay * i);
	});
};

$(document).ready(function(){
	$('#intro, #sites').css('display', 'none');
	$('body').prepend("<section class=\"text\" id=\"start\"></section>");
	$('#start').teletype({
		animDelay: 100,
		text: '$ pi@raspberrypi - '
	});
	setTimeout(function(){
		$('#intro').fadeIn('slow', function() {
			$('#sites').fadeIn('slow');
		});
	}, 2000);
});