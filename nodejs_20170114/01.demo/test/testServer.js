
//进行读取文件
var fs = require('fs');
var htmldata = "";
fs.readFile('./test.html','utf8',function(err,data){
    if(err){console.log(err)}
    // console.log(data);
    htmldata = data;
})
//服务器处理返回数据
var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
    res.write(htmldata);
    res.end();
});
server.listen(3000);