/*进行格式化当前的日期 */
var d = function(){
    var date = new Date();
    var year = date.getFullYear();
    var M = date.getMonth()+1;
    var d = date.getDate();
    //星期三  var d = date.getDay();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    M = addZ(M);
    d = addZ(d);
    h = addZ(h);
    m = addZ(m);
    s = addZ(s);
    return year+'-'+M+'-'+d+' '+h+':'+m+':'+s;
    //console.log(year+'-'+M+'-'+d);
}
/*小于两位进行在前面添加0 */
function addZ(arg){
    if(arg<10){
        arg = '0'+arg;
    }
    return arg;
}
//暴露
module.exports = d;