$.fn.teletype = function(){
	var $this = this.filter('span:first-child');
	this.append('<span> &#9608;</span>');
	console.log($this);

	text = this.html();
	$this.html('');
	this.show();

	$.each(text.split(''), function(i, letter){
		setTimeout(function(){
			$this.html($this.html() + letter);
		}, 50*i);
	});
	setTimeout(function(){
		console.log('stepComplete');
		setInterval(function(){
			$('.bash span:nth-child(2)').toggle();
		}, 1000);
		if (step < 3){
			doStep();
			$('.bash span:nth-child(2)').remove();
		} else {
			stepComplete = 1;
		}
	}, 50*text.split('').length);
};

function doStep() {
	var $this = $('body').children('section');
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

var stepComplete = 0;
var step = 0;

$(document).keypress(function(e){
	if (e.which == 13){
		console.log('pressed enter ' + step);
		if (stepComplete){
			stepComplete = 0;
			$('.bash span:nth-child(2)').remove();
			if (step < $('body').children('section').length){
				doStep();
			}
		}
	}
});

$(document).ready(function(){
	$('.bash').wrapInner('<span />');
	$('section').hide();
	doStep();
});