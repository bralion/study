let num=1;
function aaa(){
	num++;
	console.log(num);
}
setInterval(aaa,1000)
console.log('开始加载模块test')
module.exports=num;
