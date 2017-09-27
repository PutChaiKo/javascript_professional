// 7 函数表达式
    // 函数声明语法
    function functionName(arg0, arg1, arg2)
    {
        // 函数体
    }

    // 函数声明提升
    sayHi();
    function sayHi()    // 代码执行前会读取函数声明
    {
        console.log("Hi!");
    }

    // 函数声明具有非标准的 name 属性
    console.log(sayHi.name);

    // 函数表达式语法
    var functionName = function(arg0, arg1, arg2)
    {
        // 函数体
    }；

    // 函数表达式使用前要先赋值
    sayHi();
    var sayHi = function()  // 这里是一个匿名函数
    {
        console.log("Hi!");
    };
    console.log(sayName.name);

    // 不要这样使用函数声明
    if(condition)
    {
        sayHi = function
    }
