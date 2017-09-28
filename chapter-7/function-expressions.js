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

    // 7.2 闭包
        // 指有权访问另一个函数作用域中的变量
        // 常见为函数内部创建另一个函数
        function createComparisonFunction(propertyName)     // 传入属性对象的属性名的字符串
        {
            return function(object1, object2)   // 传入相邻的两个属性对象
            {
                var value1 = object1[propertyName];     // 赋值，取的是函数外部的外部对象的属性的属性
                var value2 = object2[propertyName];     // 取值赋值
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

        // 作用域链
         function compare(value1, value2)
         {
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
         }

         var result = compare(5, 10);

         // 闭包
         //  创建函数
         var compare = createComparisonFunction("name");

         //  调用函数
         var result = compare({name : "Nicholas"}, {name : "Greg"});

        //  解除对匿名函数的引用（以便释放内存）
        compare = null;

        //  7.2.1 闭包与变量
        function createComparisonFunction()
        {
            var result = new Array();
            for (var i = 0; i < 10; i++)    // i 保存在 createComparisonFunction 的作用域中
            {                               //
                result[i] = function()
                {
                    return i;
                };
            }
            return result;      // for 循环生成一个函数数组并返回至 createComparisonFunction
        }

        var iFunc = createComparisonFunction();
        console.log(iFunc);     // [ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ]
        var iFuncNum = createComparisonFunction()[0];   // 将第一个函数取出
        console.log(iFuncNum);  // 是匿名函数 function(){return i;}
        console.log(iFuncNum());    // 10，将函数运行，i 存在于被销毁的函数 createComparisonFunction 的活动对象里

        // 强行让闭包函数符合预期
        function createFunction()
        {
            var result = [];

            for (var i = 0; i < 10; i++)
            {
                result[i] = function(num)
                {
                    return function()
                    {
                        return num;
                    };
                }(i);
            }
            return result;
        }
