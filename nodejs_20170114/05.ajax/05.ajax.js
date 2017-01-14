var http = require("http");
var fs = require("fs");
var server = http.createServer();
server.on("request", function (req, res) {
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
    } else if (req.url == "/getData" && req.method == "POST") {
        //GET请求
        /*var dataJson = {
            "name" : 123,
            "age" : 18
        };
        res.end(JSON.stringify(dataJson));*/

        //POST请求
        var info = "";
        //监听数据
        req.on("data", function (str) {
            info += str;
        })
        //监听数据接收完成事件
        req.on("end", function () {
            console.log(info);

            //后端返回一个成功的提示信息，以字符串的形式进行返回
            var data = { "success": "true" };
            res.end(JSON.stringify(data));
        })

    }
})

server.listen(3000);