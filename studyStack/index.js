
//堆栈的运行规律
function c(){
	console.trace();
	console.trace();
}
function b(){
	console.trace();
	c();
	console.trace();
}
function a(){
	console.trace();
	b();
	console.trace();
}
a();


// 出现错误时打印堆栈信息
function err(){
		handleErr()
}
function handleErr(){
	console.trace();
	console.log(aaa);//这一步会报错   aaa未定义
}
err()
