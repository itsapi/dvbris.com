var http = require('http');
var url = require('url');
var t = require('twitter-js-client');

var twitter = new t.Twitter({
  "consumerKey": "{olls96_twitter_consumerKey}",
  "consumerSecret": "{olls96_twitter_consumerSecret}",
  "accessToken": "{olls96_twitter_accessToken}",
  "accessTokenSecret": "{olls96_twitter_accessTockenSecret}",
  "callBackUrl": "http://dvbris.com"
});

http.createServer(function (req, res) {
  var url_parts = url.parse(req.url, true);
  var name = url_parts.query.name ? url_parts.query.name : ''

  res.writeHead(200, {'Content-Type': 'application/json'});
  function error(err) {
    res.end(JSON.stringify(err));
  }
  function success(data) {
    res.end(data);
  }
  twitter.doRequest('https://api.twitter.com/1.1/users/show.json?screen_name=' + name, error, success);

}).listen(1337, 'localhost');
console.log('Server running at localhost:1337');