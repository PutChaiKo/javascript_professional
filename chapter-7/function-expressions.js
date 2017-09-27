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
        sayHi = function()
        {
            console.log("Hi!");
        }
        else
        {
            function()
            {
                console.log("Yo!");
            }
        }
    }

    // 可以这样用函数表达式代替
    var sayHi;
    if(condition)
    {
        sayHi = function()
        {
            console.log("Hi!");
        };
    }
    else
    {
        function()
        {
            console.log("Yo!");
        };
    }

    // 能够把函数作为其他函数的值返回
    function createComparisonFunction(properName)
    {
        return function(object2, object2)
        {
            var value1 = object1[properName];
            var value2 = object2[properName];
            if (value1 < value2)
            {
                return -1;;
            }
            else if (value1 > value2)
            {
                return 1;
            }
            else
            {
                return 0;
            }
        };
    }

    // 7.1 递归
        function factorial(num)
        {
            if (num <= 1)
            {
                return 1;
            }
            else
            {
                return num * factorial(num - 1);
            }
        }

        // 易出错
        var anotherFactorial = factorial;
        factorial = null;
        console.log(anotherFactorial(4));   // error

        // arguments.callee 指向正在执行的函数
        function factorial(num)
        {
            if (num <= 1)
            {
                return 1;
            }
            else
            {
                return num * arguments.callee(num - 1);
            }
        }

        // 严格模式下
        var factorial = (function f(num))
        {
            if (num <= 1)
            {
                return 1;
            }
            else
            {
                return num * f(num - 1);
            }
        }

    // 闭包
        // 指有权访问另一个函数作用域中的变量
        // 常见为函数内部创建另一个函数
        function createComparisonFunction(propertyName)
        {
            return function(object1, object2)
            {
                var value1 = object1[propertyName];
                var value2 = object2[propertyName];
                if (value1 < value2)
                {
                    return -1;
                }
                else if (value1 > value2)
                {
                    return 1;
                }
                else
                {
                    return 0;
                }
            };
        }
