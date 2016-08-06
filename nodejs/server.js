// Webサーバー
var http = require('http');
var settings = require('./settings');
console.log(settings);
var server = http.createServer();
server.on('request', function(req, res){
  //アクセスしたURLに応じて処理を変える
  //アクセスしてきたURLは req.url で取ることができる
  switch (req.url) {
    case '/about':
      msg = "about this page";
      break;
    case '/profile':
      msg = "about me";
      break;
    default:
      msg = 'wrong page';
      break;
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello from' + req.url + '\n');
  res.write(msg);
  res.end();
})
server.listen(settings.port, settings.host);
console.log("server listening ...");
