/*var add = require('./add.js');
var sub = require('./sub.js');
var pro = require('./pro.js');
var div = require('./div.js');

console.log(add(1,2));
console.log(sub(2,1));
console.log(pro(1,8));
console.log(div(4,2));*/

/*var  add = require('./add.js');
console.log(add(1,2));*/


/*console.log(typeof require('./add.js'));//object
var  obj = require('./add.js');
console.log(obj.addFn(1,2));//3
console.log(obj.test);//123*/

// console.log(require('./add.js'));//567

/*
1. 第一次加载js(module)的时候,会执行一遍js里面的代码
2. 第二次加载js的时候，不执行js代码了，直接去内存中找第一次加载js对应的module对象，从中找到module.exports
*/
var sub = require('./sub.js');
var sub2 = require('./sub.js');