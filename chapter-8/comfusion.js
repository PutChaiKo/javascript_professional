/* 不懂的地方 */
        // 8.3.2 注册处理程序
            // 这是啥？
    // 8.5 history 对象
        // 可以传入字符串跳转到最近的包含该字符串的网页
        history.go("wrox.com");     // 只能得到刷新
        history.go("nczonline.net");    // 只能得到刷新

        // length 属性
        if (history.length === 0) {
            console.log("用户打开的第一个网页");  // Chrome 里最小的数是 1
        }
