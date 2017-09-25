// 此文件用于存放原来不懂
// 但通过后面章节的学习或者其他途径解决的知识点
// 用于记录易忘记和出错的知识点和勘误
    // 6.2.3
        // 4.原型的动态性
            // 可随时为原型添加属性和方法
            var friend = new Person();

            Person.prototype.sayHi = function()
            {
                console.log("hi");
            };

            friend.sayHi();     // hi

            // 但重写整个原型对象，切断构造函数和最初原型的联系
            function Person(){}

            var friend = new Person();

            Person.prototype =
            {
                constructor : Person,
                name : "Nicholas",
                age : 29,
                job : "Software Engineer",
                sayName : function()
                {
                    console.log(this.name);
                }
            };

            friend.sayName();   // error

        // 5.原生对象的原型
            // 原生的引用类型采用一样的模式创建
            // 通过原生对象的原型，不仅可以取得默认的所有方法，还可以添加方法
            String.prototype.startsWhit = function(text)
            {
                return this.indexOf(text) == 0;     //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
            }

            var msg = "Hello world";
            console.log(msg.startsWhit("Hello"));   // true
                // 自定义对象的完整格式是这样的
                var msg1 = String("Hello world");
                msg1.startsWhit("HELLO");   // false
