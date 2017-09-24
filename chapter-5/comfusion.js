/* 不懂的地方 */

    /* 5.3 Data类型 */
        /*名词解释，构造函数 constructor*/
        /* 网络上的解释说：构造方法是创建和初始化使用类创建的一个对象的一种特殊方法。
         * 但是由于本书不使用 类 calss 这个说法，所以也不懂网络的解释
         * 只知道 Object() Numner() Array() 都是构造函数
         */
    /* 5.4 RegExp 类型 */
        /*正则表达式的转义及双重转义在什么时候用，有例子么？ */
        /* 本书着重介绍了EC3，RegExp在EC5、EC6中貌似有不少的修改？ */
    /* 5.4.1 RegExp实例属性 */
        var pattern1 = /\[bc\]at/i;
        console.log(pattern1.test("cat"));     /*false,Chrome返回 */
        console.log(pattern1.test("\[bc\]at")); /*true,转义不起作用 */
        console.log(pattern1.test("[bc\]at"));  /*true,不能理解 */
    /* 5.4.2 RegExp实例方法 */
        /*书中提到 */
        /*IE 的 JS在非全局模式下，lastIndex属性每次也会发生变化 */
        /*不知道EC5、EC6有无改善 */

        /*下例中转义字符可以工作，去掉转义字符反而出问题 */
        var text = "000-00-0000";
        var pattern = /\d{3}-\d{2}-\d{4}/;

        if (pattern.test(text)){
            console.log("The pattern was matched");
        } else {
            console.log("wrong");
        }       /*The pattern was matched */

    /* 5.4.3 RegExp 构造函数属性 */
        var text = "this has been a short summer";
        var pattern = /(.)hort/g;

        if (pattern.test(text)){
            console.log(RegExp.multiline);      /*Chrome返回 undefined，与书中 false不同 */
        }

    /* 5.5.5 函数属性和方法 */
        /* apply() call() 方法并不很理解，这个是常用的方法吗 */

        /* 下例中 bind()的作用域是传给了哪个函数？ */
        window.color = "red";
        var o = { color: "blue" };

        function sayColor(){
            console.log(this.color);
        }
        var objectSayColor = sayColor.bind(o);  /*传给 sayColor 还是objectSayColor */
        objectSayColor();       /*blue */
        // 上述函数应该相当于
        function objectSayColor(){
            color: "blue";
            console.log(this.color);
        }
        // objectSayColor 已经成为了一个新函数
    /* 5.6 基本包装类型 */
        /* 工厂方法是一个需要学习的知识点吗？简单看了一下 wiki，有点难理解，而且没有 JS的示例代码， */
        /* 书中应该只是引用了工厂方法的概念 */
