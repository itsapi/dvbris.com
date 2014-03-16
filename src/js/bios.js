function link_bios(links, bios) {

    var names = []
    links.forEach(function (anchor) {
        if (anchor.href) {
            var name = anchor.getAttribute('href').slice(1)
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
function hide_all() {
    names.forEach(function (node) {
        node.bio.classList.add('closed')
    })
}

var bios  = [].slice.call(document.getElementById('bios').childNodes)
var links = [].slice.call(document.getElementsByTagName('h2')[0].childNodes)
var names = link_bios(links, bios)

names.forEach(function (name) {
    addEvent(name.anchor, 'click', function (event) {
        if (name.bio.classList.contains('closed')){
            hide_all()
            // Wait for any to close.
            setTimeout(function () {
                name.bio.classList.remove('closed')
            }, 300)
        } else {
            hide_all()
        }
        event.stopPropagation()
        event.preventDefault ? event.preventDefault() : event.returnValue = false
    })

    addEvent(name.bio, 'click', function (event) {
        event.stopPropagation()
    })
})
addEvent(document, 'click', function (event) {
    hide_all()
    event.preventDefault ? event.preventDefault() : event.returnValue = false
})