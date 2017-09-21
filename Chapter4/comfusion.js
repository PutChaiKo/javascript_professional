/* 不懂的地方


    /* 4.3.1 标记清除 */
        /*我的理解是：给所有内存中的变量打标签，用到的去掉标签，然后隔一段时间销毁变量回收空间 */
        /*这样理解应该是不全面或不准确的。 */
        /*涉及到 进入环境 离开环境 部分不理解 */
        /*但标记清除这一部分有没有必要深入学习？ */
    /* 4.3.2 引用计数 */
        /* 还是对象和属性的问题 */
        /* 循环引用 */
        var objectName = new Object;    /* 这样声明一个变量是对象，对象为空 */
        console.log(objectName)；     /*Chrome的Console返回：{}，代表空对象 */

        objectName.element1 = new Object; /* 属性可以是空对象 */
        console.log(objectName)；/*Chrome的Console返回：{element1: {…}}，这花括号里的三点代表什么意思，还只是Chrome一个比较直观的表现形式？ */

        objectName = null;/*清空整个对象，书中说有利于内存回收，在实际开发中什么情况下会常用这个？ */
