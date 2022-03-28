// 定义一个依赖underscore.js的模块
define(['underscore'],function(_){
    var classify = function(list){
      _.countBy(list,function(num){
        return num > 30 ? 'old' : 'young';
      })
    };
    return {
      classify :classify
    };
  })