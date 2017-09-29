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
        // 7.2.2 关于 This 对象
            var name = "The Window";
            var object =
            {
                name : "My Object",
                getNameFunc : function()
                {
                    return function()
                    {
                        return this.name;
                    };
                }
            };
            console.log(object.getNameFunc()());    // The Window

            // 解决方案
            var name = "The Window";
            var object =
            {
                name : "My Object",
                getNameFunc : function()
                {
                    var that = this;
                    return function()
                    {
                        return that.name;
                    };
                }
            };
            console.log(object.getNameFunc()());

            // 特殊情况
            var name = "The Window";
            var object =
            {
                name : "My Object",
                getName : function()
                {
                    return this.name;   // 只是简单地返回了函数所在对象的值
                }
            };
            object.getName();
            (object.getName)();
            (object.getName = object.getName)();    // The Window
        // 7.2.3 内存泄露
            // IE9之前的版本垃圾回收有问题
            // 如果闭包作用域保存着一个 HTML 元素，则该元素无法被销毁
            function assignHandler()
            {
                var element = document.getElementById("someElement");
                element.onclick = function()    // 这里是一个闭包
                {
                    console.log(element.id);    // 这里引用了 HTML 元素
                };
            }

            // 改写
            var element = document.getElementById("someElement");   // 将 element 指针指向 DOM 对象
            var id = element.id;    // 将 element 的副本保存至变量 id 中
            element.onclick = function()    // 创建闭包
            {
                console.log(id);    // 闭包会引用包含函数的整个活动对象
            };
            element = null;     // 解除对 DOM 的引用

    // 7.3 模仿块级的作用域
        function outputNumbers(count)
        {
            for (var i = 0; i < count; i++)
            {
                console.log(i);
            }
            console.log(i); // 计数
        }

        // 即使出现错误声明
        function outputNumbers(count)
        {
            for (var i = 0; i < count; i++) {
                console.log(i);
            }
            var i;      // 重新声明变量
            console.log(i);     // 计数
        }

        // 模仿块级作用域语法
        (function()     // 定义匿名函数
        {
            // 这里是块级作用域
        })();   // 调用函数

        // 例
        var count = 5;          // 定义变量
        outputNumbers(count);   // 立刻调用
        outputNumbers(5);       // 等同于上式

        // 例
        var someFunction = function()   // 定义函数
        {
            // 这里是块级作用域
        }；
        someFunction();                 // 立刻调用

        var function()
        {
            // 这里是块级作用域
        }();    // 出错，因为函数声明后不能跟圆括号

        // 将函数声明转换为表达式
        (function()
        {
            // 这里是块级作用域
        })();

        // 私有作用域的应用
        function outputNumbers(count)
        {
            (function()
            {
                for (var i = 0; i < count; i++) {
                    console.log(i);
                }
            })();
            console.log(i); // 导致错误
        }

        // 不会往全局变量添加变量
        (function()
        {
            var now = new Date();
            if (now.getMonth() == 0 && now.getDate() == 1)
            {
                alert("Happy new year!");
            }
        })();
    // 7.4 私有变量
        // 私有变量包括函数的参数、局部变量和在函数内部定义的其他函数
        function add(num1, num2)    // 此函数中 num1 num2 sum 是私有变量
        {
            var sum = num1 + num2;
            return sum;
        }

        // 特权方法 有权访问私有变量和私有函数的公有方法
        // 构造函数定义特权方法
        function MyObject()
        {
            // 私有变量和私有函数
            var privateVariable = 10;
            function privateFunction()
            {
                return false;
            }

            // 特权方法
            this.publicMethod = function()
            {
                privateVariable++;
                return privateFunction();
            }
        }

        // 特权方法可以隐藏那些不应该直接修改的数据
        function Person(name)
        {
            this.getName = function()   // 用闭包方法可以访问函数的私有参数
            {
                return name;
            };
            this.setName = function(value)
            {
                name = value;
            };
        }
        var person = new Person("Nicholas");
        console.log(person.getName());
        person.setName("Greg");
        console.log(person.getName());

        var person2 = new Person("Adm")     // 新创建的变量指向的原型与之前的不同
        console.log(person.getName());      // Greg
        console.log(person2.getName());     // Adm

        // 7.4.1 静态私有变量
            (function(){

                // 私有变量和私有函数
                var privateVariable = 10;
                function privateFunction()
                {
                    return false;
                }

                // 构造函数
                MyObject = function(){};        // 缺少 var 函数表达式创建全局变量

                // 公有/特权方法
                MyObject.prototype.publicMethod = function()
                {
                    privateVariable++;
                    return privateFunction();
                };
            })();

            // 例
            (function()
            {
                var name = "";
                Person = function(value)
                {
                    name = value;
                };
                Person.prototype.getName = function()
                {
                    return name;
                };
                Person.prototype.setName = function(value)
                {
                    name = value;
                };
            })();

            var person1 = new Person("Nicholas");
            console.log(person1.getName());     // Nicholas
            person1.setName("Greg");
            console.log(person1.getName());     // Greg

            var person2 = new Person("Michael");    // 新创建的变量指向的原型与之前相同，利于共享变量、方法和参数
            console.log(person1.getName());     // Michael
            console.log(person2.getName());     // Michael

        // 7.4.2 模块模式
            // 一种为单例创建室友变量和特权方法的模式
            // 下面是单例
            var singleton =
            {
                name : value,
                method : function()
                {
                    // 这里是方法代码
                }
            };

            // 模块模式通过添加私有变量和特权方法增强单例
            var singleton = function()
            {
                // 私有变量和私有函数
                var privateVariable = 10;   // 外部无法访问，但保存在函数内部
                function privateFunction()
                {
                    return false;
                }
                // 特权/公有方法
                return {    // 将这个对象返回到函数本身
                    publicProperty : true,      // 可在外部访问的函数的属性
                    publicMethod : function()   // 可在外部访问的函数公有方法，而且因为存在闭包，可以访问函数的私有变量和函数
                    {
                        privateVariable++;  // 私有变量加1，并保存在函数里
                        return privateFunction();   // 运行一次私有函数，并将结果 false 返回到公有方法里
                    }
                };
            }();

            console.log(singleton.publicMethod());      // false，同时函数保存的 privateVariable 值变为11

            //
            var application = function()
            {
                // 私有变量和函数
                var components = [];    // 声明一个私有数组

                // 初始化
                components.push(new BaseComponent());   // 为其添加新实例

                // 公共
                return {
                    getComponentCount : function()      // 访问私有数组，获取已注册的组件数目
                    {
                        return component.length;
                    },
                     registerComponent : function()     // 为数组传入添加新实例
                    {
                        if (typeof component == "object")   // 检测其类型是否为对象
                        {
                            components.push(component);
                        }
                    }
                };
            }();

        // 7.4.3 增强的模块模式
            var singlenton = function()
            {
                // 私有变量和私有函数
                var privateVariable = 10;
                function privateFunction()
                {
                    return false;
                }

                // 创建对象
                var object = new CustomType();

                // 添加特权/公有属性和方法
                object.publicProperty = true;
                object.publicMethos = function()
                {
                    return privateFunction();
                };

                // 返回这个对象
                return object;
            }();

            // 修改前述例子
            var application = function()
            {
                // 私有变量和方法
                var components = [];

                // 初始化
                components.push(new BaseComponent());

                // 创建 application 的一个局部副本
                var app = new BaseComponent();

                // 公共接口
                app.getComponentcount = function()
                {
                    return components.length;
                };
                app.registerComponent = function(component)
                {
                    if (typeof component == "object")
                    {
                        components.push(component);
                    }
                };

                // 返回这个副本
                return app;
            }();

            
