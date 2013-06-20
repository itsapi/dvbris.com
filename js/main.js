$.fn.teletype = function(){
	var $this = this.children().filter('span:first-child');
	this.append('<span>&#9608;</span>');
	text = $this.html();
	$this.html('');
	this.show();
	$.each(text.split(''), function(i, letter){
		setTimeout(function(){
			$this.html($this.html() + letter);
		}, 50*i);
	});
	setTimeout(function(){
		console.log('stepComplete');
		cursor.startTimer();
		if ($(div + ' section.text:nth-child('+step+')').hasClass('advance')){
			$('.bash span:nth-child(2)').remove();
			cursor.stopTimer();
			doStep();
		} else {
			stepComplete = 1;
			$(div + ' section.text:nth-child('+step+')').click(function(){
				console.log('Clicked');
				continueSteps();
			});
		}
	}, 50*text.split('').length);
}

function doStep() {
	$("html, body").animate({ scrollTop: $(document).height() }, "slow");
	var $this = $(div).children('section.text');
	step++;
	console.log(div);
	console.log(step);
	if ($this.filter(':nth-child('+step+')').hasClass('bash')){
		$this.filter(':nth-child('+step+')').teletype();
	} else {
		$this.filter(':nth-child('+step+')').show('slow', function(){
			console.log('stepComplete');
			if (step < $this.length){
				doStep();
			}
		});
	}
}

function continueSteps(){
	if (stepComplete){
		stepComplete = 0;
		$('.bash span:nth-child(2)').remove();
		cursor.stopTimer();
		if (step < $(div).children('section.text').length){
			doStep();
		}
	}
}

var blink = function() {
	this.startTimer = function(){
		timerId = setInterval(function(){
			$('.bash span:nth-child(2)').toggle();
		},1000);
		console.log('start timer');
	}
	this.stopTimer = function(){
		clearInterval(timerId);
		console.log('stop timer');
	}
}

var stepComplete = 0;
var step = 0;
var cursor = new blink();
var div;

$(document).keypress(function(e){
	if (e.which == 13){
		console.log('pressed enter');
		continueSteps();
	}
});

$(document).ready(function(){
	console.log('ready!');
	$('.bash').prepend('pi@raspberrypi:~$ ');
	$('.bash').wrapInner('<span />');
	$('section.text, pre#logo').hide();
	$('pre#logo').fadeIn(1000);
	$('pre#logo').removeAttr('style');
	$('#sites a').click(function(){
		if (isNaN($(this).attr('name'))) {
			$('[id^=site]:not(#sites) section.text').hide();
			div = '#section2';
			step = 0;
			doStep();
		} else {
			div = '#site' + ($(this).attr('name'));
			step = 0;
			doStep();
		}
	});
	setTimeout(function(){
		div = '#start';
		doStep();
	}, 1000);
});