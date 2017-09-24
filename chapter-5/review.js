// 此文件用于存放原来不懂
// 但通过后面章节的学习或者其他途径解决的知识点
// 用于记录易忘记和出错的知识点和勘误
    /* 5.2.1 检测数组 */
        /* 书中段落
             * instanceof 操作符的问题在于，它假定只有一个全局执行环境。如果网页中包含多个框架，那实
             * 际上就存在两个以上不同的全局执行环境，从而存在两个以上不同版本的 Array 构造函数。如果你从
             * 一个框架向另一个框架传入一个数组，那么传入的数组与在第二个框架中原生创建的数组分别具有各自
             * 不同的构造函数。
         * 书本没有给出实例，不能理解 框架 如何存在两个全局执行环境 如何传入数组 原生创建等 */
        // http://www.cnblogs.com/jcbo/p/6741809.html
        // 上述网页中就有一个例子是说遇到 instanceof 的坑
        // 我能理解的部分是全局环境是存在于浏览器打开的 html 里的 window ，
        // 多个框架是指有多个 html 页面，也就存在多个 window
        // 在一个网页里使用 instanceof 检测数组没有问题
        // 将数组传递到另一个网页的时候检测数组就会出现问题
        // 原因在于 Array 是挂在 window 下的一个属性
        // window 引用的地址不同，所以无法用另一个 window 下的数组 instanceof 指向本 window 的 Array 属性

    /* 5.2.2 转换方法 */
        /*完全不能理解，先跳过，可能需要在后面章节再回顾 */
        /* toLocaleString()的用法 */
        /* 可见http:/*www.cnblogs.com/newbob/p/4541145.html */
        /* 在本例中似乎只是用来代替 toString() */
        /* 下例中能理解的地方有： */
        /* person1和 2是对象，并且有属性，属性名称是一个（特定？）函数 */
        /* 但它们调用属性的方法有点奇怪 */
        /* people 数组通过函数的方式直接调用 person1里面的其中一类属性 */
        var person1 = {                     /*{toLocaleString: ƒ, toString: ƒ} */
            toLocaleString : function() {   /*在这里冒号之前的用法没见过，有无更多的简单例子 */
                return "Nikolaos";
            },
            toString : function() {
                return "Nicholas";
            }
        };
        console.log(person1.toString());      /*Nicholas */
        console.log(person1.toLocaleString());/*Nikolaos */

        var person2 = {
            toLocaleString : function() {
                return "Grigorios";
            },

            toString : function() {
                return "Greg";
            }
        }

        var people = [person1, person2];
        console.log(people);
        console.log(people.toString());         /*Nicholas,Greg */
        console.log(people.toLocaleString());   /*Nikolaos,Grigorios */

        //前面部分代码相当于
        var person1 = new Object();
        person1.someFunction = function(){return "I'm running function";};
        person1.otherFunction = function(){return "I'm running too";};

        person1.someFunction();     //"I'm running function"
        person1.otherFunction();    //"I'm running too"
        // O = {a : "b",} 是定义对象和属性的格式
        // 将属性 定义为 函数，也就是为对象定义了一个可执行的“方法”
        // 这部分应该在未来第六章学习

    /* 5.2.8 迭代方法 */
        /*只是不明白迭代这个词是什么意思，留存用于回顾时网上查询 */
        /* 迭代是程序中对一组指令（或一定步骤）的重复。
         * 它既可以被用作通用的术语（与“重复”同义），也可以用来描述一种特定形式的具有可变状态的重复。
         * 在第一种意义下，递归是迭代的一个例子，但是通常使用一种递归式的表达。比如用0!=1，n!=n*(n-1)!来表示阶乘。而迭代通常不是这样写的。
         * 而在第二种（更严格的）意义下，迭代描述了在指令式编程语言中使用的编程风格。与之形成对比的是递归，它更偏向于声明式的风格。
         */
    /* 5.3 Data类型 */
        /*下例中，new 的角色和作用是什么 */
        var someDate = Date(Date.parse("May 25, 2014"));    /*错误的写法，缺少 new */
        console.log(someDate);      /*返回当前时间，Sat Sep 16 2017 15:50:39 GMT+0800 (中国标准时间) */
        var someDate = new Date(Date.parse("May 25, 2014"));/*可以获得想要日期的正确的写法 */
        console.log(someDate);      /*Sun May 25 2014 00:00:00 GMT+0800 (中国标准时间) */
        //这里主要是对 new 运算符的运用不熟悉
        // new 运算符感性的认知是在创建引用类型值的时候有用
        // new 后面跟着的是构造函数 constructor
        /*名词解释，构造函数 constructor*/
        /* 构造方法是创建和初始化使用类创建的一个对象的一种特殊方法。 */
