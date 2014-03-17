function addEvent(elem, type, eventHandle) {
    if (elem == null || typeof(elem) == 'undefined') return
    if (elem.addEventListener) {
        elem.addEventListener(type, eventHandle, false)
    } else if (elem.attachEvent) {
        elem.attachEvent("on" + type, eventHandle)
    } else {
        elem["on" + type] = eventHandle
    }
}

function addAfter(elem, add) {
    if (elem.nextSibling) {
        elem.parentNode.insertBefore(add, elem.nextSibling)
    } else {
        elem.parentNode.appendChild(add)
    }
}

var httpRequest
function makeRequest(url, cb) {
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest()
    } else if (window.ActiveXObject) { // IE
        try {
        httpRequest = new ActiveXObject("Msxml2.XMLHTTP")
        }
        catch (e) {
        try {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP")
        }
        catch (e) {}
        }
    }

    if (!httpRequest) {
        console.log('Giving up :( Cannot create an XMLHTTP instance')
        return false
    }
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                cb(httpRequest.responseText)
            } else {
                console.log('There was a problem with the request.')
            }
        }
    }
    httpRequest.open('GET', url)
    httpRequest.send()
}