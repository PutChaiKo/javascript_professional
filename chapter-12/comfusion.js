/* 不懂的地方 */
        // 12.1.2 其他方面的变化
        // DOM Level 3 为 DOM 节点 添加额外数据的引入了新方法
        // setUserData() 方法会将数据制定给节点

        document.body.setUserData("name", "Nicholas", function(){});
        var value = document.body.getUserData("name");

        //以上代码无法在 chrome 运行
