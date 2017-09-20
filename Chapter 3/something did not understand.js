/* 这个文件用于存放不懂的知识点 */
    /* 注释约定 */
    /* 问题的注释用这个 */
    // 回答的注释用这个
    /* 如答案里输入不需注释的代码，则在代码上一行输入//作为标记 */
/* 3.4.7 object */
/* 3.5.2 位操作符 */
    /* 有无深入学习的必要 */

/* 3.6.1 if语句 */
    if (condition) statement1 else if (condition2) statement2 else statement3
    /* 书中推荐为： */
        if (i > 25) {
            alert("Greater than 25.");
        } else if (i < 0) {
            alert("Less than 0.")
        } else {
            alert("Between 0 and 25, inclusive.")
        }

    /* 我见到更直观的写法为 */
        if (i > 25) {
            alert("Greater than 25.");
        }
        else if (i < 0) {
            alert("Less than 0.")
        }
        else {
            alert("Between 0 and 25, inclusive.")
        }

    /*或是w3school.com的写法 */
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
    /* 在实际应用中会用哪种写法比较多？ */
    /* 多输几次发现书中的格式在函数原理上更直观 */


/* 3.6.6 label */
    /* 这个语句有用么 */
/* 3.7 函数 */
    /* 书中所说该做何理解
     *
     * 推荐的做法是要么让函数始终都返回一个值
     * 要么永远都不要返回值。
     * 否则，如果函数有时候返回值，有时候有不返回值，
     * 会给调试代码带来不便。
     *
     * 是不是意味着每新建一个函数就要用 return; 作为函数体的结尾比较合适？
     */
