// 此文件用于存放原来不懂
// 但通过后面章节的学习或者其他途径解决的知识点
// 用于记录易忘记和出错的知识点和勘误
    /* 4.1.1 */
        /* 引用类型值是什么？ */
        var person = new Object();      /* 引用类型 */
        var name = "Nicholas";          /* 非引用类型,基本类型 */
        // 基本类型值是储存在栈中的简单数段，stack
        // 引用类型值，是储存在堆中的对象，储存在变量出的是一个指针，heap

    /* 4.2 执行环境 作用域 */
        var color = "blue";

        function changeColor()
        {
            if (color == "blue")
            {  //如果变量为某值
                color = "red";      //则将外部变量修改为 red
            } else {                //如果不为某值
                color = "blue";     //则将外部变量修改为 blue
            }
        }

        changeColor();

        console.log("Color is now " + color);
        /* 书中写道：“在这个简单的例子中，函数 changeColor()的作用域链包含两个对象：它自己的变量对象（其中定义着 arguments 对象）和全局环境的变量对象。”
         * 能理解函数内部能访问外部的变量
         * 但在上述例子里能直观看出的只有一个全局变量 color
         * 书中所提函数自己的变量对象（其中定义着argument对象）指的是什么。
         * 函数的“活动对象”指的是什么。
         */
        // argument 对象是在函数创建的时候一起被创建的特别变量
        // 是一个看似数组
        // 本质是一个对象
        // 活动对象是当前函数在运行的时候的一系列可用变量
        // 如函创建时传入的参数
        // 如果执行环境是函数，也就是调用一个函数
        // 函数的活动对象 将被作为作用域链开端的变量对象

        /* 4.2.1 延长作用域链 */
            function buildUrl()
            {
                var qs = "?debug=true";

                with(location)
                {             /*Location 对象是 Window 对象的一个部分 */
                    var url = href + qs;     /*此处 href引用的是 location.href */
                }
                return url;
            }

            buildUrl();     //运行一次函数
            /* 虽然书中有解释，但还是无法具体理解如何在函数外部访问内部的 url， */
            /* 如能画出该函数的作用域链图就最好了 */
            // location 对象是函数外部的 window 的一个部分
            // href 是一个属性，可以通过 location.href 调用
            // 用 with 方法可以将 location 的 所有属性和方法添加到作用域链的最前端
            // 可以不用.调用的方式进行调用
            // 将值赋值给函数内部声明的变量 url 从而可以 return 给函数本身


            var color = "yellow";

            function getColor()
            {
                var color = "red";          /*如何获取这个环境的变量值 "red"？ */
                function getColorInside()
                {
                    var color = "black";
                    function getColorInInside()
                    {
                        var color = "blue";
                        return color;
                    }
                    return getColorInInside();
                }
                return getColorInside();
            }

            console.log(getColor());        /*想让结果显示为"red" */

        /* 4.2.2 没有块级作用域 */
            /* 2.查询标识符 */
                /* 例子，如何绕过局部变量 */
                var color = "yellow";

                function getColor()
                {
                    var color = "red";      /*声明赋值局部变量 */
                    return window.color;    /*访问全局变量 */
                }

                console.log(getColor());    /*"yellow" */
                /* window.color;能理解是直接访问全局变量的一种方法 */
                /* 但假如一个函数有好多好多层，每层都声明赋值了同样的变量 */
                /* 我想访问上两级的变量该如何找到确定代替 window.的字符？ */
                /* 如下例 */
                var color = "yellow";

                function getColor()
                {
                    var color = "red";          /*如何获取这个环境的变量值 "red"？ */
                    function getColorInside()
                    {
                        var color = "black";
                        function getColorInInside()
                        {
                            var color = "blue";
                            return getColorInside.color;
                        }
                    }
                }

                console.log(getColor.color);        /*想让结果显示为"red" */
                /*或者说想这样做是没有实际用处的？ */
                /*容易在实际编程中导致混乱？调试困难？ */

                // 上述的描述说了一大堆，主要的问题点如何绕过作用域链访问其他函数内的变量的问题
                // 而且举例的函数也有问题
                // 这个知识点应该是 闭包
                // 将会在未来的章节中详细学习


    /* 4.3.2 引用计数 */
        /* 还是属性的问题,首先帮我看一下我在函数右边的注释是不是对的 */
        /* 循环引用 */
        function problem()
        {
            var objectA = new Object();
            var objectB = new Object();

            objectA.someOtherObject = objectB;/*将 objectB 赋值（引用）给对象的 objectA的 someOtherObject 属性 */
            objectB.anotherObject = objectA;  /*将 objectA 赋值（引用）给对象的 objectA的 someOtherObject 属性 */
        }
        /* IE9之前中COM对象引用导致的循环引用问题： */
        var element = document.getElementById("some_element");/*这里的 element也是一个对象吗？ */
        var myObject = new Object();                          /*这里声明了一个空对象 */
        myObject.element = element;                           /*属性引用 */
        element.someObject = myObject;                        /*属性引用 */

        /*上述例子可用以下方式手工断开连接 */
        myObject.element = null;
        element.someObject = null;

        /* 对象这个东西我貌似没有全面理解，本书后面会有更详细的介绍吗？ */
        /* 我理解的部分，变量相当于一个储物柜可以往里面装普通的东西（基本类型值：字符串什么的） */
        /* 而把函数声明为“对象”，就可以在储物柜（函数）里面创建很多格子（属性），然后在格子里装东西（基本类型值），或者在格子里再创建格子（对象） */
        /* 格子（属性）只有被装有“东西”的时候才会被创建，这个“东西”包括基本类型值和对象，包括格子（属性）里的对象是空的情况。 */
        /* 看到后面的章节可能可以更全面理解，届时将回来此处修改问题 */
        var objectName = new Object;    /*这样声明一个变量是对象 */
        console.log(objectName)；     /*Chrome的Console返回：{}，这个不是null，不是undefined，是“空对象”的意思吗？ */
            /*对象具有多个属性通过.调用 */
        objectName.element1 = new Object; /*属性可以是空对象 */
        console.log(objectName)；/*Chrome的Console返回：{element1: {…}}，这花括号里的三点代表什么意思，还只是Chrome一个比较直观的表现形式 */
        objectName.element2 = "字符串";/*一般是这样赋值至属性 */
        console.log(objectName)；/*{element1: {…}, element2: "字符串"} */
        objectName = null;/*清空整个储物柜（对象），有利于内存回收 */

        // 这个问题的关键是原来读到此章时不能理解对象的属性还能是对象，
        //还有就是对象可以是空对象，或者说“属性为空”，属性却不能是空属性
