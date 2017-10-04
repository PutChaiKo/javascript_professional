// 9 客户端检测
    // 优先设计最通用方案，再用特定浏览器的技术增强该方案

    // 9.1 能力检测（特性检测）
        // 基本模式
        if (object.propertyInQuestion)
        {
            // 使用 object.propertyInQuestion
        }

        // 例 IE 5.0 之前不支持 document.getElementById();
        function getElement(id)     // 传入参数 id
        {
            if (document.getElementById)    // 如果通用的标准函数存在
            {
                return document.getElementById(id); // 返回该方法处理的参数
            }
            else if (document.all)  // 检测非标准的函数是否存在
            {
                return document.all[id];    // 返回非标准的属性
            }
            else
            {
                throw new Error("No way to retrieve element!"); // 抛出错误
            }
        }

        // 错误的例子
        function getWindowWidth(){
            if (document.all)   // 通过检测 document.all 函数是否存在来确认浏览器是否是 IE
            {                   // 然而其他浏览器也存在这个函数
                return document.documentElement.clientWidth;    // 返回 IE 浏览器所用的确定宽度的方法
            } else {
                return window.innerWidth;   // 返回 IE8 之前不支持的方法
            }
        }

        // 9.1.1 更可靠的能力检测
            // 不可靠的检测
            function isSortable(objet)  // 检测对象里是不是存在这个属性，以确定能不能对其进行排序
            {
                return !!objet.sort;    // 但这个属性未必是是一个函数
            }

            var result = isSortable({sort : true})；

            // 这样更可靠
            function isSortable(object)
            {
                return typeof object.sort == "function";
            }

            // 尽量使用 typeof 检测函数

            // 下述能力检测在 IE8 及之前的版本中不行
            function hasCreateElement()
            {
                return typeof document.cerateElement == "function";
                // IE8 及之前返回 object 故为 false
            }

            // IE 中的 Active 对象与其他对象行为差异很大
            var xhr = new ActiveXobject("Microsoft.XMLHttp");
            if (xhr.open)   // 这里会发生错误
            {   // 不能直接把函数当作属性访问
                // 执行操作
            }

            // 测试任何对象的某个特性是否存在
            function isHostMethod(object, property) // 传入对象和特性参数
            {
                var t = typeof object[property];    // 用 typeof 检测该特性
                return t == 'function' ||   // 标准模式下返回 function
                (!!(t=='object' && object[property])) ||    // IE8 及之前的返回 object
                t == 'unknown'; // IE 中的 Active 对象返回 unknown
            }

        // 9.1.2 能力检测， 不是浏览器检测
            // 检测某个或某几个特性并不能确定浏览器、
            // Safari 跟进了这两个特性
            var isFirefox = !!(navigator.vendor && navigator.vendorSub)；

            // 前提是未来版本的 IE 不去掉该特性，和其它浏览器不跟进
            var isIE = !!(document.all && document.uniqueID);

            // 检测浏览器是否支持 Netscape 风格插件
            var hasNSPlugins = !!(navigator.plugins && document.plugins.length);

            // 确定浏览器是否具有 DOM1 级规定的能力
            var hasDOM1 = !!(document.getElementById && document.cerateElement &&
                            document.getElementsByTagName);

    // 9.2 怪癖检测

        /*
         *IE8 及更早版本中存在一个 bug，
         *即如果某个实例属性与[[Enumerable]]标记为 false 的某个原型属性同名，
         *那么该实例属性将不会出现在fon-in 循环当中。
         */

        var hasDontEnumQuirk = function()
        {
            var o = {toString : function(){}};  // 创建一个对象,里面包含一个 toString 同名方法
            for(var prop in o)      // 遍历对象 o 中的属性
            {
                if (prop == "toString"){    // 如果属性能检测到属性名为 toString
                    return false;   // 返回 false，也就是该浏览器不存在 bug
                }
            }
            return true;   // 如果检测不到该属性，返回 true
        }();    // 这里表示直接将运行结果赋值给变量

        // Safari 3 之前的“怪癖”
        var hasEnumShadowQuirk = function()
        {
            var o = {toString : function(){}};  // 创建一个对象,里面包含一个 toString 同名方法
            var count = 0;
            for (var prop in o)     // 遍历对象里的属性
            {
                if (prop == "toString")     // Safari 3 之前对象里会出现两个 toString
                {
                    count++;
                }
            }
            return (count > 1);     // 返回 true 则证明存在 bug
        }();

    // 9.3 用户代理检测
        // 9.3.1 用户代理字符串历史

        // 9.3.2 用户代理字符串检测技术
            // 不推荐
            if (isIE6 || isIE7)
            {
                // 代码
            }

            // 推荐
            if (ieVer >= 6)
            {
                // 代码
            }

            // 1.识别呈现引擎
                var client = function(){

                    var engine =
                    {
                        //呈现引擎
                        ie : 0,     // 传入一个经过 parseFloat() 处理的浮点数
                        gecko : 0,
                        webkit : 0,
                        khtml : 0,
                        opera : 0,
                        // 具体版本号
                        ver : null  // 字符串形式保存完整的版本号
                    };

                    // 在此检测呈现引擎、平台和设备

                    return
                    {
                        engine : engine     // 返回属性值为 engine 内容为对象的
                    };
                }();

                if (client.engine.ie) {
                    // 针对 IE 的代码
                }else if (client.engine.gecko > 1.5) {      // 检测是否使用该引擎
                    if (client.engine.ver == "1.8.1") {     // 检测该引擎的具体版本号，字符串形式
                        // 针对这个版本执行某些操作
                    }
                }

                // 第一步检测 Opera
                if (window.opera)   // Opera 5及更高的版本中有这个对象
                {
                    engine.ver = window.opera.version();    // Opera 7.6及更高版本调用 version() 可以获得一个版本号
                    engine.opera = parseFloat(engine.ver);  // 将版本号转换为浮点数保存在对应的引擎中
                }

                // 第二位检测 WebKit
                var ua = navigator.userAgent;   // 先将用户代理字符串保存至变量中

                if (window.opera)
                {
                    engine.ver = window.opera.version();
                    engine.opera = parseFloat(engine.ver);
                }
                else if (/AppleWebKit\/(\S+)/.test(ua))     // 用正则表达式测试是否包含字符串 AppleWebKit
                {                                           // 并使用字符串捕获版本号
                    engine.ver = RegExp["$1"];
                    engine.webkit = parseFloat(engine.ver);
                }

                // 第三检测 KHTML
                var ua = navigator.userAgent;

                if (window.opera)
                {
                    engine.ver = window.opera.version();
                    engine.opera = parseFloat(engine.ver);
                }
                else if (/AppleWebKit\/(\S+)/.test(ua))
                {
                    engine.ver = RegExp["$1"];
                    engine.webkit = parseFloat(engine.ver);
                }
                else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua))
                {       // KHTML 拥有与 WebKit 类似格式的版本号
                    engine.ver = RegExp["$1"];
                    engine.khtml = parseFloat(engine.ver);
                }

                // 最后检测 IE
                var ua = navigator.userAgent;

                if (window.opera)
                {
                    engine.ver = window.opera.version();
                    engine.opera = parseFloat(engine.ver);
                }
                else if (/AppleWebKit\/(\S+)/.test(ua))
                {
                    engine.ver = RegExp["$1"];
                    engine.webkit = parseFloat(engine.ver);
                }
                else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua))
                {
                    engine.ver = RegExp["$1"];
                    engine.khtml = parseFloat(engine.ver);
                }
                else if (/MSIE ([^;]+)/.test(ua))   // IE 的版本号位于字符串 MSIE 后面，分号前面
                {
                    engine.ver = RegExp["$1"];
                    engine.ie = parseFloat(engine.ver);
                }

            // 2.识别浏览器
                var client = function()
                {
                    var engine =
                    {
                        // 呈现引擎
                        ie : 0,
                        gecko : 0,
                        webkit : 0,
                        khtml : 0,
                        opera : 0,

                        // 具体的版本号
                        ver : null
                    };

                    var browser =
                    {
                        // 浏览器
                        ie : 0,
                        firefox : 0,
                        safari : 0,
                        konq : 0,
                        opera : 0,
                        chrome : 0,

                        // 具体版本号
                        ver : null
                    };

                    // 在此检测呈现引擎、平台和设备

                    return {
                        engine : engine,
                        browser : browser
                    };
                }();

                // 呈现引擎和浏览器是混合的代码
                var ua = navigator.userAgent;
                if (window.opera)
                {
                    engine.ver = browser.ver = window.opera.version();
                    engine.opera = browser.opera = parseFloat(engine.ver);
                }
                else if (/AppleWebKit\/(\S+)/.test(ua))
                {
                    engine.ver = RegExp["$1"];
                    engine.webkit = parseFloat(engine.ver);

                    // 分辨 Chrome Safari
                    if (/Chrome\/(\S+)/.test(ua))
                    {
                        browser.ver = RegExp["$1"];
                        browser.chrome = parseFloat[browser.ver];
                    }
                    else if (/Version\/(\S+)/.test(ua))
                    {
                        browser.ver = RegExp["$1"];
                        browser.safari = parseFloat(browser.ver);
                    }
                    else
                    {
                        // 近似地确认版本号
                        var safariVersion = 1;
                        if (engine.webkit < 100)
                        {
                            safariVersion = 1;
                        }
                        else if (engine.webkit < 312)
                        {
                            safariVersion = 1.2;
                        }
                        else if (engine.webkit < 412)
                        {
                            safariVersion = 1.3;
                        }
                        else {
                            safariVersion = 2;
                        }
                    }
                    browser.safari = browser.ver = safariVersion;
                }
                else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua))
                {
                    engine.ver = browser.ver = RegExp["$1"];
                    browser.khtml = browser.konq = parseFloat(engine.ver);
                }
                else if (/rv:([^\)]+)\) Gecko\/\d{8}/.text(ua))
                {
                    engine.ver = RegExp["$1"];
                    engine.gecko = parseFloat(browser.ver);


                    // 确定是不是 Firefox
                    if (/Firefox\/(\S+)/.test(ua))
                    {
                        browser.var = browser.ver = RegExp["$1"];
                        engine.firefox = parseFloat(engine.var);
                    }
                }
                else if (/MSIE ([^;]+)/.test(ua))
                {
                    engine.ver = browser.ver = RegExp["$1"];
                    engine.ie = browser.ie = parseFloat(engine.ver);
                }

                // 可用于以下的逻辑
                if (client.engine.webkit)
                {
                    if (client.browser.chrome)
                    {
                        // 执行针对 Chrome 的代码
                    }
                    else if (client.browser.safari)
                    {
                        // 执行针对 Safari 的代码
                    }
                }
                else if (client.engine.gecko)
                {
                    if (client.browser.firefox)
                    {
                        // 执行针对 Firefox 的代码
                    }
                    else
                    {
                        // 执行针对其他 Gecko 浏览器的代码
                    }
                }

            // 3.识别平台
                var client = function()
                {
                    var engine =
                    {
                        // 呈现引擎
                        ie : 0,
                        gecko : 0,
                        webkit : 0,
                        khtml : 0,
                        opera : 0,

                        // 具体的版本号
                        ver : null
                    };

                    var browser =
                    {
                        // 浏览器
                        ie : 0,
                        firefox : 0,
                        safari : 0,
                        konq : 0,
                        opera : 0,
                        chrome : 0,

                        // 具体版本号
                        ver : null
                    };

                    var system =
                    {
                        win : false,
                        mac : false,
                        x11 : false
                    };

                    // 在此检测呈现引擎、平台和设备

                    return {
                        engine : engine,
                        browser : browser,
                        system : system
                    };
                }();

                // 识别代码
                var p = navigator.platform;
                system.win = p.indexOf("Win") == 0;     // 检测 Win 字符串值不是在 0 位
                system.mac = p.indexOf("Mac") == 0;
                system.x11 = (p.indexOf("X11") == 0) || (p.indexOf("Linux") == 0);

            // 4.识别 Windows 操作系统
                // 因书籍出版年限问题，只到 win7
                // /Win(?:dows )?([^do]{2})/   // 查找 Win 或者 Windows 后面跟着两个非空字符串
                // /Win(?:dows )?([^do]{2})(\d+\.\d+)?/    // 后面跟着一个带小数点的小数
                // /Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/ // 可能会出现的空格

                // 保存至 system.win
                if (system.win) {
                    if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/ )
                    {
                        if (RegExp["$1"] == "NT")
                        {
                            switch (RegExp["$2"])
                            {
                                case "5.0":
                                    system.win = "2000";
                                    break;
                                case "5.1":
                                    system.win = "XP";
                                    break;
                                case "6.0":
                                    system.win = "Vista";
                                    break;
                                case "6.1":
                                    system.win = "7";
                                    break;
                                default:
                                    system.win = "NT";
                                    break;
                            }
                        }
                        else if (RegExp["$1"] == "9x")
                        {
                            system.win = "ME";
                        }
                        else
                        {
                            system.win = RegExp["$1"];
                        }
                    }
                }

                // 可编写以下代码
                if (client.system.win) {
                    if (client.system.win == "XP") {
                        // 说明是 XP
                    } else if (client.system.win == "Vista") {
                        // 说明是 Vista
                    }
                }

            // 5.识别移动设备
                var client = function()
                {
                    var engine =
                    {
                        // 呈现引擎
                        ie : 0,
                        gecko : 0,
                        webkit : 0,
                        khtml : 0,
                        opera : 0,

                        // 具体的版本号
                        ver : null
                    };

                    var browser =
                    {
                        // 浏览器
                        ie : 0,
                        firefox : 0,
                        safari : 0,
                        konq : 0,
                        opera : 0,
                        chrome : 0,

                        // 具体版本号
                        ver : null
                    };

                    var system =
                    {
                        win : false,
                        mac : false,
                        x11 : false,

                        // 移动设备
                        iphone : false,
                        ipod : false,
                        ipad : false,
                        ios : false,
                        android : false,
                        nokiaN : false,
                        winMobile : false
                    };

                    // 在此检测呈现引擎、平台和设备

                    return {
                        engine : engine,
                        browser : browser,
                        system : system
                    };
                }();

                // 轻松分辨苹果设备
                system.iphone = ua.indexOf("iPhone") > -1;
                system.ipod = ua.indexOf("iPod") > -1;
                system.ipad = ua.indexOf("iPad") > -1;

                // 检测 IOS 的版本号
                if (system.mac && ua.indexOf("Mobile") > -1)
                {
                    if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua))
                    {
                        system.ios = parseFloat(RegExp.$1.replace("_", "."));
                    }
                    else
                    {
                        system.ios = 2;     // 不能检测，只能猜测
                    }
                }

                // Android 版本号
                if (/Android (\d+\.\d+)/.test(ua))
                {
                    system.android = parseFloat(RegExp.$1);
                }

                // 诺基亚 N 系列手机
                system.nokiaN = ua.indexOf("NokiaN") > -1;

                // 可用写以下代码
                if (client.engine.webkit)
                {
                    if (client.system.ios)
                    {
                        // iOS 手机内容
                    }
                    else if
                    (client.system.android)
                    {
                        // Android 手机内容
                    }
                    else if (client.system.nokiaN)
                    {
                        // 诺基亚手机内容
                    }
                }

                // Windows Mobile
                if (system.win == "CE") {
                    system.winMobile = system.win;
                } else if (system.win == "Ph") {
                    if (/Windows Phone OS (\d+.\d+)/.test(ua)) {
                        system.win = "phone";
                        system.winMobile = parseFloat(RegExp["$1"])
                    }
                }

            // 6.识别游戏系统
                var client = function()
                {
                    var engine =
                    {
                        // 呈现引擎
                        ie : 0,
                        gecko : 0,
                        webkit : 0,
                        khtml : 0,
                        opera : 0,

                        // 具体的版本号
                        ver : null
                    };

                    var browser =
                    {
                        // 浏览器
                        ie : 0,
                        firefox : 0,
                        safari : 0,
                        konq : 0,
                        opera : 0,
                        chrome : 0,

                        // 具体版本号
                        ver : null
                    };

                    var system =
                    {
                        win : false,
                        mac : false,
                        x11 : false,

                        // 移动设备
                        iphone : false,
                        ipod : false,
                        ipad : false,
                        ios : false,
                        android : false,
                        nokiaN : false,
                        winMobile : false,

                        // 游戏系统
                        wii : false,
                        ps : false,
                    };

                    // 在此检测呈现引擎、平台和设备

                    return {
                        engine : engine,
                        browser : browser,
                        system : system
                    };
                }();

                // 检测代码
                system.will = ua.indexOf("Wii") > -1;
                system.ps = /playstation/i.test(ua);

        // 9.3.3 完整的代码
