const head = require('./head');
const body = require('./body');
class Person {
	constructor(){
		this.body=body;
		this.head=head;
	};
	use(){//插件扩展功能
	
	}
}

 exports=module.exports=Person;

