var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request', function (req, res) {
    if (req.url == "/") {
        //读文件返回
        fs.readFile('./public/index.html', function (err, data) {
            if (err) {
                console.log(err);
            }
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            res.write(data);
            res.end();
        })
    } else if (req.url == '/main.js') {
        //http://127.0.0.1:3000/main.js
        //读文件返回
        fs.readFile('./public/main.js', function (err, data) {
            if (err) {
                console.log(err);
            }
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            res.write(data);
            res.end();
        })
    }
})
server.listen(3000);
