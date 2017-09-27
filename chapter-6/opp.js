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
            // EC5定义了特性（attribute）用于描述属性（property）的特征

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
        // 6.2.7 稳妥构造函数
            // 没有公共属性，方法不引用 this 的对象
            // 与寄生构造韩式类似但不同，不用 this 和 new
            function Person(name, age, job)
            {
                // 创建要返回的对象
                var o = new Object();

                // 可以在此定义私有变量和函数

                // 添加方法
                o.sayName = function()
                {
                    console.log(name);
                };
                // 返回对象
                return o;
            }

            var friend = Person("Nicholas", 29, "Software Engineer");
            friend.sayName();   // Nicholas

    // 6.3 继承
        // 接口继承和实现继承 JS只有实现继承

        // 6.3.1 原型链
            function SuperType()    // 定义类型 1
            {
                this.property = true;   // 设置属性为 true
            }

            SuperType.prototype.getSuperValue = function()  // 设置类型 1 方法
            {
                return this.property;   // 返回 property 属性的布尔值，false
            };

            function SubType()      // 定义类型 2
            {
                this.subproperty = false;   // 属性为 false
            }

            // 继承了SubType
            SubType.prototype = new SuperType(); // 将类型 2 的原型指向类型 1 的原型

            SubType.prototype.getSubValue = function()  // 设置类型 2 的方法
            {
                return this.subproperty;    // 返回 subproperty 的值 false
            };

            var instance = new SubType();
            console.log(instance.getSuperValue());  // true
            console.log(instance.getSubValue());    // false

            // 1. 默认的原型
                // SubType 继承了 SuperType，而 SuperType 继承了 Object.
                // 当调用 instance.toString() 时，实际上调用的是保存在 Object.prototype 上的方法

            // 2.确认原型和实例的关系
                // instanceof 操作符
                console.log(instance instanceof Object);    // true
                console.log(instance instanceof SuperType); // true
                console.log(instance instanceof SubType);   // true

                // isPrototypeOf() 方法
                console.log(Object.prototype.isPrototypeOf(instance));      // true
                console.log(SuperType.prototype.isPrototypeOf(instance));   // true
                console.log(SubType.prototype.isPrototypeOf(instance));     // true

            // 3.谨慎地定义方法
                // 给原型添加代码一定要放在替换原型的语句之后
                function SuperType()
                {
                    this.property = true
                }

                SuperType.prototype.getSuperValue = function()
                {
                    return this.property;
                };

                function SubType()
                {
                    this.subproperty = false;
                }

                // 继承了 SuperType
                SubType.prototype = new SuperType();

                // 添加新方法
                SubType.prototype.getSubValue = function()
                {
                    return this.subproperty;
                };

                // 重写超类型中的方法
                SubType.prototype.getSubValue = function()
                {
                    return false;
                };

                var instance = new SubType();
                console.log(instance.getSuperValue());      // false

                // 对象字面量创建函数原型将会重写原型链
                function SuperType()
                {
                    this.property = true;
                }

                SuperType.prototype.getSuperValue = function()
                {
                    return this.property;
                };

                function SubType()
                {
                    this.subproperty = false;
                }

                // 继承
                SubType.prototype = new SuperType();

                // 使用字面量添加新方法，会使上一行代码无效
                SubType.prototype =
                {
                    getSubValue : function()
                    {
                        return this.subproperty;
                    },

                    someOtherMethod : function()
                    {
                        return false;
                    }
                };

                var instance = new SubType();
                console.log(instance.getSubValue());    // false
                console.log(instance.getSuperValue());  // error

            // 4.原型链的问题
                function SuperType()
                {
                    this.colors = ["red", "blue", "green"];
                }

                function SubType(){}

                // 继承
                SubType.prototype = new SuperType();

                var instance1  = new SubType();
                instance1.colors.push("black");
                console.log(instance1.colors);  // ["red", "blue", "green", "black"]

                var instance2 = new SubType();
                console.log(instance2.colors);  // ["red", "blue", "green", "black"]

        // 6.3.2 借用构造函数
            function SuperType()
            {
                this.colors = ["red", "blue", "green"];
            }

            function SubType()
            {
                // 继承SuperType
                SuperType.call(this);   // 只有在创建新实例的时候才调用这个函数
            }

            var instance1 = new SubType();
            instance1.colors.push("black");
            console.log(instance1.colors);  // ["red", "blue", "green", "black"]

            var instance2 = new SubType();  // 每个实例会有自己的 color 副本
            console.log(instance2.colors);  // ["red", "blue", "green"]

            // 1. 传递参数
                // 借用构造函数的优势
                // 可在子类型构造函数向超类型构造函数传递参数
                function SuperType(name)
                {
                    this.name = name;
                }

                function SubType()
                {
                    // 继承了 SuperType ，同时传递参数
                    SuperType.call(this, "Nicholas");

                    // 实例属性
                    this.age = 29;
                }

                var instance = new SubType();
                console.log(instance.name);     // Nicholas
                console.log(instance.age);      // 29

            // 2.借用构造函数的问题
                // 无法函数复用
                // 超类型原型定义的方法对子类型不可见

        // 6.3.3 组合继承
            // 原型链和借用构造函数的组合
            // 在原型上定义方法实现函数的复用
            // 又能保证每个实例有自己的属性
            function SuperType(name)
            {
                this.name = name;
                this.colors = ["red", "blue", "green"];
            }

            SuperType.prototype.sayName = function()
            {
                console.log(this.name);
            };

            function SubType(name, age)
            {

                // 继承属性
                SuperType.call(this, name);

                // 实例属性
                this.age = age;
            }

            // 继承方法
            SubType.prototype = new SuperType();

            // 构造函数属性，用于纠正用此函数创建的实例的 constructor 属性指向
            SubType.prototype.constructor = SubType;
            SubType.prototype.sayAge = function()   //  实例方法
            {
                console.log(this.age);
            };

            var instance1 = new SubType("Nicholas", 29);
            instance1.colors.push("black");
            console.log(instance1.colors);  // ["red", "blue", "green", "black"]
            instance1.sayName();    // Nicholas
            instance1.sayAge();     // 29

            var instance2 = new SubType("Greg", 27);
            console.log(instance2.colors);  // ["red", "blue", "green"]
            instance2.sayName();    // Greg
            instance2.sayAge();     // 27

        // 6.3.4 原型式继承
            // 对传入其中的对象进行一次浅复制
            function object(o)      // 传入对象 o
            {
                function F(){}      // 创建临时性构造函数
                F.prototype = o;    // 传入对象 o 作为作为临时构造函数原型
                return new F();     // 返回临时类型的一个新实例
            }

            // 例子
            var person =
            {
                name : "Nicholas",
                friends : ["Shelby", "Court", "Van"]
            };
            var anotherPerson = object(person);
            anotherPerson.name = "Linda";
            anotherPerson.friends.push("Rob");
            var yetAnothherPerson = object(person);
            yetAnothherPerson.name = "Linda";
            yetAnothherPerson.friends.push("Barbie");

            // 引用类型值是共享的
            console.log(person.friends);    // ["Shelby", "Court", "Van", "Rob", "Barbie"]

            // EC5 的 Object.create()方法，用于规范原型继承
            // 接受两个参数，用作新对象原型，为新对象定义额外属性的对象
            // 传入一个参数的情况下，Object.create() 与前述 object() 相同
            // 第二个参数
            var person =
            {
                name : "Nicholas",
                friends : ["Shelby", "Court", "Van"]
            };
            var anotherPerson = Object.create(person, {
                name :
                {
                    value : "Greg"
                }
            });
            console.log(anotherPerson.name);    // Greg

        // 6.3.5 寄生式继承
            function createAnother(original)
            {
                var clone = object(original);   // 通过调用前例函数来创建新对象
                clone.sayHi = function()        // 以某种方式增强该对象
                {
                    console.log("hi");          // 返回对象给函数
                };
                return clone;
            }

            // 可以这样用
            var person =
            {
                name : "Nicholas",
                friends : ["Shelby", "Court", "Van"]
            };

            var anotherPerson = createAnother(person);
            anotherPerson.sayHi();      // hi

        // 6.3.6 寄生组合式继承
            // 组合继承具有调用两次草类型的构造函数的缺点
            function SuperType(name)
            {
                this.name = name;
                this.colors = ["red", "blue", "green"];
            }
            SuperType.prototype.sayname = function()
            {
                console.log(this.name);
            };
            function SubType(name, age)
            {
                SuperType.call(this, name);     // 第二次调用 SuperType()
                this.age = age;
            }

            SubType.prototype = new SuperType();    // 第一次调用 SuperType()
            SubType.prototype.constructor = SubType;
            SubType.prototype.sayAge = function()
            {
                console.log(this.age);
            };

            // 寄生组合式继承
            function inheritPrototype(SubType, SuperType)   // 参数：子类型构造函数和超类型构造函数
            {
                var prototype = object(SuperType.prototype);    // 创建超类型的一个副本
                prototype.constructor = SubType;    // 为副本添加 constructor 属性指向 SubType
                SubType.prototype = prototype;      // 将副本对象赋值给子类型的原型
            }

            function SuperType(name)    // 新建超类型对象，传入参数 name
            {
                this.name = name;   // 属性 name 接受传入参数赋值
                this.colors = ["red", "blue", "green"]; // 超类型自带数组 colors
            }

            SuperType.prototype.sayName = function()    // 超类型的方法 sayName
            {
                console.log(this.name);
            };

            function SubType(name, age)     // 新建子类型，两个参数传入
            {
                SuperType.call(this, name); // 继承类型原型，同时传递参数
                this.age = age;             // 子类型自带属性，由 age 传入
            }

            inheritPrototype(SubType, SuperType);   // 寄生式继承，将超类型原型副本继承给子类型
            SubType.prototype.sayAge0 = function()  // 子类型新建方法
            {
                console.log(this.age);
            }
