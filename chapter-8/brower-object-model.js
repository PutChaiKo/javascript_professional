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

        // 8.1.2 窗口关系及框架
            // 页面可以包括多个框架
            top.frames[0];
            top.frames["topFrame"];

            // parent 父对象指向当前框架的直接上层框架
            // window 对象 name 属性一般不包含任何值

        // 8.1.3 窗口位置
            // 建议不要在 Opera 使用下面方法
            var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
            var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;

        // 8.1.4 窗口大小
            // 页面视口大小
            var pageWidth = window.innerWidth,  // IE9+、Firefox、Safari、Opera 和 Chrome 提供的属性
                pageHeight = window.innerHeight;    // 返回的是窗口本身的尺寸

            if (typeof pageWidth != "number")
            {
                if (document.compatMode == "CSS1Compat")    // 是否处于标准模式
                {
                    pageWidth = document.documentElement.clientWidth;   // viewport 视口的大小
                    pageHeight = document.documentElement.clientHeight;
                }
                else
                {   // 混杂模式下
                     pageWidth = document.body.clientWidth; // viewport 视口的大小
                     pageHeight = document.body.clientHeight;
                }
            }

            // 移动设备的视口话题非常复杂

            // 调整浏览器窗口大小，可能默认被禁用
            //  调整到 100 x 100
            window.resizeTo(100, 100);

            // 调整到 200 x 150
            window.resizeBy(100, 50);   // 基于现有的窗口调整宽高差

            // 调整到 300 x 300
            window.resizeTo(300,300);

        // 8.1.5 导航和打开窗口
            // 等同于<a htrf="http://www.wrox.com" target="topFrame"></a>
            window.open("http://www.worx.com", "topFrame");     // URL 和窗口目标

            // 1.弹出窗口
                window.open("http://www.wrox.com", "wroxWindow",
                            "height=400,width=400,top=10,left=10,resizable=yes");   // 特性字符串中不允许出现空格
                // 打开一个初始大小为400 x 400像素、距屏幕上缘和左边各10像素，可以调整大小的新窗口

                // window.open() 方法返回的引用允许对其进行更多控制
                var wroxWin = window.open("http://www.wrox.com", "wroxWindow",
                                            "height=400,width=400,top=10,left=10,resizable=yes");
                // 调整大小
                wroxWin.resizeTo(1500, 1500);

                // 移动位置
                wroxWin.moveTo(100, 100);

                // 关闭窗口
                wroxWin.close();
                console.log(wroxWin.closed);    // true

                // 新窗口有指针指向原网页
                var wroxWin = window.open("http://www.wrox.com", "wroxWindow",
                                            "height=400,width=400,top=10,left=10,resizable=yes");
                console.log(wroxWin.opener == window);  // true

                // 原网页并没有指针指向已经打开了的新网页
                // 网页之间沟通只能自力更生

                // 可以设置分别在独立进程里运行切断两个网页之间的沟通
                var wroxWin = window.open("http://www.wrox.com", "wroxWindow",
                                            "height=400,width=400,top=10,left=10,resizable=yes");
                var wroxWin = null;

            // 2.安全限制
                // 弹出窗口受到了不同浏览器各种各样的限制，只能由用户主动打开
                // 本地网页很多浏览器不做限制，一旦部署到服务器上，弹出窗口便受限制

            // 3.弹出窗口屏蔽程序
                // 程序内置屏蔽程序阻止会返回 null
                var wroxWin = window.open("http://wwww.wrox.com", "_blank");
                if (wroxWin == null)
                {
                    console.log("The popup was blocked!");
                }

                // 浏览器扩展程序或其他程序阻止弹出窗口， window.open() 会抛出错误
                var blocked = false;

                try
                {
                    var wroxWin = window.open("http://www.wrox.com", "_blank");
                    if (wroxWin == null)
                    {
                        blocked = true;
                    }
                }
                catch (ex)
                {
                    blocked = true;
                }

                if (block)
                {
                    console.log("The popup was blocked!");
                }

        // 8.1.6 间歇调用与超时调用
            // 不建议传递字符串，可能导致性能损失
            setTimeout("console.log('Hello world!')", 1000);

            // 推荐的方法
            setTimeout(function()
            {
                console.log("Hello world!");
            }, 1000);

            // 超时调用 ID
            // 设置超时调用
            var setTimeoutId = setTimeout(function ()
            {
                console.log("Hello world");
            }, 1000);

            // 取消
            clearTimeout(setTimeoutId);

            // 间歇调用
            // 不推荐传递字符串
            setInterval("console.log('Hello world!')", 10000);

            // 推荐的调用方式
            setInterval(function()
            {
                console.log("Hello, world!");
            }, 10000);

            // 例子
            var num = 0;
            var max = 10;
            var intervalId = null;

            function incrementNumber()
            {
                num++;

                if(num == max)
                {
                    clearInterval(intervalId);
                    console.log("Done");
                }
            }

            intervalId = setInterval(incrementNumber, 500);

            // 超时调用实现
            var num = 0;
            var max = 10;
            function incrementNumber()
            {
                num++;

                if (num < max)
                {
                    setTimeout(incrementNumber, 500);
                }
                else
                {
                    console.log("Done");
                }
            }

            setTimeout(incrementNumber, 500);

        // 8.1.7 系统对话框
            var result = prompt("What is your name", "");
            if (result !== null){
                alert("Welcome, " + result);
            }

            // 打印
            window.print();

            // 查找
            window.find();

    // 8.2 location 对象
        // window.location与document.location是同一个对象

        // 8.2.1 查询字符串参数
            function getQueryStringArgs(){
                // 取得查询字符串并去掉开头的问号
                var qs = (location.search.length > 0 ? location.search.substring(1) : ""),

                // 保存数据对象
                args = {},  // 字面量形式创建用于保存参数的空对象

                // 取得每一项
                items = qs.length ? qs.split("&") : [], // 如果 qs 的长度不为 0 则用 & 分割字符并保存至数组中
                item = null,
                    name = null,
                    value = null,

                    // 在 for 循环中使用
                    i = 0,
                    len = items.length;

                // 逐个将每一项添加到 args 对象中
                for (i = 0; i < len; i++)
                {
                    item = items[i].split("="); // 将用 & 分割的字符取一个出来，依据 = 分割
                    name = decodeURIComponent(item[0]); // 分割后的字符去一个出来
                    value = decodeURIComponent(item[1]);    // 对编码后的 URI 进行解码

                    if (name.length){
                        args[name] = value; // 对象的属性名和属性值一一对应
                    }
                }

                return args;    // 对象返回至函数本身
            }

        // 8.2.2 位置操作
            // 以下均打开新 URL 并新增一条历史记录
            location.assign("http://www.wrox.com");
            window.location = "http://www.wrox.com";    // 会调用 assign()
            location.href = "http://www.wrox.com";      // 会调用 assign()

            // http://www.wrox.com/WileyCDA/
            // http://www.wrox.com/WileyCDA/#section1
            location.hash = "#section1";

            // http://www.wrox.com/WileyCDA/?q=javascript
            location.search = "?q=javascript";

            // http://www.yahoo.com/WileyCDA/
            location.hostname = "www.yahoo.com";

            // http://www.yahoo.com/mydir/
            location.pathname = "mydir";

            // http://www.yahoo.com:8080/WileyCDA/
            location.port = 8080;

            // 清除当前历史记录，不能返回
            setTimeout(function(){
                location.replace("http://www.wrox.com");
            }, 1000);

            // reload，最好放在代码最后一行
            location.reload();      // 最有效的方式加载
            location.reload(true);  // 从服务器程序加载
    // 8.3 navigator 对象
        // 一般用于检测显示网页的浏览器类型

        // 8.3.1 检测插件
            // 检测插件 在 IE 无效
            // navigator.plugins 保存着插件信息的数组
            function hasPlugin(name)    // 传入参数，插件名称的字符串
            {
                name = name.toLowerCase();  // 将传入字符串转换为小写
                for (var i = 0; i < navigator.plugins.length; i++)  // 遍历数组
                {

                    // 从数组的 i 个元素里取出 name 属性值并转换成小写
                    // 用indexOf() 查询插件名称在 name 的字符串里首次出现的位置
                    if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
                        return true;
                    }
                }
                return false;
            }

            // Flash
            console.log(hasPlugin("Flash"));

            // QuickTime
            console.log(hasPlugin("QuickTime"));

            // IE 中检测插件
            function hasIEPlugin(name)  // 传入插件的 COM 唯一标识符
            {
                try
                {
                    new ActiveXobject(name);    // 尝试创建 IE 专用的类型的实例
                    return true;    // 实例化成功返回 true
                }
                catch (ex)
                {
                    return false;   // 创建未知 COM 对象会抛出错误
                }
            }

            // 检测 Flash
            console.log(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));

            // 检测 QuickTime
            console.log(hasIEPlugin("QuickTime.QuickTime"));

            //针对每个插件分别创建检测函数
            function hasFlash()
            {
                var result = hasPlugin("Flash");
                if(!result){
                    result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash");
                }
                return result;
            }

            function hasQuickTime(){
                var result = hasPlugin("QuickTime");
                if (!result) {
                    result = hasIEPlugin("QuickTime.QuickTime");
                }
                return result;
            }

            // 检测 Flash
            console.log(hasFlash());

            //检测 QuickTime
            console.log(hasQuickTime());

        // 8.3.2 注册处理程序
            // 这是啥？

    // 8.4 screen 对象
        // screen 对象用来表明客户端的能力
        // 可用于调整窗口大小至全屏，但一般都被禁用了
        window.resizeTo(screen.availWidth, screen.availHeight); // 传入的数据为未被系统占用的宽度和高度值

    // 8.5 history 对象
        // 是 window 对象的属性，每个框架都有自己的 history 属性
        // 不能读取链接，但可以实现前进后退等
        history.go(-1);     // 后退一页
        history.go(1);      // 前进一页
        history.go(2);      // 前进两页

        // 可以传入字符串跳转到最近的包含该字符串的网页
        history.go("wrox.com");     // 可能前进也可能后退
        history.go("nczonline.net");    // 要是历史记录中不包含该字符串则说明也不做

        //简写
        history.back();
        history.forward();

        // length 属性
        if (history.length === 0) {
            console.log("用户打开的第一个网页");
        }
