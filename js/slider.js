var prev = document.getElementById('prev');
var next = document.getElementById('next');
var sites = document.getElementsByTagName('article');

var pointer = 0;
update();

prev.onclick = function () {
  if (pointer != 0) {
    pointer--;
    update();
  }
  return false;
}
next.onclick = function () {
  if (pointer != sites.length - 3) {
    pointer++;
    update();
  }
  return false;
}

function update() {
  for (var i = 0; i < sites.length; i++) {
    if (i == pointer || i == pointer + 1 || i == pointer + 2) {
      sites[i].style.display = 'table-cell';
    } else {
      sites[i].style.display = 'none';
    }
  }
}