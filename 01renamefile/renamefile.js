// 引入fs文件处理模块
var fs = require("fs");
// 现在我们要关心的是'icons'文件夹
// 我们不妨用变量表示这个文件夹名称，方便日后维护和管理
var src = 'icons';

// API文档中中找到遍历文件夹的API
// 找到了，是fs.readdir(path, callback)
// 文档中有叙述：
// 读取 path 路径所在目录的内容。 回调函数 (callback) 接受两个参数 (err, files) 其中 files 是一个存储目录中所包含的文件名称的数组
// 因此：
fs.readdir(src, function(err, files) {
	if (err) {
		console.log(err);
		return;
	}
	//console.log(files);//['a-01.jpg','a-02.jpg','a-03.jpg,]
	//console.log(typeof files);//obj
	/*
		使用for循环进行遍历对象和替换
	*/
	/*for(var i=0;i<files.length;i++){
		var  oldPath =  src+'/'+files[i];
		var  newPath =  src+'/'+files[i].replace(/-/g,'_');
		console.log(oldPath+'--'+newPath);
		//console.log(files[i]);
		// fs.rename(oldPath, newPath, callback)

		fs.rename(oldPath, newPath, function(err){
			if(err){
				console.log('替换失败');
				return ;
			}
			console.log('替换成功');
			
		});
	}*/
	/*
	复习es5中的foreach的使用 
	*/
	files.forEach(function(val,index){
		//console.log(val);
		/*
			API文档中找到重命名的API
			fs.rename(oldPath, newPath, callback)
		*/
		fs.rename(src+'/'+val,src+'/'+val.replace(/-/g,'_'),function(err){
			if(err){
				console.log('没有替换成功');
				return;
			}
			console.log('文件名称替换成功');
		});
	})
})