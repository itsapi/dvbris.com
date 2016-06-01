exports.addEvent = function(elem, type, eventHandle) {
    if (elem == null || typeof(elem) == 'undefined') return
    if (elem.addEventListener) {
        elem.addEventListener(type, eventHandle, false)
    } else if (elem.attachEvent) {
        elem.attachEvent("on" + type, eventHandle)
    } else {
        elem["on" + type] = eventHandle
    }
}

exports.addAfter = function(elem, add) {
    if (elem.nextSibling) {
        elem.parentNode.insertBefore(add, elem.nextSibling)
    } else {
        elem.parentNode.appendChild(add)
    }
}

exports.makeRequest = function(url, cb) {
    // IE8 & 9 only Cross domain JSON GET request
    if ('XDomainRequest' in window && window.XDomainRequest !== null) {
        var xdr = new XDomainRequest() // Use Microsoft XDR
        xdr.open('GET', url)
        xdr.onload = function () {
            cb(xdr.responseText)
        };
        xdr.onerror = function() {
            _result = false;
        };
        xdr.send()
    }

    // IE7 and lower can't do cross domain
    else if (navigator.userAgent.indexOf('MSIE') != -1 &&
             parseInt(navigator.userAgent.match(/MSIE ([\d.]+)/)[1], 10) < 8) {
       return false;
    }

    else {
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
}