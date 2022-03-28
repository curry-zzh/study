    // 引用模块，将模块放在[]内
    require(['jquery', 'math'],function($, math){
        var sum = math.add(10,20);
        $("#sum").html(sum);
      });