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
            function Person(name, age, job)
            {
                this.name = name;
                this.age = age;
                this.job = job;
                this,sayName = function()
                {
                    console.log(this.name);
                };
            }

            var person1 = new Person("Nicholas", 29, "Software Engineer");
            var person2 = new Person("Greg", 27, "Doctor");

            
