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

function makeRequest(url, cb) {
    var httpRequest
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        httpRequest = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
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