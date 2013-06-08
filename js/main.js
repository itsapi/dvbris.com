function teletype(el, animDelay, text, callback){
	$.each(text.split(''), function(i, letter){
		setTimeout(function(){
			el.append(letter);
		}, animDelay * i);
	});
	setTimeout(function(){
		callback();
	}, text.split('').length*animDelay);
};

$(document).ready(function(){
	$('#intro, #sites').css('display', 'none');
	$('body').prepend("<section class=\"text bash\"></section>");
	teletype($('.bash:first-child'), 100, '$ pi@raspberrypi - ', function() {
		$('.bash:first-child').append('<br><br>');
		teletype($('.bash:first-child'), 100, '$ pi@raspberrypi - cat intro.txt', function() {
			setTimeout(function(){
				$('#intro').fadeIn('slow', function() {
					$('#intro').after("<section class=\"text bash\"></section>");
					teletype($('.bash:nth-child(3)'), 100, '$ pi@raspberrypi - cat sites.txt', function() {
						setTimeout(function(){
							$('#sites').fadeIn('slow');
						}, 200);
					});
				});
			}, 200);
		});
	});
});