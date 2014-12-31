var prev = document.getElementById('prev');
var next = document.getElementById('next');
var sites = document.getElementsByClassName('sites')[0];
prev.style.display = 'block';
next.style.display = 'block';

var goal = 0;
var loop = false;

function block_s () {
  return sites.getElementsByTagName('article')[0].offsetWidth;
}

function scroll (g) {
  goal = g;
  if (!loop) {
    scroll_loop();
  } 
}

function scroll_loop () {
  loop = true;
  var old = sites.scrollLeft;
  
  sites.scrollLeft += (goal - sites.scrollLeft) / 2;
  
  if (Math.abs(goal - sites.scrollLeft) <= 1) {
    sites.scrollLeft = goal;
  }
  
  if (sites.scrollLeft == goal || sites.scrollLeft == old) {
    loop = false;
    return;
  } else {
    window.requestAnimationFrame(scroll_loop);
  }
}

addEvent(sites, 'scroll', function (event) {
  if (sites.scrollLeft <= 0) {
    prev.className = 'disable';
  } else {
    prev.className = '';
  }
  if (sites.scrollLeft >= sites.scrollWidth - sites.offsetWidth) {
    next.className = 'disable';
  } else {
    next.className = '';
  }
});
addEvent(window, 'resize', function (event) {
  var block = block_s();
  scroll(block * (Math.floor(sites.scrollLeft / block) + 1));
});
addEvent(prev, 'click', function (event) {
  var block = block_s();
  scroll(block * Math.floor((sites.scrollLeft - 1) / block));
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
});
addEvent(next, 'click', function (event) {
  var block = block_s();
  scroll(block * (Math.floor(sites.scrollLeft / block) + 1));
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
});
addEvent(document, 'keydown', function (e) {
  if (e.keyCode === 37) {
    prev.click();
  } else if (e.keyCode === 39) {
    next.click();
  }
  return false;
});