// 8 BOM
    // 8.1 window 对象
        // 8.1.1 全局作用域
            var age = 29;
            function sayAge()
            {
                console.log(this.name);
            }
            console.log(window.age);    // 29
            sayAge();           // 29
            window.sayAge();    // 29

            // 全局作用域定义的变量和函数会被自动归在 window 对象名下
            // 定义全局变量和在 window 直接定义对象还是有区别
            var age = 29;   // var 添加至全局然后归在 window 下后 [[Configurable]] 特性值被设置为 false
            window.color = "red";

            // 在 IE < 9 时抛出错误， 在其他所有浏览器中都返回 false
            delete window.age;      //false，全局变量不可删除

            // 在 IE < 9 时抛出错误， 在其他所有浏览器中都返回 true
            delete window.color;    // true
            console.log(window.age);    // 29
            console.log(window.color);  // undefined

            // oldValue 未定义 访问会抛出错误
            var newValue = oldValue;    // oldValue is not defined

            // 属性查询不会抛出错误
            var newValue = window.oldValue; // newValue 值为 undefined
