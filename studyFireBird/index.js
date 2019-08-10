var FireBird = require('node-firebird');

var options = {};
options.host = '172.27.7.20';          // 设置主机地址
// options.host = '171.221.230.111';          // 设置主机地址
// options.host = '172.27.7.64';          // 设置主机地址
options.port =3050;          // 设置主机地址
options.database = 'C:/HWATT.GDB';//绝对路径
// options.database = 'C:/Users/Administrator/Documents/Hanvon/FaceAtt/Client/HWATT.GDB';//绝对路径
// options.database = 'C:/Users/Administrator/Desktop/smartSite/server/database/HWATT.GDB'
options.user = 'sysdba';            // 用户名
options.password = "masterkey";        //
options.lowercase_keys = false; // set to true to lowercase keys
options.role = null;

// FireBird.create(options,function(err,db){
// 	console.log(222);
// 	if(err)
// 		throw err;
//
// 	db.detach(); //关闭数据库连接
// });
// FireBird.create(options,function(err,db){
// 	if(err) throw err; console.log('创建数据库成功');
// 	db.detach(); //关闭数据库连接
//  });
//
FireBird.attach(options, function(err, db) {
	if (err)
		throw err;
	//插入
	// db.query('insert into t1 (id,name) values(?,?)',[1,'Tom'], function(err, result) {
	// 	if (err)
	// 		throw err;
	// 	console.log("insert success!");
	// 	db.detach();
	// });
	
	// //删除
	// db.query('delete from t1 where name=?',['Tom'], function(err, result) {
	// 	if (err)
	// 		throw err;
	// 	console.log("delete success!");
	// 	db.detach();
	// });
	
	//创建表结构
		//db.query('create table t1( name char(9) primary key, id char(9))'
	// db.query(
	// 	'create table KQZ_Out(' +
	// 	'OutID bigint PRIMARY KEY NOT NULL,' +
	// 	'EmployeeID bigint DEFAULT 0 NOT NULL,' +
	// 	'OutType smallint NOT NULL,' +
	// 	'PrdStatus smallint DEFAULT 0 NOT NULL,' +
	// 	'ShiftDate time NOT NULL,' +
	// 	'IsDayAdjust smallint DEFAULT 0  NOT NULL,' +
	// 	'BeginTime time NOT NULL,' +
	// 	'EndTime time NOT NULL,' +
	// 	'PrdLen int DEFAULT 0 NOT NULL,' +
	// 	'BiginChk smallint DEFAULT 0 NOT NULL,' +
	// 	'BiginSpan int DEFAULT 30 NOT NULL,' +
	// 	'EndChk smallint DEFAULT 0 NOT NULL,' +
	// 	'EndSpan int DEFAULT 30 NOT NULL' +
	// 	')'
	// 	,
	// 	[], function(err, result) {
	// 	if (err)
	// 		throw err;
	// 	console.log("create success!");
	// 	db.detach();
	// });
	db.query('SELECT * FROM KQZ_EMPLOYEE', function(err, result) {
		if(err){
			throw err
			console.log(err);
		}
		// IMPORTANT: close the connection
		console.log(result);
		db.detach();
	});
});
