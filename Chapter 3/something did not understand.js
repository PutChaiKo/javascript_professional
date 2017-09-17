// 不懂的地方
// 3.4.7 object
// 3.5.2 位操作符
    // 有无深入学习的必要
// 3.5.6 关系操作符
    toLowerCase("A");   //报错
    "A".toLowerCase()   //输出“a”
    // 何时适用于在括号内写东西？有无简单规律可循
// 3.6.1 if语句
    if (condition) statement1 else if (condition2) statement2 else statement3
    // 书中推荐为：
        if (i > 25) {
            alert("Greater than 25.");
        } else if (i < 0) {
            alert("Less than 0.")
        } else {
            alert("Between 0 and 25, inclusive.")
        }

    // 我见到更直观的写法为
        if (i > 25) {
            alert("Greater than 25.");
        }
        else if (i < 0) {
            alert("Less than 0.")
        }
        else {
            alert("Between 0 and 25, inclusive.")
        }

    //或是w3school.com的写法
        if (i > 25)
            {
            alert("Greater than 25.");
            }
        else if (i < 0)
            {
            alert("Less than 0.")
            }
        else
            {
            alert("Between 0 and 25, inclusive.")
            }
    // 在实际应用中会用哪种写法比较多？

// 3.6.5 for-in
// 3.6.6 label
// 3.6.8 with
    var qs = location.search.substring(1);
    var hostName = location.hostname;
    var url = location.href;
    //作用域是啥
// 3.7 函数
    //return 返回值 是否只适用于进行数值操作的函数里面
    //retune 相对于让 function() 等于某个数值，对么
    //为求统一和方便，return 在函数中是不是没有必要使用
    //或者说该何时何地使用 retune
