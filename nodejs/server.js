// Webサーバー
var http = require('http'),fs = require('fs'), ejs = require('ejs');
var settings = require('./settings');
var server = http.createServer();
var template = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8');
var posts = [];
server.on('request', function(req, res){
  if (req.method === 'POST') {
    req.data = "";
    req.on("readable", function(){
      req.data += read.read();
    });
    req.on("end", function(){

    });
  } else {
    renderForm(posts, res);
  }
});
server.listen(settings.port, settings.host);
console.log("server listening ...");
