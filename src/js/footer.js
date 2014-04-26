var p = document.getElementById('pi_txt')
makeRequest(
    'http://node.dvbris.com/uptime',
    function (data) {
        p.innerHTML += (' | ' + data + ' uptime')
    }
)
