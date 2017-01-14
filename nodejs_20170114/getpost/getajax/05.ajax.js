var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");
var server = http.createServer();
server.on("request", function (req, res) {
    var urlStr = req.url;
    var urlObj = url.parse(urlStr);
    
    if (req.url == "/" && req.method == "GET") {
        fs.readFile("./index.html", function (err, data) {
            if (err) {
                console.log(err);
            }
        
            res.write(data);
            res.end();
        })
    } else if (req.url == "/jquery.min.js" && req.method == "GET") {
        fs.readFile("./jquery.min.js", function (err, data) {
            if (err) {
                console.log(err);
            }
            res.write(data);
            res.end();
        })
    } else if (urlObj.pathname == "/getData" && req.method == "GET") {
        res.writeHead(200,{"Content-Type":"text/json;charset=utf-8"});
        //GET请求
        // console.log(typeof urlObj.query);//string
        // res.end("waxun");
        // res.end(urlObj.query);
        console.log(qs.parse(urlObj.query));
        // console.log(typeof JSON.stringify(qs.parse(urlObj.query)));
        // console.log(typeof JSON.parse(JSON.stringify(urlObj.query)));

        //将json对象转换成json字符串，进行传输
        // console.log(typeof JSON.stringify(qs.parse(urlObj.query)))
        res.end(JSON.stringify(qs.parse(urlObj.query)));
    }
})

server.listen(3000);