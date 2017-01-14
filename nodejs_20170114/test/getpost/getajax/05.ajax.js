var http = require("http");
var fs = require("fs");
var url = require("url");
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
        //GET请求
        console.log(typeof urlObj.query);//string
        res.end("waxun");
        // res.end(urlObj.query);
        // res.end(JSON.stringify(urlObj.query));
    }
})

server.listen(3000);