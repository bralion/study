const ear = require('./ear')
const eye = require('./eye')
const mouse = require('./mouse')

var head={};
head.ear=ear;
head.eye=eye;
head.mouse=mouse;
console.log(head);
module.exports=head;
