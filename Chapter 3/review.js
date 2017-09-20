// 此文件用于存放原来不懂
// 但通过后面章节的学习或者其他途径解决的知识点
// 用于记录和排错
/* 3.5.6 关系操作符 */
    toLowerCase("A");   /* 报错 */
    "A".toLowerCase()   /* 输出“a” */
    /* 何时适用于在括号内写东西？有无简单规律可循 */
    // toLowerCase() 是一个方法
    // 方法的括号里应该是输入方法特有的参数
    // 括号里放字符串的是函数
    // 字符串作为参数传递到函数内
    /* 3.6.5 for-in */
        /* 用于枚举对象的属性 */
    /* 3.6.8 with */
        var qs = location.search.substring(1);
        //声明变量 qs 为对 location 对象的属性 search 的取值
        //
        var hostName = location.hostname;
        // 当前 URL 的主机名。
        var url = location.href;
        // 完整的 URL
        /*作用域是啥 */
        // 作用域是作用域链的一个部分
        // 作用是控制函数可以调用变量和函数的权限
        with(location) {
            var qs = search.substring;
            var hostName = hostname;
            var url = href;
        }
        // with语句主要是用于减少对同一个对象属性进行处理的工作量
        // 不推荐使用
