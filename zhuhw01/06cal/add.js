var add = function(v1,v2){
	return v1+v2;
}
// module.exports = add;
// console.log(module)

/*

在给module.exports赋值之前，它是一个空对象
正确的赋值方式
给对象赋值
*/
/*module.exports.addFn = add;
module.exports.test = 123;*/

//module.exports直接赋值只能被使用一次
module.exports = 123;
module.exports = 567;