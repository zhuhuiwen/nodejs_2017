var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('01data<br>');
    res.write('02data');
    res.write('<input type="submit" value="提交">');
    res.end();
})
server.listen(3000);