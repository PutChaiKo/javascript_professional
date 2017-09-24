// 4.1 基本类型 引用类型 值
    // 4.1.1
        var person = new Object();  //创建对象保存至变量 person中
        person.name = "Nicholas";   //添加 name 属性，并赋值字符串"Nicholas"
        console.log(person.name);   //可访问该属性
        //
        var name = "Nicholas";      //赋值字符串至变量
        name.age = 27;              //尝试为变量添加属性
        console.log(name.age);      //undefined
    // 4.1.2
        var num1 = 5;
        var num2 = num1;
        num1 += 10;
        console.log("num1 = " + num1 + "," + "num2= " + num2);
        // num1 = 15,num2= 5,两值赋值完成之后完全独立
        //引用类型则不然
        var obj1 = new Object();
        var obj2 = obj1;
        obj1.name = "Nicholas";
        console.log(obj2.name); //"Nicholas"
    // 4.1.3
        function addTen(num) {      //参数 num 实际是函数局部变量
            num += 10;              //传入20后，自身被加了10
            return num;
        }
        var count = 20;
        var result = addTen(count); //count 将数值20传入复制给 num
        console.log(count);         //20，不影响函数外部变量
        console.log(result);        //30
        console.log(num);           //num is not defined，无法访问局部变量
        // 传递对象
        function setName(obj) {         //这个例中，obj person引用的是同一对象
            obj.name = "Nicholas";      //在函数内部修改属性
        }
        var person = new Object();
        setName(person);
        console.log(person.name);       //"Nicholas"，函数内部会反映到外部
        // 传递对象也是按值传递而不是按引用
        function setName(obj) {
            obj.name = "Nicholas";      //本例，obj 到此引用同一对象
            obj = new Object();         //函数内部重写 obj，变量obj将引用另一个局部对象
            obj.name = "Greg";          //局部对象在函数结束后销毁，外部无法访问
        }
        var person = new Object();
        setName(person);
        console.log(person.name);       //"Nicholas"
    // 4.1.3 检测类型
        // 检测基本数据类型用 typeof
        var s = "Nicholas";
        var b = true;
        var i = 22;
        var u;
        var n = null;
        var o = new Object();

        console.log(typeof s);  //string
        console.log(typeof b);  //boolean
        console.log(typeof i);  //bumber
        console.log(typeof u);  //undefined
        console.log(typeof n);  //object
        console.log(typeof o);  //object

        // 检测引用类型值用 instanceof
        // 可知是什么类型的对象
        // result = variable instanceof constructor    语法：变量 实例of 构造函数
        //
        console.log(person instanceof Object);      //变量 person 是 Object吗？
        console.log(colors instanceof Array);       //
        console.log(pattern instanceof RegExp);
        // 检测引用类型值和 Object构造函数时，始终返回 true
        // 检测基本类型值，返回false
// 4.2 执行环境 作用域
    var color = "blue";

    function changeColor(){
        if (color == "blue") {
            color = "red";
        } else {
            color = "blue";
        }
    }

    changeColor();

    console.log("Color is now " + color);

    // 局部作用域中定义的变量可以在局部环境中与全局变量互换使用。
    var color = "blue";

    function changeColor() {
        var anotherColor = "red";

        function swapColor() {
            var tempColor = anotherColor;
            anothercolor = color;
            color = tempColor;

            // 这里可以访问 color anotherColor tempColor
        }

        // 这里可访问 color anotherColor, 不能访问 tempColor
        swapColor();
    }

    // 这里只能访问color
    changeColor();
    // 内部环境可以通过作用域链访问外部环境，反之不行。
    // 函数参数同为变量
    // window
    // |-color
    // |-changeColor()
    //   |-anotherColor
    //   |-swapColor()
    //     |-tempColor

        // 4.2.1 延长作用域链
        //函数为修改当前链接并返回一个用于调试的链接
        function buildUrl() {
            var qs = "?debug=true";

            with(location){             //Location 对象是 Window 对象的一个部分
                var url = href +qs;     //此处 href引用的是 location.href
            }
            return url;
        }
    // 4.2.2 没有块级作用域
        if (true) {             // if 语句会将变量添加到当前的执行环境
            var color = "blue"; // 在本例是全局变量
        }                       // 也就是说花括号并不能限制变量

        console.log(color);     //输出"blue"

        // 特别是 for 语句
        for (var i = 0; i < 10; i++) {  // 从定义开始就添加到了循坏外部的执行环境里
            doSomething(i);
        }                               // 循环结束后并不会毁灭 i

        console.log(i);                 // 10
            // 1.声明变量
            function add (num1, num2) {
                var sum = num1 + num2;
                return sun;             // sum的数值被 return到了函数本身
            }                           // 函数结束，sum 被毁灭

            var result = add(10, 20);   // 30
            console.log(sum);           // sun is not defined

            // 函数内生成全局变量
            function add(num1, num2) {
                sum = num1 + num2;      //初始化赋值没使用 var，变成全局变量
                return sum;             //忘记var是常见错误应避免
            }                           //严格模式下导致错误

            var result = add(10, 20);   //30
            console.log(sum);           //30
            // 2.查询标识符
            var color = "blue";         //3.在父环境中找到，调用 return给函数

            function getColor() {       //2.在该函数搜索变量对象，没有找到
                return color;           //1.执行时，需要用到 color
            }

            console.log(getColor());    //"blue"

            // 例子，局部变量优先
            var color = "blue";         //5.并不会走到这一步

            function getColor() {       //3.在局部环境寻找 color变量
                var color = "red";      //1.运行函数先声明赋值函数，4.找到，停止搜索并 return
                return color;           //2.需要用到 color
            }


            console.log(getColor());    //"red"

            // 例子，如何绕过局部变量
            var color = "yellow";

            function getColor() {
                var color = "red";      //定义局部变量
                return window.color;    //访问全局变量
            }

            console.log(getColor());    //"yellow"
// 4.3 垃圾收集
    // 4.3.1 标记清除
        //给所有内存中的变量打标签，用到的去掉标签，然后销毁变量回收空间
    // 4.3.2 引用计数
        // 循环引用
        function problem(){
            var objectA = new Object();
            var objectB = new Object();

            objectA.someOtherObject = objectB;//将 objectB 赋值（引用）给对象的objectA的someOtherObject属性
            objectB.anotherObject = objectA;  //将 objectA 赋值（引用）给对象的objectA的someOtherObject属性
        }
        // IE9之前中COM对象引用导致的循环引用问题：
        var element = document.getElementById("some_element");//这里的 element也是一个对象吗？
        var myObject = new Object();                          //这里声明了一个空对象
        myObject.element = element;                           //属性引用
        element.someObject = myObject;                        //属性引用

        //上述例子可用以下方式手工断开连接
        myObject.element = null;
        element.someObject = null;
    // 4.3.3 性能问题
    // 4.3.4 内存管理
        //解除引用
        function createPerson(name) {               //运行函数后
            var localPerson = new Object();         //声明变量是对象，变量获得指针
            localPerson.name = name;                //为对象属性赋值，数据来源于参数 name，在堆内存中创建对象A，变量指针指向对象A
            return localPerson;                     //将该函数的指针指向 localPerson同一个对象A
        }                                           //离开函数，变量localPerson被销毁，对象A还在

        var globalPerson = createPerson("Nicholas");//将 globalPerson的指针指向函数所指的地方对象A，也就是引用

        console.log(globalPerson);      //{name: "Nicholas"}
        console.log(globalPerson.name); //"Nicholas"
        //手工解除 globalPerson 的引用
        globalPerson = null;            //使用完毕，将 globalPerson的指针指向 null
        console.log(globalPerson);      //null
        console.log(globalPerson.name); //错误，属性不存在
        // 简而言之，不用的对象要记得扔掉
