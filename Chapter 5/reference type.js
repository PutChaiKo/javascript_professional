// 5 引用类型
    // 5.1 Object 类型
        // new + Object构造函数
        var person = new Object();
        person.name = "Nicholas";
        person.age = 29;
        // 对象字面量
        var person = {          //花括号出现在表达式上下文中，表示表达式的开始
            name : "Nicholas",  //冒号前定义属性，后属性值，用逗号分隔不同属性
            age : 29            //最后一个属性不能添加逗号，在某些浏览器会导致错误
        }；                     //这里是一个声明和赋值，所以最后跟分号
        //对象字面量的属性名也可以使用字符串
         var person= {
             "name" = "Nicholas",
             "age" = 29,
             5 : true   //这里的数值5会被自动转化为字符串
         }；
         // 留空花括号
         var person = {};   //与 new Object() 相同
         person.name = "Nicholas";
         person.age = 29;

        // 有限选择对象字面量语法，如下
        function displayInfo(args) {    //函数需要在此接受一个参数args
            var output = "";                            //声明变量为字符串

            if (typeof args.name == "string") {         //如果参数 name属性是字符串，则
                output += "Name: " + args.name + "\n";
            }

            if (typeof args.age == "number") {          //如果参数 age属性是数值，则
                output += "age: " + args.age + "\n";
            }

            console.log(output);                        //输出含有字符串的变量
        }

        displayInfo({           //可一次传入多个可选参数
            name: "Nicholas",   //通过函数内的条件进行筛选
            age: 29
        });

        displayInfo({
            name: "Greg"
        })

        // 点表示法与方括号表示法
        console.log(person["name"]);    //"Nicholas"
        console.log(person.name);       //"Nicholas"

        // 方括号的优点
        var propertyName = "name";
        console.log(person[propertyName]);  //"Nicholas"
        // 属性名包含导致错误的字符可用
        person["fist name"] = "Nicholas";
        // 除非万不得已，用点表示法
    // 5.2 Array
        var colors = new Array();           //Array构造函数
        var colors = new Array(20);         //创建 length属性为20的数组
        var colors = new Array("red", "blue", "green");
        //只传递一个值
        var colors = new Array(3);    //创建一个 length属性为3的数组
        var name = new Array("Greg");//创建一个 length属性为1，字符串"Greg"的数组
        // 数组字面量
        var colors = ["red", "blue", "green"];
        var name = [];       //创建一个空数组
        var value = [1,2,];  //不要这样！会创建一个 length为2或3的数组
        var option = [,,,,,] //同上
        // 读取写入
        var colors = ["red", "blue", "green"];  // 定义字符串数组
        console.log(colors[0]);                 // 显示第一项
        colors[2] = "black";                    // 修改第三项
        colors[4] = "brown";                    // 新增第四项
        // length
        var colors = ["red", "blue", "green"];
        var name = [];
        console.log(colors.length);  //3
        console.log(name.length);   //0
        // length 非只读
        var colors = ["red", "blue", "green"];   //包含3个值
        colors.length = 2;       //调整为 2个
        console.log(colors[2]);  //undefined
        //
        var colors = ["red", "blue", "green"];
        color.length = 4;       //新增一项
        console.log(color[3]);  //undefined，会获得这个值
        //
        var colors = ["red", "blue", "green"];
        colors[colors.length] = "black";    //新增位置3及颜色
        colors[color.length] = "brown";      //新增位置4及颜色
        //
        var colors = ["red", "blue", "green"];
        colors[99] = "black";    //位置99，顺序100添加一个字符串数据
        console(color.length);  //100

        // 5.2.1 检测数组
            //有局限性的 instanceof操作符
            if (value instanceof Array) {
                //某种操作
            }
            //上述假定为只有一个全局执行环境
            // 可使用，某些浏览器可能尚未实现
            if (Array.isArray(value)) {
                //某些操作
            }
        // 5.2.2 转换方法
            var colors = ["red", "blue", "green"];
            console.log(colors.toString()); //"red,blue,green"
            console.log(colors.valueOf());  //["red", "blue", "green"]
            console.log(colors);            //["red", "blue", "green"]
            alert(colors);                  //"red,blue,green",alert方法在后台调用 toString()方法
            //
            var person1 = {
                toLocaleString : function() {
                    return "Nikolaos";
                },

                toString : function() {
                    return "Nicholas";
                }
            };

            var person2 = {
                toLocaleString : function() {
                    return "Grigorios";
                },

                toString : function() {
                    return "Greg";
                }
            }

            var people = [person1, person2];
            console.log(people);
            console.log(people.toString());         //Nicholas,Greg
            console.log(people.toLocaleString());   //Nikolaos,Grigorios

        // 5.2.3 栈方法
            // 栈 LIFO 后进先出
            var colors = new Array();
            var count = colors.push("red","green"); //推入两项
            console.log(count);                     //2

            count = colors.push("black");           //再推入一项
            console.log(count);                     //3

            var item = colors.pop();                //取得最后一项，而且不还回去了
            console.log(item);                      //"black"
            console.log(colors.length);             //2
            // 栈连用其他方法
            var colors = ["red", "blue"];
            colors.push("brown");       //添加一项
            colors[3] = "black";        //再添一项
            console.log(colors.length); //4

            var item = colors.pop();    //拿走最后一项
            console.log(item);          //"black"
            console.log(colors.length); //3
        // 5.2.4 队列方法
            //FIFO 先进先出
            var colors = new Array();
            var count = colors.push("red", "green");//推入两项
            console.log(count);         //2

            count = colors.push("black");           //推入一项
            console.log(count);         //3

            var item = colors.shift();              //取走第一项
            console.log(item);          //"red"
            console.log(colors.length); //2

            //unshift()
            var colors = new Array();
            var count = colors.unshift("red", "green");
            console.log(count);

            count = colors.unshift("black");
            console.log(count);

            var item = colors.pop();
            console.log(item);          //"green"
            console.log(colors.length);

        // 5.2.5 重排序方法
            // reverse() sort()
            var values = [1, 2, 3, 4, 5];
            values.reverse();
            console.log(values);    //[5, 4, 3, 2, 1]
            //
            var values = [0, 1, 5, 10, 15];
            values.sort();
            console.log(values);    //[0, 1, 10, 15, 5]
            // 比较函数
            function compare(value1, value2) {
                if (value1 < value2) {
                    return -1;
                } else if (value1 > value2) {
                    return 1;
                } else {
                    return 0;
                }
            }
            //传递给 sort()
            var values = [0, 1, 5, 10, 15];
            values.sort(compare);
            console.log(values);
            // 反序
            function compare(values1, values2) {
                if (values1 < values2) {
                    return 1;
                } else if (values1 > values2) {
                    return -1;
                } else {
                    return 0 ;
                }
            }

            var values = [0, 1, 5, 10, 15];
            values.sort(compare);
            console.log(values);        //[15, 10, 5, 1, 0]
            //通用函数，适用于 valueOf()有值的对象类型
            function compare(value1, value2) {
                return value2 - value1;
            }
        // 5.2.6 操作方法
        var colors = ["red", "green", "blue"];
        var colors2 = colors.concat("yellow", ["black", "brown"]);

        console.log(colors);    //["red", "green", "blue"]
        console.log(colors2);   //["red", "green", "blue", "yellow", "black", "brown"]
        // slice()不包括结束位置项目
        var colors = ["red", "green", "blue", "yellow", "purple"];
        var colors2 = colors.slice(1);
        var colors3 = colors.slice(1,4);
        console.log(colors);   //["red", "green", "blue", "yellow", "purple"]
        console.log(colors2);  //["green", "blue", "yellow", "purple"]
        console.log(colors3); // ["green", "blue", "yellow"]
        // splice()
        var colors = ["red", "green", "blue"];
        var remove = colors.splice(0,1);   //取走一项
        console.log(colors);   //["green", "blue"]
        console.log(remove);   //["red"]

        remove = colors.splice(1, 0, "yellow", "orange");  //在位置1取走0项，插入两项
        console.log(colors);   //["green", "yellow", "orange", "blue"]
        console.log(remove);   //["green", "yellow", "orange", "blue"]

        remove = colors.splice(1, 1, "red", "purple"); //在位置1取走一项，插入两项
        console.log(colors);   //["green", "red", "purple", "orange", "blue"]
        console.log(remove);   //["yellow"]
    // 5.2.7 位置方法
        //indexOf() lastIndexOf()
        var number = [1,2,3,4,5,4,3,2,1,4];

        console.log(number.indexOf(4));         //3
        console.log(number.lastIndexOf(4));     //5

        console.log(number.indexOf(4,4));       //5,后一个数字是查找起点位置
        console.log(number.lastIndexOf(4,4));   //3，查找起点索引

        var person = { name: "Nicholas" };
        var people = [ { name: "Nicholas" } ];

        var morePeople = [person];

        console.log(people.indexOf(person));    //-1
        console.log(morePeople.indexOf(person));//0

    // 5.2.8 迭代方法
        var numbers = [1,2,3,4,5,4,3,2,1];

        var everyResult = numbers.every(function(item, index, array) {//数组项的值、该项的位置、数组对象本身
            return (item > 2);      //数组项大于 2返回 true
        });                         //every方法对每个数组项都运行该函数，全部为true返回true

        console.log(everyResult);   //false

        var someResult = numbers.some(function(item, index, array) {
            return (item > 2);
        });

        console.log(someResult);    //true
        //filter()函数
        var numbers = [1,2,3,4,5,4,3,2,1];

        var filterResult = numbers.filter(function(item, index, array){
            return (item > 2);
        });

        console.log(filterResult);  //[3, 4, 5, 4, 3]
        //map()
        var numbers = [1,2,3,4,5,4,3,2,1];

        var mapResult = numbers.map(function(item, index, array) {
            return item * 2;
        });

        console.log(mapResult); //[2, 4, 6, 8, 10, 8, 6, 4, 2]
        //forEach()
        var number = [1,2,3,4,5,4,3,2,1];

        numbers.forEach(function(item, index, array) {
            //某些操作
        })；
    // 5.2.9 归并方法
        // reduce()
        var values = [1,2,3,4,5];
        var sum = values.reduce(function(prev, cur, index, array) {
            return prev + cur;  //第一次执行，1 + 2，第二次，3 + 3
        });
        console.log(sum);   //15
        // reduceRight()
        var values = [1,2,3,4,5];
        var sum = values.reduceRight(function(prev, cur, index, array) {
            return prev + cur;  //第一次 5 + 4 第二次 9 + 3
        });
        console.log(sum);   //15
// 5.3 Data类型
    // 获取当前时间
    var now = new Date();
    console.log(now);     //Sat Sep 16 2017 15:41:40 GMT+0800 (中国标准时间)
    // Date.parse() 获取指定时间的格式化返回
    var someDate = new Date(Date.parse("May 25, 2014"));
    console.log(someDate);  //Sun May 25 2014 00:00:00 GMT+0800 (中国标准时间)
    var someDate = new Date("May 25, 2004");
    console.log(someDate);  //Tue May 25 2004 00:00:00 GMT+0800 (中国标准时间)
    // Date.UTC()，基于GMT时间
    // GMT时间2000年1月1日午夜零时
    var y2k = new Date(Date.UTC(2000,0));//只有年月是必须的，其中月从0开始算，没提供均假设为 0
    console.log(y2k);   //Sat Jan 01 2000 08:00:00 GMT+0800 (中国标准时间)
    // GMT时间2005年5月5日下午5:55:55
    var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));//2005年4+1月
    console.log(allFives);  //Fri May 06 2005 01:55:55 GMT+0800 (中国标准时间)
    // Date构造函数可传入 Date.UTC()适用的数据格式，但是是基于本地时间的
    // 本地时间2000年1月1日凌晨零时
    var y2k = new Date(2000, 0);
    console.log(y2k);   //Sat Jan 01 2000 00:00:00 GMT+0800 (中国标准时间)
    // 本地时间2005年5月5日17:55:55
    var allFives = new Date(2005, 4, 5, 17, 55, 55);
    console.log(allFives);  //Thu May 05 2005 17:55:55 GMT+0800 (中国标准时间)

    // Date.now EC5
    var start = Date.now();     //取得开始时间

    doSomething();              //调用函数

    var stop = Date.now(),      //取得停止时间
        result = stop - start;  //计算两个时间点之间的毫秒数

    // 5.3.1 继承的方法
        // toLocaleString() toString()方法在不同浏览器返回的时间日期格式大相径庭
        //valueOf()方法 返回毫秒表示，用于比较时间
        var date1 = new Date(2007, 0, 1);
        var date2 = new Date(2007, 1, 1);
        console.log(date1);             //Mon Jan 01 2007 00:00:00 GMT+0800 (中国标准时间)
        console.log(date2);             //Thu Feb 01 2007 00:00:00 GMT+0800 (中国标准时间)
        console.log(date1.valueOf());   //1167580800000 取得1970年1月1日午夜零时到 date1经过的毫秒数
        console.log(date2.valueOf());   //1170259200000
        console.log(date1 < date2);     //true 自动执行 valueOf() 一月比二月小，符合直观逻辑
        console.log(date1 > date2);     //false 符合逻辑
    //5.3.2 日期格式化方法
        toDateString()
        toTimeString()
        toLocaleDateString()
        toLocaleTimeString()
        toUTCString()
        //均因浏览器而异
    // 5.3.3 日期/时间组件方法
        // 直接取得和设置日期值中特定部分的方法
        // UTC日期是指没有时区偏差的GMT时间
        // 一大堆就不抄录了
// 5.4 RegExp 类型
    var expression = / pattern / flags ;
    //在语法里，pattern（模式）里应该是正则表达式
    var pattern3 = /.at/gi;
    // 声明一个变量为引用类型RegExp，并指向一条正则表达式。
    // 该表达式由模式 .at 正则表达式，表示匹配at结尾的三字符
    // gi指全局模式下不区分大写
    // 试着传入一个字符串
    var noFound = pattern3.test("atjfit");
    var found = pattern3.test("hjukcat")
    console.log(noFound);   //false
    console.log(found);     //true
    //例子
        /*
         * 匹配字符串中所有有at的实例
         */
        var pattern1 = /at/g;

        /*
         * 匹配第一个"bat"或者"cat",不去纷纷大小写
         */
        var pattern2 = /[bc]at/i;

        /*
         * 匹配所有以"at"结尾的3字符组合，不区分大小写
         */
        var pattern3 = /.at/gi;

    // 正则表达式所有的元字符必须转义
        // ( [ { \ ^ $ | ) ? * + .]}

            /*
             * 匹配第一个"bat"或者"cat",不去纷纷大小写
             */
            var pattern2 = /\[bc\]at/i;

            /*
             * 匹配所有以"at"结尾的3字符组合，不区分大小写
             */
            var pattern3 = /\.at/gi;

    //前述均为字面量方式，下述RegExp构造函数定义正则表达式
            /*
             * 匹配第一个"bat"或"cat"，不区分大小写
             */
            var pattern1 = /[bc]at/i;

            /*
             * 与pattern1相同，只不过是使用构造函数创建的
             */
            var pattern2 = new RegExp("[bc]at", "i");

            // 双重转义

            //例子
            var re = null,
                i;

            for (i=0; i < 10; i++) {
                re = /cat/g;
                b = re.test("catastrophe");
                console.log(b);
            }

            for (i=0; i < 10; i++) {
                re = new RegExp("cat", "g");
                re.test("catastrophe");
            }
    // 5.4.1 RegExp实例属性
        // 实例具有下列属性
        var pattern1 = /\[bc\]at/i;
        console.log(pattern1.global);           //false，g标志
        console.log(pattern1.ignoreCase);       //true，i标志
        console.log(pattern1.multiline);        //false，m标志
        console.log(pattern1.lastIndex);        //0，搜索下一个匹配项的字符位置
        console.log(pattern1.source);           //\[bc\]at，字面量字符串正则
        console.log(pattern1.test("cat"));      //false

        var pattern2 = new RegExp("\\[bc\\]at", "i");
        console.log(pattern1.global);           //false
        console.log(pattern1.ignoreCase);       //true
        console.log(pattern1.multiline);        //false
        console.log(pattern1.lastIndex);        //0
        console.log(pattern1.source);           //\[bc\]at
        console.log(pattern1.test("cat"));      //false
    // 5.4.2 RegExp实例方法
        // exec()
        var text = "mon and dad and baby";
        var pattern = /mon( and dad( and baby)?)?/gi;   //包含2个捕获组

        var matches = pattern.exec(text);
        console.log(matches.index); //0
        console.log(matches.input); //mon and dad and baby，传入字符串
        console.log(matches[0]);    //mon and dad and baby
        console.log(matches[1]);    // and dad and baby
        console.log(matches[2]);    // and baby
        // exec()与全局标志
        var text = "cat, bat, sat, fat";
        var pattern1 = /.at/;

        var matches = pattern1.exec(text);
        console.log(matches.index);         //0，匹配开始的位置
        console.log(matches[0);            //cat，匹配到唯一的 cat
        console.log(pattern1.lastIndex);    //0,搜索下一匹配开始的位置

        matches = pattern1.exec(text);
        console.log(matches.index);         //0，承接上文，匹配开始为0
        console.log(matches[0]);            //cat
        console.log(pattern1.lastIndex);    //0

        var pattern2 = /.at/g;              //设置全局模式 g

        var matches = pattern2.exec(text);
        console.log(matches.index);         //0，从0位置开始匹配
        console.log(matches[0]);            //cat，匹配到 cat
        console.log(pattern2.lastIndex);    //3，全局模式下，下一个匹配从位置3的字符开始，也就是第一个逗号

        matches = pattern2.exec(text);
        console.log(matches.index);         //5，位置5，也就是b
        console.log(matches[0]);            //bat
        console.log(pattern2.lastIndex);    //8，位置8，第二个逗号
        //IE 的 JS在非全局模式下，lastIndex属性每次也会发生变化

        //test(),if语句验证输入
        var text = "000-00-0000";
        var pattern = /\d{3}-\d{2}-\d{4}/;

        if (pattern.test(text)){
            console.log("The pattern was matched");
        } else {
            console.log("wrong");
        }   //The pattern was matched
    // 5.4.3 RegExp 构造函数属性
        // 属性可以从exec() test()中提取更具体的信息
        var text = "this has been a short summer";
        var pattern = /(.)hort/g;

        /*
         * 注意：Opera 不支持 input lastMatch lastParen multiline 属性
         * Internet Explorer 不支持 multiline
         */
        if (pattern.test(text)){
            console.log(RegExp.input);          //this has been a short summer，返回最近一次要匹配的字符串
            console.log(RegExp.leftContext);    //this has been a ，匹配项之前的字符串
            console.log(RegExp.rightContext);   // summer，匹配项之后的字符串
            console.log(RegExp.lastMatch);      //short，最近一次与整个表达式匹配的字符串
            console.log(RegExp.lastParen);      //s，最忌一次与捕获组匹配的字符串
            console.log(RegExp.multiline);      //undefined，用于表述是否所有表达式都使用多行模式
        }

        // 短属性名
        var text = "this has beeb a short summer";
        var pattern = /(.)hort/g;

        /*
         * 注意：Opera 不支持 input lastMatch lastParen multiline 属性
         * Internet Explorer 不支持 multiline
         */

        if (pattern.test(text)){
            console.log(RegExp.$_);     //this has beeb a short summer
            console.log(RegExp["$`"]);  //this has beeb a
            console.log(RegExp["$&"]);  //short
            console.log(RegExp["$+"]);  //s
            console.log(RegExp["$*"]);  //undefined
        }
        // 九个捕获组属性
        var text = "this has been a short summer";
        var pattern = /(..)or(.)/g;

        if (pattern.test(text)){
            console.log(RegExp.$1);     //sh
            console.log(RegExp.$2);     //t
        }

    // 5.4.4 模式的局限性
        // 与 Perl相比哟不少不支持的特性，具体不列

// 5.5 Function 类型
    // 函数实际上是对象，Function类型的实例
    // 函数名实际上是指向函数对象
    // 函数声明语法定义函数
    function sum (num1, num2) {
        return num1 + num2;
    }
    // 函数表达式定义函数
    var sum = function(num1, num2){ //function后面没有函数名
        return num1 + num2;
    };  //这里要有分号，因为是var
    // Function构造函数定义函数
    var sum = new Function("num1", "num2", "return num1 +num2");    //不推荐
    //可以接受任意数量的参数，最后一个参数被视为函数体，其他视为函数参数。

    //函数名仅仅是指针
    function sum(num1, num2){
        return num1 + num2;
    }
    console.log(sum(10,10));        //20

    var anotherSum = sum;           //使用不带括号的函数名是访问函数指针
    console.log(anotherSum(10,20)); //30

    sum = null;                     //断开原变量名与所指函数的关系
    console.log(anotherSum(10,10)); //20

    // 5.5.1 没有重载
        function addSomeNumber(num){
            return num + 100;
        }

        function addSomeNumber(num){
            return num + 200;
        }

        var result = addSomeNumber(100); //300
        //后函数覆盖前函数，同下例
        var addsomeNumber = function (num){
            return num + 100;
        };

        addSomeNumber = function (num){
            return num + 200;
        };

        var result = addSomeNumber(100);    //300

    // 5.5.2函数声明及函数表达式
        // 解析器会先读取函数声明，函数表达式要等到解析器执行到该代码行
        console.log(sum(10,10));    //20
        function sum(num1, num2){
            return num1 + num2;
        }
        //换成函数表达式
        console.log(sum (10,10));   //sum is not a function
        var sum = function(num1, num2){
            return num1 + num2;
        };
    // 5.5.3 作为值的函数
        function callSomeFunction(someFunction, someArgument){//第一个参数以光是一个函数，另一个是传递给函数的值
            return someFunction(someArgument);
        }

        function add10(num){
            return mun + 10;
        }

        var result1 = callSomeFunction(add10, 10);//add10不加括号，传递的是指针
        console.log(result1);

        // 函数中返回函数
        function createComparisonFunction(propertyName) {

            return function(object1, object2){
                var value1 = object1[propertyName];
                var value2 = object2[propertyName];

                if (value1 < value2){
                    return -1;
                } else if (value1 > value2){
                    return 1;
                } else {
                    return 0;
                }
            };
        }

        var data = [{name: "Zachary", age: 28}, {name: "Nicholas", age: 29}];

        data.sort(createComparisonFunction("name"));
        console.log(data[0].name);      //Nicholas

        data.sort(createComparisonFunction("age"));
        console.log(data[0].name);      //Zachary
