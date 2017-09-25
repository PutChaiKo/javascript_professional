// 6.面向对象的程序设计
    // 6.1 理解对象
        var person = new Object();
        person.name = "Nicholas";
        person.name = 19;
        person.job = "Software Engineer";

        person.sayName = function()
        {
            console.log(this.name);
        };

        // 上述函数更常用的创建方法是对象字面量语法
        var person =
        {
            name: "Nicholas",
            age: 29,
            job: "Software Engineer",

            sayName: function()
            {
                console.log(this.name);
            }
        };

        // 6.1.1 属性类型
            // EC5定义了特性（attribute）用于描述属性（property ）的特征

            // 1.数据属性
                // 普通对象
                var person =    // [[Value]]特性被设置为“Nicholas”
                {
                    name: "Nicholas"    //创建 name 属性，指定值为"Nicholas"
                };

                // 修改对象特征值为只读
                var person =    //创建一个空对象
                {

                };
                Object.defineProperty(person, "name", { // 属性所在的对象、属性名、描述符对象
                    writable: false,    // 属性的值，设置为 false 只读，默认值 true
                    value: "Nicholas"   // 属性的数据值
                });

                console.log(person.name);   // Nicholas
                person.name = "Greg";       // 尝试修改对象属性的值
                console.log(person.name);   // Nicholas

                // 修改特性为不可配置属性
                var person =
                {

                };
                Object.defineProperty(person, "name", {
                    configurable: false,    // 禁止从对象中删除属性
                    value: "Nicholas"       // 属性的数据值
                });

                console.log(person.name);
                delete person.name;     // 尝试删除该属性
                console.log(person.name);   // 删除失败
                person.age = 28;        // 普通方法新加一个属性并赋值
                console.log(person);
                delete person.age;      // 尝试删除
                console.log(person);    // 可以删除

                // 特性修改为不可配置后不能修改回可配置
                var person =
                {

                };
                Object.defineProperty(person, "name", {
                    configurable: false,
                    value: "Nicholas"
                });

                Object.defineProperty(person, "name", {
                    configurable: true,
                    value: "Nicholas"
                });    // Cannot redefine property: name， 抛出错误

            // 2.访问器属性
                var book =
                {
                    _year: 2004,    //下划线表示该方法只能通过对象方法访问
                    edition: 1  // 版本 1
                };

                Object.defineProperty(book, "year", {
                    get: function() // getter 函数
                    {
                        return this._year;  // 返回 _year 的值
                    },
                    set: function(newValue) // setter函数
                    {
                        if (newValue > 2004)    //通过计算确定正确的版本
                        {
                            this._year = newValue;  // 修改 _year 的值
                            this.edition += newValue - 2004;    // 修改版本
                        }
                    }
                });

                book.year = 2005;   // 设置一个属性的值会导致其他属性发生变化
                console.log(book.edition);  // 2

                // 旧版浏览器有非标准实现方法
                // 不支持 Object.defineProperty() 方法的浏览器不能修改

        // 6.1.2 定义多个属性
            // ES5 定义了一个方法 Object.defineProperties()
            var book =
            {

            };

            Object.defineProperties(book, {
                _year:
                {
                    value: 2004
                },

                edition:
                 {
                    value: 1
                },

                year:
                {
                    get: function()
                    {
                        return this._year;
                    },

                    set: function(newValue)
                    {
                        if (newValue > 2004)
                        {
                            this._year = newValue;
                            this.edition += newValue -2004;
                        }
                    }
                }
            });
            // 该函数定义了，两个数据属性
            // 与上述函数相同，不过是在同一是将创建的

        // 6.1.3 读取属性的特性
            var book =
            {

            };

            Object.defineProperties(book, {
                _year:
                {
                    value: 2004
                },

                edition:
                {
                    value: 1
                },

                year:
                {
                    get: function()
                    {
                        return this._year;
                    },

                    set: function(newValue)
                    {
                        if (newValue > 2004)
                        {
                            this._year = newValue;
                            this.edition += newValue - 2004;
                        }
                    }
                }
            });

            // getOwnPropertyDescriptor() 方法接受两个参数，属性所在对象及要读取的描述符的属性名称
            // 对于数据属性 _year 来说
            var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
            console.log(descriptor.value);  // 2004，value为最初值
            console.log(descriptor.configurable);   // false，
            console.log(typeof descriptor.get); // "undefine"

            // 对于访问器属性 year 来说
            var descriptor = Object.getOwnPropertyDescriptor(book, "year");
            console.log(descriptor.value);  // "undefine"
            console.log(descriptor.enumerable);  // false
            console.log(typeof descriptor.get); // "function"

    // 6.2 创建对象
        // 6.2.1 工厂模式
            function createPerson (name, age, job)
            {
                var o = new Object();
                o.name = name;
                o.age = age;
                o.job = job;
                o.sayName = function()
                {
                    console.log(this.name);
                };
                return o;
            }

            var person1 = createPerson("Nicholas", 29, "Software Engineer");
            var person2 = createPerson("Greg", 27 "Doctor");

        // 6.2.2 构造函数模式
            function Person(name, age, job)     // 构造函数以大写字母首写以示区分
            {
                this.name = name;
                this.age = age;
                this.job = job;
                this.sayName = function()
                {
                    console.log(this.name);
                };
            }

            var person1 = new Person("Nicholas", 29, "Software Engineer");
            var person2 = new Person("Greg", 27, "Doctor");

            // 两个对象都有构造函数属性
            console.log(person1.constructor == Person);      // true
            console.log(person2.constructor == Person);      // true

            // instanceof 操作符检测
            console.log(person1 instanceof Object); // true
            console.log(person1 instanceof Person); // true
            console.log(person2 instanceof Object); // true
            console.log(person2 instanceof Person); // true

            // 1. 将构造函数当作函数
                // 构造函数用法
                var person = new Person("Nicholas", 29, "Software Engineer");
                person.sayName();   // Nicholas
                // 作为普通函数调用
                Person("Greg", 27, "Doctor");
                window.sayName();
                // 在另一对象作用域调用
                var o = {};
                Person.call(o, "Kristen", 25, "Nurse");
                o.sayName();    // Kristen
            // 2.构造函数的问题
                // 每个方法都要在每个实例创建一遍
                console.log(person1.sayName === person2.sayName);   // false
                // 可将函数定义转移到外部
                function Person(name, age, job)
                {
                    this.name = name;
                    this,age = age;
                    this.job = job;
                    this.sayName = sayName;
                }

                function sayName()
                {
                    console.log(this.name);
                }

                var person1 = new Person("Nicholas", 29, "Software Engineer");
                var person2 = new Person("Greg", 27, "Doctor");

        // 6.2.3 原型模式
            // 原型属性 prototype
            function Person(){}
            Person.prototype.name = "Nicholas";
            Person.prototype.age = 29;
            Person.prototype.job = "Software Engineer";
            Person.prototype.sayName = function()
            {
                console.log(this.name);
            };

            var person1 = new Person();
            person1.sayName();

            var person2 = new Person();
            person2.sayName();

            console.log(person1.sayName === person2.sayName);

            // 1.理解原型对象
                // isPrototypeOf() 确定对象之间指针指向
                console.log(Person.prototype.isPrototypeOf(person1));   // true
                console.log(Person.prototype.isPrototypeOf(person2));   // true

                // EC5 Object.getPrototypeOf() 新方法
                console.log(Object.getPrototypeOf(person1) === Person.prototype); // true
                console.log(Object.getPrototypeOf(person1).name);   // "Nicholas"

                // 可以访问但不能重写原型的值
                function Person(){}
                    Person.prototype.name = "Nicholas";
                    Person.prototype.age = 29;
                    Person.prototype.job = "Software Engineer";
                    Person.prototype.sayName = function()
                    {
                        console.log(this.name);
                    };

                var person1 = new Person();
                var person2 = new Person();

                person1.name = "Greg";
                console.log(person1.name);  // "Greg"
                console.log(person2.name);  // "Nicholas"

                // delete 操作法可以删除实例属性，访问原型属性
                delete person1.name;
                console.log(person1.name);  // "Nicholas"

                // hasOwnProperty() 方法检测属性和存在于实例或原型
                function Person(){}
                    Person.prototype.name = "Nicholas";
                    Person.prototype.age = 29;
                    Person.prototype.job = "Software Engineer";
                    Person.prototype.sayName = function()
                    {
                        console.log(this.name);
                    };

                var person1 = new Person();
                var person2 = new Person();

                console.log(person1.hasOwnProperty("name"));    // false

                person1.name = "Greg";
                console.log(person1.name);      // "Greg"
                console.log(person1.hasOwnProperty("name"));    // true

                console.log(person2.name);      // "Nicholas"
                console.log(person2.hasOwnProperty("name"));    // false

                delete person1.name;
                console.log(person1.name);      // "Nicholas"
                console.log(person1.hasOwnProperty("name"));    // false

            // 2.原型与 in 操作符
                function Person(){}
                Person.prototype.name = "Nicholas";
                Person.prototype.age = 29;
                Person.prototype.job = "Software Engineer";
                Person.prototype.sayName = function()
                {
                    console.log(this.name);
                };

                var person1 = new Person();
                var person2 = new Person();

                console.log(person1.hasOwnProperty("name"));    // false
                console.log("name" in person1);     // true

                person1.name = "Greg";
                console.log(person1.name);  // Greg
                console.log(person1.hasOwnProperty("name"));    // true
                console.log("name" in person1);     // true

                console.log(person2.name);  // Nicholas
                console.log(person2.hasOwnProperty("name"));    // false
                console.log("name" in person2);     // true

                delete person1.name;
                console.log(person1.name);  // Nicholas
                console.log(person1.hasOwnProperty("name"));    // false
                console.log("name" in person1);     // true
                // 只要能访问到 name 属性 in 操作符就会返回 true
                // hasOwnProperty() 只要属性存在于实例上时才会返回 true

                // 可根据上述原理定义函数
                function hasPrototypeProperty(object, name)     // 传入对象名与字符串形式属性名
                {
                    return !object.hasOwnProperty(name) && (name in object);
                }   // 函数返回 true 即可证明属性是存在于原型之中

                // 例子
                function Person(){}
                Person.prototype.name = "Nicholas";
                Person.prototype.age = 29;
                Person.prototype.job = "Software Engineer";
                Person.prototype.sayName = function()
                {
                    console.log(this.name);
                };

                var person = new Person();
                console.log(hasPrototypeProperty(person, "name"));  // true

                person.name = "Greg";
                console.log(hasPrototypeProperty(person, "name"));  // false

                // for-in 循环 枚举属性
                var o =
                {
                    toString : function()
                    {
                        return "My Object"
                    }
                };

                for (var prop in o)
                {
                    if (prop === "toString")
                    {
                        console.log("Found toString");      // 在 IE8 及更早版本不会显示
                    }
                }

                // Object.key() 方法
                function Person(){}
                Person.prototype.name = "Nicholas";
                Person.prototype.age = 29;
                Person.prototype.job = "Software Engineer";
                Person.prototype.sayName = function()
                {
                    console.log(this.name);
                };
                // 该方法接受一个对象为参数，返回一个可枚举属性的字符串数组
                var keys = Object.keys(Person.prototype);   // 传入 Person 的原型
                console.log(keys);  // ["name", "age", "job", "sayName"]

                var p1 = new Person();
                p1.name = "Rob";
                p1.age = 31;
                var P1keys = Object.keys(p1);
                console.log(p1keys);    // ["name", "age"]

                var p2 = new Person();
                var p2keys = Object.keys(p2);
                console.log(p2keys);    // []

                // getOwnPropertyName() 方法获取包括不可枚举属性在内所有属性
                var keys = Object.getOwnPropertyNames(Person.prototype);
                console.log(keys);  // ["constructor", "name", "age", "job", "sayName"]
            // 3.更简单的原型语法
                // 重写函数
                function Person(){}

                Person.prototype =
                {
                    name : "Nicholas",
                    age : 29,
                    job : "Software Engineer",
                    sayName : function()
                    {
                        console.log(this.name);
                    }
                };

                // 重写函数后 constructor 构造函数 属性不再指向Person
                var friend = new Person();

                console.log(friend instanceof Object);      // true
                console.log(friend instanceof Person);      // true
                console.log(friend.constructor === Object); // true
                console.log(friend.constructor === Person); // false
                // 可以通过一些方法让 constructor 属性指向 Person

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
                // 原生的引用类型采用一样的模式创建，所以可以取得默认的所有方法
                // sort() 方法用于对数组的元素进行排序。
                console.log(typeof Array.prototype.sort);           // function
                // substring() 方法用于提取字符串中介于两个指定下标之间的字符。
                console.log(typeof String.prototype.substring);     // function
                // 通过原生对象的原型，还可以添加方法
                String.prototype.startsWhit = function(text)
                {   //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
                    return this.indexOf(text) == 0;     // 这里判断的是第一个位置 0
                }

                var msg = "Hello world";
                console.log(msg.startsWhit("Hello"));   // true

                /*
                 * 不推荐在程序中修改原生对象的原型
                 */

            // 6.原型对象的问题
                // 对于引用类型值的属性来说，属性共享并不是一件好事
                function Person(){}

                Person.prototype =
                {
                    constructor : Person,
                    name : "Nicholas",
                    age : 29,
                    job : "Software Engineer",
                    friends : ["Shelby", "Court"],
                    sayName : function()
                    {
                        console.log(this.name);
                    }
                };

                var person1 = new Person();
                var person2 = new Person();

                console.log(person2.friend);    // ["Shelby", "Court"]

                person1.friends.push("Van");

                console.log(person1.friends);    // ["Shelby", "Court", "Van"]
                console.log(person2.friends);    // ["Shelby", "Court", "Van"]
                console.log(person1.friends === person2.friends);   // true

        // 6.2.4 组合使用构造函数和原型模式
            // 前例改写如下
            function Person(name, age, job)
            {
                this.name = name;
                this.age = age;
                this.job = job;
                this.friends = ["Shelby", "Court"];
            }

            Person.prototype =
            {
                constructor : Person,
                sayName : function()
                {
                    console.log(this.name);
                }
            }

            var person1 = new Person("Nicholas", 29, "Software Engineer");
            var person2 = new Person("Greg", 27, "Doctor");

            console.log(person1.friends === person2.friends);   // false

            person1.friends.push("Van");
            console.log(person1.friends);   // ["Shelby", "Court", "Van"]
            console.log(person2.friends);   // ["Shelby", "Court"]
            console.log(person1.friends === person2.friends);   // false
            console.log(person1.sayName === person2.sayName);   // true

        // 6.2.5 动态原型链
            function Person(name, age, job)
            {
                // 属性
                this.name = name;
                this.age = age;
                this.job = job;
                // 方法
                if (typeof this.sayName != "function")  // 初次调用构造函数，此后不再修改
                {
                    Person.prototype.sayName = function()   // 会将属性添加到原型之中
                    {
                        console.log(this.name);
                    }
                }
            }

            var friend = new Person("Nicholas", 29, "Software Engineer");
            friend.sayName();

        // 6.2.6 寄生构造函数模式
            // 相当于在外部创建对象
            function Person(name, age, job)
            {
                var o = new Object();
                o.name = name;
                o.age = age;
                o.job = job;
                o.sayName = function()
                {
                    console.log(this.name);
                };
                return o;
            }

            var friends = new Person("Nicholas", 29, "Software Engineer");
            friends.sayName();

            // 可用于已有函数不修改的前提下添加新的方法
            function SpecialArray()
            {
                // 创建数组
                var values = new Array();
                // 添加值
                values.push.apply(values, arguments);
                // 添加方法
                values.toPipedString = function()
                {
                    return this.join("|");
                };
                // 返回数组
                return values;
            }

            var colors = new SpecialArray("red", "blue", "green");
            console.log(colors.toPipedString());     // red|blue|green
