//小程序提取公用函数到util.js
//1：在utils被调用的js文件中，面向对象的方式模型输出：  module.exports = { 要调用的函数名称：要调用的函数名称 }；
//2：在要调用的js文件中模块化引入utils的js文件  var object = require("utils被调用的js文件地址") ； 可以输出一下object就能看到被调用的方法了；
var text = "这是一个测试utils.js的信息";
var testUtil = function(){
  return text;
}

module.exports = {
  text: text,
  testUtil: testUtil
}