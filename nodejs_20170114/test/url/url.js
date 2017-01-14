var url = require("url");
var qs = require("querystring");
var urlStr = "http://127.0.0.1:3000/getData?name=waxun&age=11";
// console.log(url.parse(urlStr));
//将字符串转换成对象
console.log(url.parse(urlStr).pathname);
console.log(url.parse(urlStr).query);//name=waxun&age=11
console.log(qs.parse(url.parse(urlStr).query));