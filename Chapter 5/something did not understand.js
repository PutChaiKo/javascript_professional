// 不懂的地方
    // 5.2.1 检测数组
        // 书中段落
            // instanceof 操作符的问题在于，它假定只有一个全局执行环境。如果网页中包含多个框架，那实
            // 际上就存在两个以上不同的全局执行环境，从而存在两个以上不同版本的 Array 构造函数。如果你从
            // 一个框架向另一个框架传入一个数组，那么传入的数组与在第二个框架中原生创建的数组分别具有各自
            // 不同的构造函数。
        // 书本没有给出实例，不能理解 框架 如何存在两个全局执行环境 如何传入数组 原生创建等
    // 5.2.2 转换方法
        //完全不能理解，先跳过，可能需要在后面章节再回顾
        // toLocaleString()的用法
        // 可见http://www.cnblogs.com/newbob/p/4541145.html
        // 在本例中似乎只是用来代替 toString()
        // 下例中能理解的地方有：
        // person1和 2是对象，并且有属性，属性名称是一个（特定？）函数
        // 但它们调用属性的方法有点奇怪
        // people数组通过函数的方式直接调用 person1里面的其中一类属性
        var person1 = {                     //{toLocaleString: ƒ, toString: ƒ}
            toLocaleString : function() {   //在这里冒号之前的用法没见过，有无更多的简单例子
                return "Nikolaos";
            },
            toString : function() {
                return "Nicholas";
            }
        };
        console.log(person1.toString());      //Nicholas
        console.log(person1.toLocaleString());//Nikolaos

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
        console.log(people.toString());         //Nicholas,Greg
        console.log(people.toLocaleString());   //Nikolaos,Grigorios
    // 5.2.8 迭代方法
        //只是不明白迭代这个词是什么意思，留存用于回顾时网上查询
    // 5.3 Data类型
        //下例中，new 的角色和作用是什么
        var someDate = Date(Date.parse("May 25, 2014"));    //错误的写法，缺少 new
        console.log(someDate);      //返回当前时间，Sat Sep 16 2017 15:50:39 GMT+0800 (中国标准时间)
        var someDate = new Date(Date.parse("May 25, 2014"));//可以获得想要日期的正确的写法
        console.log(someDate);      //Sun May 25 2014 00:00:00 GMT+0800 (中国标准时间)

        //名词解释，构造函数

    // 5.4 RegExp 类型
        var expression = / pattern / flags ;
        //在语法里，pattern（模式）里应该是正则表达式
        var pattern3 = /.at/gi;
        // 声明一个变量为引用类型RegExp，并指向一条正则表达式。
        // 该表达式由模式 .at 正则表达式，表示匹配at结尾的三字符
        // gi指全局模式下不区分大写
        // 试着传入一个数据
