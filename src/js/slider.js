var prev = document.getElementById('prev');
var next = document.getElementById('next');
var sites = document.getElementsByTagName('article');
prev.style.display = 'block';
next.style.display = 'block';

var pointer = 0;

function update() {
  if (window.innerWidth >= 900) {

    if (pointer == 0) {
      prev.classList.add('disable');
    } else {
      prev.classList.remove('disable');
    }
    if (pointer == sites.length - 3) {
      next.classList.add('disable');
    } else {
      next.classList.remove('disable');
    }

    for (var i = 0; i < sites.length; i++) {
      if (i == pointer || i == pointer + 1 || i == pointer + 2) {
        sites[i].classList.remove('hidden');
      } else {
        sites[i].classList.add('hidden');
      }
    }

  } else {

    for (var i = 0; i < sites.length; i++) {
      sites[i].classList.remove('hidden');
    }
  }
}

update();

addEvent(prev, 'click', function (event) {
  if (pointer > 0) {
    pointer--;
    update();
  }
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
});
addEvent(next, 'click', function (event) {
  if (pointer < sites.length - 3) {
    pointer++;
    update();
  }
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
});
addEvent(window, 'resize', function () {
  update();
});
addEvent(document, 'keydown', function (e) {
  if (e.keyCode === 37) {
    prev.click();
  } else if (e.keyCode === 39) {
    next.click();
  }
  return false;
});