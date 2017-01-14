/*

querystring.stringify(obj, [sep], [eq]);
    将对象转换成json字符串
    将JSON对象格式化为查询字符串格式的字符串，默认的分隔符为：“&”和“=”

querystring.parse(str, [sep], [eq], [options])：
    将json字符串转换json对象
    根据“&”和“=”将字符串进行分割，反序列化为JSON对象


    
*/
//将对象转换成json字符串
//querystring.stringify(obj, [sep], [eq]);

/*var qs = require("querystring");
var obj = {
    "name" : "waxun",
    "age" : 11
};
// qs.stringify(obj);
console.log(qs.stringify(obj));//name=waxun&age=11
console.log(typeof qs.stringify(obj));//string*/

//将json字符串转换json对象
var qs = require("querystring");
var str = "name=waxun&age=11";
console.log(qs.parse(str));//{ "name" : "waxun","age" : 11}
console.log(qs.parse(str).name);//waxun
console.log(typeof qs.parse(str));