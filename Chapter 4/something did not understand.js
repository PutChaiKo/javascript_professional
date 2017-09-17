// 不懂的地方
    // 4.1.1
        // 引用类型值是什么？
        var person = new Object();      // 引用类型
        var name = "Nicholas";          // 非引用类型,基本类型
    // 4.2 执行环境 作用域
        var color = "blue";

        function changeColor(){
            if (color == "blue") {
                color = "red";
            } else {
                color = "blue";
            }
        }

        changeColor();

        console.log("Color is now " + color);
        // 书中写道：“在这个简单的例子中，函数 changeColor()的作用域链包含两个对象：它自己的变量对象（其中定义着 arguments 对象）和全局环境的变量对象。可”
        // 能理解函数内部能访问外部的变量
        // 但在上述例子里能直观看出的只有一个全局变量 color
        // 书中所提函数自己的变量对象（其中定义着argument对象）指的是什么。
        // 函数的“活动对象”指的是什么。
    // 4.2.1 延长作用域链
        function buildUrl() {
            var qs = "?debug=true";

            with(location){             //Location 对象是 Window 对象的一个部分
                var url = href +qs;     //此处 href引用的是 location.href
            }
            return url;
        }
        // 虽然书中有解释，但还是无法具体理解如何在函数外部访问内部的 url，
        // 如能画出该函数的作用域链图就最好了
    // 4.2.2 没有块级作用域
        // 2.查询标识符
            // 例子，如何绕过局部变量
            var color = "yellow";

            function getColor() {
                var color = "red";      //声明赋值局部变量
                return window.color;    //访问全局变量
            }

            console.log(getColor());    //"yellow"
            // window.color;能理解是直接访问全局变量的一种方法
            // 但假如一个函数有好多好多层，每层都声明赋值了同样的变量
            // 我想访问上两级的变量该如何找到确定代替 window.的字符？
            // 如下例
            var color = "yellow";

            function getColor() {
                var color = "red";          //如何获取这个环境的变量值 "red"？
                function getColorInside(){
                    var color = "black";
                    function getColorInInside(){
                        var color = "blue";
                        return color;
                    }
                    return getColorInInside();
                }
                return getColorInside();
            }

            console.log(getColor());        //想让结果显示为"red"
            //或者说想这样做是没有实际用处的？
            //容易在实际编程中导致混乱？调试困难？
    // 4.3.1 标记清除
        //我的理解是：给所有内存中的变量打标签，用到的去掉标签，然后隔一段时间销毁变量回收空间
        //这样理解应该是不全面或不准确的。
        //涉及到 进入环境 离开环境 部分不理解
        //但标记清除这一部分有没有必要深入学习？
    // 4.3.2 引用计数
        // 还是属性的问题,首先帮我看一下我在函数右边的注释是不是对的
        // 循环引用
        function problem(){
            var objectA = new Object();
            var objectB = new Object();

            objectA.someOtherObject = objectB;//将 objectB 赋值（引用）给对象的objectA的someOtherObject属性
            objectB.anotherObject = objectA;  //将 objectA 赋值（引用）给对象的objectA的someOtherObject属性
        }
        // IE9之前中COM对象引用导致的循环引用问题：
        var element = document.getElementById("some_element");//这里的 element也是一个对象吗？
        var myObject = new Object();                          //这里声明了一个空对象
        myObject.element = element;                           //属性引用
        element.someObject = myObject;                        //属性引用

        //上述例子可用以下方式手工断开连接
        myObject.element = null;
        element.someObject = null;

        // 对象这个东西我貌似没有全面理解，本书后面会有更详细的介绍吗？
        // 我理解的部分，变量相当于一个储物柜可以往里面装普通的东西（基本类型值：字符串什么的）
        // 而把函数声明为“对象”，就可以在储物柜（函数）里面创建很多格子（属性），然后在格子里装东西（基本类型值），或者在格子里再创建格子（对象）
        // 格子（属性）只有被装有“东西”的时候才会被创建，这个“东西”包括基本类型值和对象，包括格子（属性）里的对象是空的情况。
        // 看到后面的章节可能可以更全面理解，届时将回来此处修改问题
        var objectName = new Object;    //这样声明一个变量是对象
        console.log(objectName)；     //Chrome的Console返回：{}，这个不是null，不是undefined，是“空对象”的意思吗？
            //对象具有多个属性通过.调用
        objectName.element1 = new Object; //属性可以是空对象
        console.log(objectName)；//Chrome的Console返回：{element1: {…}}，这花括号里的三点代表什么意思，还只是Chrome一个比较直观的表现形式
        objectName.element2 = "字符串";//一般是这样赋值至属性
        console.log(objectName)；//{element1: {…}, element2: "字符串"}
        objectName = null;//清空整个储物柜（对象），有利于内存回收
