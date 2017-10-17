// 11 DOM 扩展
    // 11.1 选择符 API
        // 11.1.1 querySelector()
            // 取得 body
            var body = document.querySelector("body");

            // ID "myDiv"
            var myDiv = document.querySelector("#myDiv");

            // fisrt class "selected"
            var selected = document.querySelector(".selected");

            // 取得 class 为"button"的第一个 img 元素
            var img = document.body.querySelector("img.button");

        // 11.1.2 querySelectorAll()
            // 类似于 getElementByTagName("em")
            var ems = document.getElementById("myDiv").querySelectorAll("em");

            // class "selected"
            var selected = document.querySelectorAll(".selected");

            // <p> 元素中 <strong>
            var strongs = document.querySelectorAll("p strong");

            // 取得返回的 NodeList
            var i, len, strong;
            for (i = 0, len = strong.length; i < len; i++)
            {
                strong = strongs[i];    // 或者 strongs.item(i)
                stron.className = "important";
            }

        // 11.1.3 matchesSelector()
            // 用来匹配dom元素是否匹配某css selector。
            // 它为一些高级方法的实现提供了基础支持，比如事件代理，parent, closest等。

    // 11.2 遍历元素
        // 解决不同浏览器对于元素之间空格和注释的不同处理问题
        var i,
            len,
            child = element.fisrtChild;
        while (child != element.lastChild)
        {
            if (child.nodeType == 1)
            {
                processChild(child);
            }
            child = child.nextSibing;
        }

        // 可改写为
        var i,
            len,
            child = element.fisrtElementChild;
        while (child != element.lastElementChild)
        {
            processChild(child);
            child = child.nextSibing;
        }

    // 11.3 HTML5
        // 11.3.1 与类相关的扩充
            // 1.getElementByClassName()，新版本浏览器支持
                // 取得所有 class 里包含 username 和 current 的元素，不分先后
                var allCurrentUsernames = document.getElementByClassName("username current");

                // 取得 ID 为 myDiv 的元素中带有 class 为 selected 的所有元素
                var selected = document.getElementById("mydiv").getElementByClassName("selected");

            // 2. classList 属性
                // 操作类名的传统方法
                // <div class="bd user disabled">...</div>
                // 删除 user
                // 取得并拆分成数组
                var classNames = div.className.split(/\s+/);

                // 找到想删的类名
                var pos = -1,
                    i,
                    len;
                for (i = 0, len = classNames.length; i < len; i++)
                {
                    if (classnames[i] == "user")
                    {
                        pos = i;
                        break;
                    }
                }

                // 删除
                classNames.splice(i, 1);

                // 合并并重新设置
                div.className = classNames.join(" ");

                // HTML5 重写
                div.classList.remove("user");

                // 其他方法
                // 删除 disabled 类
                div.classList.remove("disabled");

                // 添加 current 类
                div.classList.add("current");

                // 切换 user 类，也就是有删没添
                div classList.toggle("user");

                // 确定元素中有或没有该类名
                if (div.classList.contains("bd") && !div.clasList.contains("disabled"))
                {
                    // 执行操作
                }

                // 迭代类名
                for (var i = 0; i < div.classList.length; i++)
                {
                    doSomething(div.classList[i]);
                }

            // 11.3.2 焦点管理
                // document.activeElement 属性始终引用 DOM 中获得了焦点的元素
                var button = document.getElementById("myButton");
                button.focus(); // 通过调用 focus 的方式让 button 获得焦点
                console.log(document.activeElement === button);     // true

                // document.hasFocus() 方法确认有没有获得焦点
                var button = document.getElementById("myButton");
                button.focus();
                console.log(document.hasFocus());   // true

            // 11.3.3 HTMLDocument 的变化
                // 1.readyState 属性
                    // 基本用法
                    if (document.readyState == "complete")  // 加载中是 loading
                    {
                        // 某些在网页文档2加载完成后希望做的操作
                    }

                    // 较新的浏览器都支持

                // 2.兼容模式是标准还是混杂的
                    if (document.compatMode == "CSS1Compat")
                    {
                        console.log("Standards mode");  // 标准模式
                    }
                    else
                    {
                        console.log("Quirks mode"); // 混杂模式，值为 BackCompat
                    }

                // 3.head 属性
                    // 类似于 document.body ，建议与后备方案一起用
                    var head = document.head || document.getElementByTagname("head")[0];

            // 11.3.4 字符集属性
                // charest 属性查看文档使用的字符集及设置字符集
                console.log(document.charest);
                document.charest = "UTF-16";

                // defaultCharset 属性，默认的字符集设置
                if (document.charest != document.defaultCharset)
                {
                    console.log("Custom character set being used.");
                }

            // 11.3.5 自定义数据属性
                // <div id="myDiv" data-appId="12345" data-myname="Nicholas"></div>
                var div = document.getElementById("myDiv");

                // 取得自定义属性的值
                var appId = div.dataset.appId;
                var myName = div.dataset.myname;

                // 设置值
                div.dataset.appId = 23456;
                div.dataset.myname = "Michael";

                // 查询值
                if (div.dataset.myname)
                {
                    console.log("Hello, " + div.dataset.myname);
                }

                // 部分浏览器支持

            // 11.3.6 插入标记
                // 1.innerHTML
                    // 见隔壁
                    // 设置字符串
                    div.innerHTML = "Hello world!";

                    // 设置值的解析值不同

                // 2.outerHTML
                    // 读模式下读取上述 HTML 会返回一模一样的代码
                    // 设置值
                    div.outerHTML = "<p>This is a paragraph.</p>";

                    // 与下属代码相同
                    var p = document.createElement("p");
                    p.appendChild(document.createTextNode("This is a paragraph."));
