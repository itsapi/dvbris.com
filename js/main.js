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
		if (step < 3){
			$('.bash span:nth-child(2)').remove();
			cursor.stopTimer();
			doStep();
		} else {
			stepComplete = 1;
		}
	}, 50*text.split('').length);
};

function doStep() {
	var $this = $('#container').children('section');
	step++;
	console.log(step);
	if ($this.filter(':nth-child('+step+')').hasClass('bash')){
		$this.filter(':nth-child('+step+')').teletype();
	} else {
		$this.filter(':nth-child('+step+')').fadeIn('slow', function(){
			if (step < $this.length){
				doStep();
			}
		});
	}
}

var blink = function() {
	this.startTimer = function(){
		timerId = setInterval(function(){
			$('.bash span:nth-child(2)').toggle();
		},1000);
		console.log('start timer');
	};
	this.stopTimer = function(){
		clearInterval(timerId);
		console.log('stop timer');
	};
}

$(function() {
	$('body').prepend('<h2><pre></pre></h2>');
	$('h2 pre').figlet("Dvbris Web Design");
});

var stepComplete = 0;
var step = 0;
var cursor = new blink();

$(document).keypress(function(e){
	if (e.which == 13){
		console.log('pressed enter ' + step);
		if (stepComplete){
			stepComplete = 0;
			$('.bash span:nth-child(2)').remove();
			cursor.stopTimer();
			if (step < $('#container').children('section').length){
				doStep();
			}
		}
	}
});

$(document).ready(function(){
	console.log('ready!');
	$('.bash').wrapInner('<span />');
	$('section').hide();
	setTimeout(function(){
		doStep();
	}, 1000);
});