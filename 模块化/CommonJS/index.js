var math = require('./math');
//CommonJS 规范作为一种同步方案，后续代码必须等待前面的require指令加载模块完成。
math.add11(2, 5);
console.log(math.add11(2, 5),math.basicNum11);