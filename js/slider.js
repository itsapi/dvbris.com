var addEvent = function(elem, type, eventHandle) {
  if (elem == null || typeof(elem) == 'undefined') return;
  if (elem.addEventListener) {
    elem.addEventListener(type, eventHandle, false);
  } else if (elem.attachEvent) {
    elem.attachEvent("on" + type, eventHandle);
  } else {
    elem["on" + type] = eventHandle;
  }
};

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
      console.log('disable prev')
    } else {
      prev.classList.remove('disable');
      console.log('enable prev')
    }
    if (pointer == sites.length - 3) {
      next.classList.add('disable');
      console.log('disable next')
    } else {
      next.classList.remove('disable');
      console.log('enable next')
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

addEvent(prev, 'click', function () {
  if (pointer > 0) {
    pointer--;
    update();
  }
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
});
addEvent(next, 'click', function () {
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