// 严格模式
function strictMdoe(){
    "use strict";
    //some function
}
function localVar(){
    var message = "Hi",//局部变量
        found = false,
        age = 29;//定义多个变量
    messageToAll = "Hi";//全局变量
}
// typeof
// undefined: 未定义
// boolean: 布尔
// string: 字符串
// number: 数值
// object: 对象或null
// function: 函数
var message = "somethimg";
console.log(typeof message);
console.log(typeof (message));
console.log(typeof 95);

// 3.4.2 undefined
var message;//声明变量但未初始化
var message = undefined;//用undefined对其初始化是等价的，但不推荐
console.log(message == undefined);//true
// 对于未声明变量，typeof返回的也是undefined
console.log(typeof age);
console.log(typeof message);
//所以声明变量后一定要及时初始化

//3.4.3 Null
var car = null;
console.log(typeof car);//"object"
// 用于保存对象的变量应初始化为null
if (car != null){
    //do something
}

console.log(null == undefined);//true

// 3.4.4 bollean
var found = true;
var lost = false;
//True and False are no boolean type.
var message = "Hello World!";
if (message){
    console.log("变量值为true")
}
console.log(Boolean(message));//true
//存在自动转换Boolean函数，注意变量类型

// 3.4.5 number
var intNum = 55;//整数

var octalNum1 = 070;//八进制的56，八进制第一位为0，然后是0-7
var octalNum2 = 079;//无效，解析为79
var octalNum3 = 08;//解析为8

var hexNum1 = 0xA;//十六进制的10 ，以0x开始后跟十六进制数字
var hexNum2 = 0x1f;//十六进制31
// 浮点数（小数）
var floatNum1 = 1.1;
var floatNum2 = 0.1;
var floatNum3 = .1;//有效不推荐

var floatNum4 = 1.;//解析为1，整数
var floatNum5 = 10.0;//整数，10

var floatNum6 = 3.125e7;//等于31250000
var floatNum7 = 3e-17;
//不要做这样的测试
if (a + b == 0.3){
    console.log("You got 0.3.");
}
//浮点数计算会产生舍入误差的问题，无法精确计算数值，如0.1 + 0.2 != 0.3

var result = Number.MAX_VALUE + Number.MAX_VALUE;//浏览器能表示的最大值
console.log(isFinite(result));//false，isFinite()用于判断数值是否在最大最小值之间
//超出范围将被转换为Infinity/-Infinity

//NaN Not a Number
console.log(0 / 0);//NaN
console.log(NaN / 10);//NaN
console.log(NaN == NaN);//false,NaN与任何数值都不相等
//isNaN()
console.log(isNaN(NaN));    //true
console.log(isNaN(10));     //false
console.log(isNaN("10"));   //false，可转换为数值10
console.log(isNaN("blue")); //true，不可转换
console.log(isNaN(true));   //false，可转换为数值1

//数值转换
Number();
parseInt();
parseFloat();

var num1 = Number("Hello World!");//NaN
var num2 = Number("");//0
var num3 = Number("000011");//11
var num4 = Number(true);//1

var num5 = parseInt("1234blue");    //1234
var num6 = parstInt("");             //NaN
var num7 = ParseInt("0xA");          //10
var num8 = ParseInt(22.5);           //22
var num9 = ParseInt("070");          //56（八进制）
var num10 = ParseInt("70");          //70
var num11 = ParseInt("0xf");         //15

var num12 = parseInt("0xAF",16);     //175,16为转换基数，代表多少进制
var num13 = parseInt("AF",16);       //175，与上述等价
var num14 = parseInt("AF");          //NaN

var num15 = parseInt("10",2);       //2
var num16 = parseInt("10",8);       //8
var num17 = parseInt("10",10);      //10
var num18 = parseInt("10",16);      //16

var num19 = parseFloat("1234blue"); //1234
var num20 = parseFloat("0xA");      //0,只支持十进制
var num21 = parseFloat("22.5");     //22.5
var num22 = parseFloat("22.34.5");  //22.34
var num23 = parseFloat("3.125e7");  //31250000

// 3.4.6string
var fistname = "Nicholas";
var lastname = 'Zakas';

var text = "This is the letter sigma: \u03a3.";
console.log(text.length);//28，字符长度

var lang = "Java";
lang = lang + "Script";

var age = 11;
var ageAsString = age.toString();//"11"
var found = true;
var foundAsString = found.toString();//true

var num = 10;
console.log(num.toString());//"10"
console.log(num.toString(2));//"1010"
console.log(num.toString(8));//"12"
console.log(num.toString(10));//"10"
console.log(num.toString(16));//"a"
// toString()不能转型null与undefined
var value1 = 10;
var value2 = true;
var value3 = null;
var value4;
console.log(String(value1));//"10"
console.log(String(value2));//"true"
console.log(String(value3));//"null"
console.log(String(value4));//"undefined"

var value4 = 20;
console.log(value4 + "");

// 3.4.7 object

// 3.5 操作符
// 3.5.1一元操作符
var age = 29;
++age;//30
//等价于
var age = 29;
age = age + 1;

var age = 29;
--age;

var age = 29;
var anotherAge = --age + 2
console.log(age);       //28
console.log(anotherAge);//30

var num1 = 2;
var num2 = 20;
var num3 = num1-- + num2;   //2+20=22
var num4 = num1 + num2;     //1+20=21

var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o = {
    valueOf: function() {
        return -1;
    }
};

s1++;       //3
s2++;       //NaN
b++;        //1
f--         //0.10000000000000009
o--         //-2

// 一元加减操作符
var s1 = "01";
var s2 = "1.1";
var s3 = "z";
var b = false;
var f = 1.1;
var o = {
    valueOf: function() {
        return -1;
    }
};

s1 = -s1        //-1
s2 = -s2        //-1.1
s3 = -s3        //NaN
b = -b          //0
f = -f          //-1.1
o = -o          //1

// 3.5.2 位操作符
// 按位非（NOT)
var num1 = 25;      //00000000000000000000000000011001
var num2 = ~num1;   //11111111111111111111111111100110
console.log(num2);  //-26
// 按位与（AND）
var result = 25 & 3;
console.log(result);    //1
// 按位或（OR)
var result = 25 | 3;
console.log(result);    //27
// 按位异或（XOR)
var result = 15 ^ 3;
console.log(result);    //26
// 左移
var oldValue = 2;               //二进制 10
var newValue = oldValue << 5;   //二进制1000000，64
// 有符号的右移
var oldValue = 64;
var newValue = oldValue >> 5;   //2
// 无符号右移
var oleValue = 64;              //1000000
var newValue = oldValue >>> 5;  //10,2

var oleValue = -64;              //11111111111111111111111111000000
var newValue = oldValue >>> 5;  //00000111111111111111111111111110，134217726

// 3.5.3 布尔操作符
// !
console.log(!false);        //true
console.log(!"blue");       //false
console.log(!0);            //true
console.log(!NaN);          //true
console.log(!"");           //true
console.log(!123456);       //false

console(!!"blue")       //true
Boolean("blue")         //true
//逻辑与 &&
var True = true && true;
var False = true && false;
var False = false && true;
var False = false && false;

// &&不一定返回布尔值，详见列表
// 逻辑与属于短路操作，见下例
var found = true;
var result = (found && someUndefinedVariable);      //后一变量位声明，错误
console.log(result);    //这一行不会执行

var found = false;
var result = (found && someUndefinedVariable);      //不会错误
console.log(result);    //输出“false”

// 逻辑或 ||
var True = true || true;
var True = true || false;
var True = false || true;
var False = false || false;
// ||不一定返回布尔值
// 同为短路操作
var found = true;
var result = (found || someUndefinedVariable);      //不会发生错误
console.log(result);    //输出“true”

var found = false;
var result = (found || someUndefineVariable);       //错误
console.log(result);    //不执行

// 可利用逻辑非来避免为变量赋null或undefined
var myObject = preferredObject || backupObject;

// * / %
var result = 34 * 56;
var result = 66 / 11;
var result = 26 % 5;    //1
// 输出的结果可为NaN Infinty -Infinty
// 如有操作数不是数值，则调用Number()
// 求模还有输出为0及被除数的的规则

// +
// +0 和 -0 不是同一个数字
// 如果有一个操作数是字符串，则有不同的规则
var result1 = 5 + 5;
console.log(result1);   //10
var result2 = 5 + "5";
console.log(result2);   //"55"
// 常见错误
var num1 = 5;
var num2 = 10;
var message = "The sum of 5 and 10 is " + num1 + num2;
console.log(message);   //The sum of 5 and 10 is 510
// 修正
var num1 = 5;
var num2 = 10;
var message = "The sum of 5 and 10 is " + (num1 + num2);
console.log(message);   //The sum of 5 and 10 is 15

// -
var result1 = 5 - true;     //4，Number(null)
var result2 = NaN - 1;      //NaN,涉及到NaN都返回这个
var result3 = 5 - 3;        //2
var result4 = 5 - "";       //5，Number(null)，""转换为0
var result5 = 5 - "2";      //3，Number(null)
var result6 = 5 - null;     //5,Number(null)为0

// 3.5.6 < > <= >=
var result1 = 5 > 3;    //true
var result2 = 5 < 3;    //true
// 非数值应用关系操作符
var result = "Brick" < "alphabet";      //true,B编码66，a编码97，大写字母排在小写前面
// 为比较字母表排序，可修改为
var result = "Brick".toLowerCase() < "alphabet".toLowerCase();//false,均转换为小写

var result = "23" < "3";    //true,"2"编码为50，"3"编码为51
var result = "23" < 3;      //false,"23"被转化为数值23，因为数值3存在
var result = "a" < 3;       //false,"a"被转化为了NaN
// 与 NaN 比较均为 false
var result1 = NaN < 3;      //false
var result2 = NaN >= 3;     //false

// 3.5.7 == != ===
// 特殊比较结果
var result1 = (null == undefined);      //true
var result2 = ("NaN" == NaN);           //false
var result3 = (5 == NaN);               //false
var result4 = (NaN == NaN);             //false
var result5 = (NaN != NaN);             //true
var result6 = (false == 0);             //true
var result7 = (true == 1);              //true
var result8 = (true == 2);              //false
var result9 = (undefined == 0);         //false
var result10 = (null == 0);             //false
var result11 = ("5" == 5);              //false

// 全等 不全等 === !==
var result1 = ("55" == 55);;         //true,转换
var result2 = ("55" === 55);         //false,数据类型不同
var result3 = ("55" != 55);          //false
var result4 = ("55" !== 55);         //true
var result5 = (null === undefined);  //两值类似但不同类型

// 3.5.8 条件操作符 ？
variable = boolean_expression ? true_value : false_value;
    // 如果boolean_expression求值结果为true,为variabl赋值true_value,false则后一
var max = (num1 > num2) ? num1 : num2;  //max将会保存最大值

// 3.5.9 赋值操作符 =
var num = 10;
num = num + 10;     //可用复合赋值符号代替

var num = 10;
num += 10;
// 同理有
// *=
// /=
// %=
// +=
// -=
// <<= 左移赋值
// >>= 有符号右移赋值
// >>>= 无符号右移赋值

// 3.5.10 逗号操作符
var num1=1, num2=2, num3=3;
var num = (5,1,4,8,0);      //num值为最后一项 0

// 3.6 语句
// 3.6.1 if
if (condition) statement1 else statement2
//condition表达式求值结果未必是布尔值，会调用Bollean()

if (i > 25)
    console.log("Greater than 25.");        //单行语句，可行
else {
    console.log("Less than or equal to 25.")//用{}框起来的代码块，推荐
}

if (condition) statement1 else if (condition2) statement2 else statement3
// 可单行书写，推荐为：
if (i > 25) {
    alert("Greater than 25.");
} else if (i < 0) {
    alert("Less than 0.")
} else {
    alert("Between 0 and 25, inclusive.")
}

// 3.6.2 do-while
do {
    statement
} while (expression);
// 例子
var i = 0;
do {
    i += 2;
} while (i < 10);
console.log(i);
// 3.6.3 while
while(expression) statement
// 例子
var i = 0
while (i < 10) {
    i += 2;
}   //i<10则会一直循环 +2

// 3.6.4 for
    //同 while 同为前测试循环语句，但具有执行循环前初始化变量和定义循环后要执行代码的能力。
for (initialization; expression; post-loop-expression) statemen
// 例子
var count = 10;
for (var i = 0; i < count; i++) {
    console.log(i)
}
// 同于while
var count = 10;
var i = 0;
while (i < count) {
    console.log(i);
    i++
}   //while做不到的for也做不到

//变量初始化可在外部进行
var count = 10
var i;
for (i = 0; i < count; i++) {
    console.log(i);
}

// 循环内部定义的变量可在外部访问到
// function内的局部变量就不行
var count = 10;
for (var i = 0; i < count; i++) {
    console.log(i);
}
console.log(i);

// 无限循环
for (;;) {
    doSomething();
}

// 变成 while 循环
var count = 10;
var i = 0;
for (; i < count; ) {
    console.log(i);
    i++;
}

// 3.6.5 for-in
for (property in experssion) statement

// 例子
for (var propName in window) {
    document.write(propName);
}

// 3.6.6 label
label: statement

start: for (var i=0; i < count; i++) {
    console.log(i);
}

// 3.6.7 break continue
var num = 0;

for (var i=1; i < 10;i++) {
    if (i % 5 == 0) {
        break;
    }
    num++;
}

console.log(num);   //4

// continue
var num = 0;
for (var i=1; i < 10; i++) {
    if (i % 5 == 0) {
        continue;
    }
    num++
}

console.log(num);   //8

// break continue 与 label联合使用，返回代码特定位置，用于循环嵌套
var num = 0;

outermost:
for (var i=0; i < 10; i++) {
    for (var j=0; j < 10; j++) {
        if (i == 5 && j == 5) {
            break outermost;
        }
        num++;
    }
}

console.log(num);   //55

//continue
var num = 0;

outermost:
for (var i=0; i < 10; i++) {
    for (var j=0; j < 10; j++) {
        if (i == 5 && j == 5) {
            console.log("jump outermost")
            continue outermost;
        }
        num++;
        console.log("i is " + i + ", j is " + j);
    }
}

console.log(num);   //95

// 3.6.8 with
// 将代码的作用域设置到一个特定的对象中
with (expression) statement;

// 例子
var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;
    // 改写为
with(location) {
    var qs = search.substring;
    var hostName = hostname;
    var url = href;
}

// 3.6.9 switch
switch (expression) {
    case value: statement
      break;
    case value: statement
      break;
    case value: statement
      break;
      default: statement
}

// 用于避免以下类型代码
if (i == 25) {
    console.log("25";)
} else if (i == 35) {
    console.log("35");
} else if (i == 45) {
    console.log("45");
} else {
    console.log("Other")
}
// 应写为
switch(i) {
    case 25:
        console.log("25");
        break;
    case 35:
        console.log("35");
        break;
    case 45:
        console.log("45");
        break;
    default:        //相当于 else 语句
        console.log("Other");
}

// break 用于避免执行多个 case ，如需混合，添加注释。
switch(i) {
    case 25:
        /* 合并两种情形 */
    case 35:
        console.log("25 or 35");
        break;
    case 45:
        console.log("45");
        break;
    default:
        console.log("Other");
}

// switch 可以使用任何数据类型，对象、字符串
// case 值可是变量、表达式
switch ("hello world") {
    case "hello" + " world":
        console.log("Greeting was found.");
        break;
    case "goodbye":
        console.log("Closing was found.");
        break;
    default:
        console.log("Unexpected message was found.");
}
// 还可以这样玩
var num = 25;
switch (true) {
    case num < 0:
        console.log("Less than 0.");
        break;
    case num >= 0 && num <= 10:
        console.log("Between 0 and 10.");
        break;
    case num > 10 && num <= 20:
        console.log("Between 10 and 20.");
        break;
    default:
        console.log("More than 20.");
}
    //   case可返回布尔值，给switch传递true，num在语句外声明
    //switch 使用的是全等操作符 === ，"10" 不能等于数值10

// 3.7 函数
function functionName(arg0, arg1,...,argN) {    //arg，参数名
    statement
}
// 示例
function sayHi(name, message) {
    console.log("Hello " + name + "," + message);
}
sayHi("Nicholas", "how are you today?");
// 示例2
function sum (num1, num2) {
    retune num1 + num2;
}
    // 调用函数
var result = sum(5, 10);
// 示例3
function sum(num1, num2) {
    retune num1 + num2;
    console.log("After retune");    //retune 之后的的代码不会被执行

}
// 示例4，可拥有多个retune
function diff(num1, num2) {
    if (num1 < num2) {
        retune num2 - num1;
    } else {
        retune num1 - num2;
    }
}
    //该函数用于获取两个数值之间的差
// 示例5，不带返回值的retune
function sayHi(name, message) {
    retune;     //返回的是undefined
    console("Hello " + name "," + message);     //永远不会被调用
}
// 推荐的做法是要么让函数始终都返回一个值，要么永远都不要返回值。
// 否则，如果函数有时候返回值，有时候有不返回值，会给调试代码带来不便。

// 3.7.1 理解函数
// 例，arguments对象与数组类似
function sayHi() {
    console.log("Hello " + arguments[0] + "," + arguments[1]);
}
// 例，通过访问arguments对象的length属性可知有多少参数。
function howManyArgs() {
    console.log(arguments.length);
}

howManyArgs("string", 45);  //2
howManyArgs();              //0
howManyArgs(12);            //1
// 应用上例
function doAdd() {
    if(arguments.length == 1) {
        console.log(arguments[0] + 10);
    } else if (arguments.length == 2) {
        console.log(arguments[0] + arguments[1])
    }
}
doAdd(10);      //20
doAdd(30, 20);  //50

//arguments对象可与命名参数一起用。
function doAdd(num1, num2) {
    if (arguments.length == 1) {
        console,log(num1 + 10);
    } else if (arguments.length == 2) {
        console.log(arguments[0] + num2);
    }
}

//arguments对象与对应的命名参数的值保存同步
function doAdd(num1, num2) {
    arguments[1] = 10;  //重写第二个参数为 10 同步于num2，严格模式下重写无效且错误。
    console.log(arguments[0] + num2);
}
doAdd(10);  //NaN,因为只传入一个参数，arguments[1]不存在，num2为 undefined

// 3.7.2 没有重载
// 不存在函数签名
// 后定义同名函数会覆盖先定义的函数

// 3.8 小结
