function link_bios(links, bios) {

    var names = []
    links.forEach(function (anchor) {
        if (anchor.href) {
            var name = anchor.getAttribute('data-name')
            var bio
            bios.forEach(function (node) {
                if (node.id == name) {
                    bio = node
                }
            })

            names.push({
                anchor: anchor,
                bio: bio
            })
        }
    })
    return names
}

function hide_all(names) {
    names.forEach(function (node) {
        node.bio.classList.add('closed')
    })
}

function check_size() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return ((width < 650) || (height < 600))
}

function on_resize(names) {
    var size = check_size()
    if (size) {
        names.forEach(function (node) {
            node.bio.classList.add('small')
        })
        hide_all(names)
    } else {
        names.forEach(function (node) {
            node.bio.classList.remove('small')
        })
    }
}

function slice(elems) {
    var list = [];
    for (var i = 0; i < elems.length; i++) {
        list.push(elems[i]);
    }
    return list;
}
var bios  = slice(document.getElementById('bios').childNodes)
var links = slice(document.getElementsByTagName('h2')[0].childNodes)
var names = link_bios(links, bios)

names.forEach(function (name) {
    name.bio.style.display = 'block'

    name.close_btn = document.createElement('a')
    name.close_btn.classList.add('close')
    name.close_btn.innerHTML = 'Close'
    name.bio.appendChild(name.close_btn)
    addEvent(name.close_btn, 'click', function (event) {
        hide_all(names)
        event.preventDefault ? event.preventDefault() : event.returnValue = false
    })

    var p = document.createElement('p')
    var h4 = name.bio.getElementsByTagName('h4')[0]
    makeRequest(
        'https://node.dvbris.com/twitter?api_url=' +
            encodeURIComponent('https://api.twitter.com/1.1/users/show.json?screen_name=' + name.bio.id),
        function (data) {
            var description = JSON.parse(data).description
            p.innerText = description
        }
    )
    addAfter(h4, p)

    addEvent(name.anchor, 'click', function (event) {
        if (!check_size()) {
            if (name.bio.classList.contains('closed')){
                hide_all(names)
                // Wait for any to close.
                setTimeout(function () {
                    name.bio.classList.remove('closed')
                }, 300)
            } else {
                hide_all(names)
            }
            if (event.stopPropagation) event.stopPropagation()
            event.preventDefault ? event.preventDefault() : event.returnValue = false
        }
    })

    addEvent(name.bio, 'click', function (event) {
        if (event.stopPropagation) event.stopPropagation()
    })
})
addEvent(document, 'click', function (event) {
    hide_all(names)
})
addEvent(document, 'keydown', function (event) {
    if (event.keyCode === 27) {
        hide_all(names)
    }
})
addEvent(window, 'resize', function () {
    on_resize(names)
})
on_resize(names)
