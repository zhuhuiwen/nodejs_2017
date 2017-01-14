var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);
    console.log(req.httpVersion);
    res.end('nnnnn');
})
server.listen(3001);