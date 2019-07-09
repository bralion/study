let a=require('./test.js');
console.log(a);
setTimeout(()=>{
	let b=require('./test.js')
	console.log(b);
},2000);
console.log(require);
