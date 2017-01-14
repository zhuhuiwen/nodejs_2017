//引入http模块
var http = require('http');
//创建一个http服务器的实例
var server = http.createServer();
var num = 0;
/*
 * request对象的作用
 *      存储浏览器发送过来的http请求的内容
 * response对象
 *      封装一个返回的报文
 *      一旦执行额end方法，响应报文就返回了，整个http请求到相应的流程就结束了
 * 
*/
server.on('request',function(request,response){
    //要让服务器接收http请求
    //回调函数里面有两个参数
    
    num++;
    response.end('这是第'+num+'次请求');
})
server.listen(3000);