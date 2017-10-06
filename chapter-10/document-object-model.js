// 10 DOM
    // 10.1 节点层次

        /*
         *文档节点是每个文档的根节点
         *在简单的例子中，文档节点只有一个一个子节点，也就是<html>元素
         *也被称为文档元素，是文档的最外层元素，其它元素包含其中
         *每个文档只能有一个文档元素
         *html 页面中始终是<html>
         *XML 中任何元素都可以成为文档元素
         */

         // 10.1.1 Node 类型
            // 每个节点有一个 nodeType 属性，用于表明节点类型
            if (someNode.nodeType == Node.ELEMENT_NODE) // IE 中无效
            {
                console.log("Node is a element");
            }

            // noteType 属性与数字值比较
            if (someNode.noteType == 1)     // 适用于所有浏览器
            {
                console.log("Note is an element");
            }

            // 1. nodeName nodeValue 属性
                if (someNode.nodeType == 1)     // 先检测节点类型是不是元素
                {
                    value = someNode.nodeName;  // nodeName的值是元素的标签名
                }                               // nodeValue 的值始终是 null

            // 2.节点关系
                var firstChild = someNode.childNode[0];
                var secondChild = someNode.childNode.item(1);
                var count = someNode.childNode.length;

                // 将 NodeList 对象转换为数组
                // 在 IE8 及之前的版本中无效
                var arrayOfNode = Array.prototype.slice.call(someNode.childNodes, 0 );

                // 兼容性代码
                function convertToArray(nodes) {
                    var array = null;
                    try {
                        array = Array.prototype.slice.call(nodes, 0);
                    } catch (ex) {
                        array = new array();
                        for (var i = 0, len = nodes.length; i < len; i++) {
                            array.push(nodes[i]);
                        }
                    }
                    return array;
                }

                // 同辈访问
                if (someNode.nextSibling === null){
                    console.log("Last node in the parent's childNodes list.");
                } else if (someNode.previousSlbling === null) {
                    console.log("First node in the parent's childNodes");
                }

                hasChildNodes();    // 返回 true 等，用于查询是否有子节点
                // ownerDocument 属性指向表示整个文档的文档节点

            // 3.操作节点
                // 将新节点添加到 childNode 列表末尾添加一个节点，并返回至变量
                var returnedNode = someNode.appendChild(newNode);
                console.log(returnedNode == newNode);           // true
                console.log(someNode.lastChild == newNode);     // true

                // 如果该节点已经是文档的一部分，那就是从原位置转移到新位置
                // someNode 有多个节点
                var returnedNode = someNode.appendChild(someNode.firstChild);
                console.log(returnedNode == someNode.firstChild);   // false
                console.log(returnedNode == someNode.lastChild);    // true

                // insertBefore() 方法，传入要插入的节点和参照节点作为参考
                // 插入成为最后一个节点
                returnedNode = someNode.insertBefore(newNode, null);
                console.log(newNode == someNode.lastChild);

                // 插入后成为第一个节点
                var returnedNode = someNode.insertBefore(newNode, someNode.firstChild);
                console.log(returnedNode == newNode);           // true
                console.log(newNode == someNode.firstChild);    // true

                // 插入到最后一个节点前面
                returnedNode = someNode.insertBefore(newNode, someNode.firstChild);
                console.log(newNode == someNode.firstChild[someNode.childNodes.length - 2]);

                // replaceChild() 被替换的节点被返回至变量
                // 替换第一个节点
                var returnedNode = someNode.replaceChild(newNode, someNode.firstChild);

                // 替换最后一个节点
                returnedNode = someNode.replaceChild(newNode, someNode.lastChild);

                // removeChild()
                // 用前先检验是不是存在子节点，否则会错误
                var formerFirstChild = someNode.removeChild(someNode.firstChild);
                var formerLastChild = someNode.removeChild(someNode.lastChild);

            // 4.其他方法
                // cloneNode() 方法
                var deepList = myList.cloneNode(true);
                console.log(deepList.childNodes.length);    // 3 或 7，深复制节点和整个节点数，IE < 9 与其他浏览器不同

                var shallowList = myList.cloneNode(false);
                console.log(shallowList.childNode.length);  // 0，浅复制，复制节点本身

                // normalize()
                // 处理文档树中的文本节点

        // 10.1.2 Document 类型
            // 1.文档的子节点
                var html = document.documentElement;    // 只包含一个节点 <html> 可以直接访问
                console.log(html === document.childNodes[0]);   // true
                console.log(html === document.firstChild);      // true

                var body = document.body;   // 直接取得对<body>的引用

                var doctype = document.doctype; // 取得对<!DOCTYPE>的引用

            // 2.文档信息
                // 取得文档标题
                var originalTitle = document.title;

                // 设置文档标题
                document.title = "New page title";      // 不会改变<title>元素

                // 取得完整的 URL
                var url = document.URL;

                // 取得域名
                var domain = document.domain;

                // 取得来源页面的 URL
                var referrer = document.referrer;

                // document.domain 可以设置
                // 假设页面来自 p2p.wrox.com 域
                document.domain = "wrox.com";           // 成功
                document.domain = "nczonlione.net";     // 出错

                // loose can not reset to tight
                // 假设页面来自 p2p.wrox.com 域
                document.domain = "wrox.com";           // 成功
                document.domain = "p2p.wrox.com";       // 出错

            // 3.查找元素
                var div = document.getElementById("myDiv");     // 取得<div id="myDiv">元素的引用
                var div = document.getElementById("mydiv");     // 无效，ID 区分大小写，但在 IE7 之前版本可用

                // 如果存在两个相同的 ID 则返回最开始的那个
                // IE7 及低版本中存在一个 bug 表单元素中 name 特性若与 ID 同名将会被返回

                // 取得页面所有的<img>元素并返回一个 HTMLCollection
                var images = document.getElementsByTagName("img");
                console.log(images.length);         // 输出图像的数量
                console.log(images[0].src);         // 输出第一个图像元素的 src 特性
                console.log(images.item(0).src);    // 同上

                // namedItem() 方法
                var myImage = images.namedItem("myImage");      // <img src="xxx.jpg" name="myImage">
                var myImage = images["myImage"];                // 同上

                var allElements = document.getElementsByTagName("*");   // 表示取得文档里所有的元素
                // IE 将注释也实现为元素，所以在返回之中

                // getElementsByName()
                var radio = document.getElementsByName("color");    // 返回一个动态 HTMLCollection

            // 4.特殊集合
                // document.anchors 文档中所有带有 name 特性的<a>元素
                // document.links 包含文档中所有带 href 特性的<a>元素

            // 5.DOM一致性检测
                // 检测浏览器是否能实现 XML 1.0版本的功能
                // 传入 DOM 功能名称及版本号作为参数，返回布尔值
                // 特殊情况下浏览器可能会欺骗你，最好还要加上能力检测
                var hasXmlDom = document.implementation.hasFeature("XML", "1.0");

            // 6.文档写入

        // 10.1.3 Element 类型
            // <div id="myDiv"></div>
            var div = document.getElementById("myDiv");
            console.log(div.tagName);                   // DIV，在 HTML 中输出大写的元素标签名
            console.log(div.tagName == div.nodeName);   // true

            if (element.tagName == "div")   // 容易出错
            {
                // 某些操作
            }

            if (element.tagName.toLowerCase() == "div") // 适用于所有文档
            {
                // 某些操作
            }

            // 1.HTML 元素
                // <div id="myDiv" class="bd" title="Body text" lang="en" dir="ltr"></div>
                var div = document.getElementById("myDiv");
                console.log(div.id);        // myDiv
                console.log(div.className); // bd，获取元素 class 特性，因为 class 是 JS 保留字
                console.log(div.title);     // Body text-left
                console.log(div.lang);      // en
                console.log(div.dir);       // ltr

                // 可以给属性赋值来修改对应的特性
                div.id = "someOtherId";
                div.className = "ft";
                div.title = "Some other text";
                div.lang = "fr";
                div.dir = "rtl";

            // 2.取得特性
                var div = document.getElementById("myDiv");
                console.log(div.getAttribute("id"));        // myDiv
                console.log(div.getAttribute("class"));     // bd，传递 class 与对象属性访问不同
                console.log(div.getAttribute("title"));     // Body text
                console.log(div.getAttribute("lang"));      // en
                console.log(div.getAttribute("dir"));       // "ltr"
                console.log(div.getAttribute("NoExist"));   // null，传入不存在的特性

                // 上述方法可以获取自定义特性
                // <div id="myDiv" my_special_attribute="hello!"></div>
                var value = div.getAttribute("my_special_attribute");

                /*
                 * 特征名称不区分大小写，ID 和 id 代表同一个特性
                 * HTML5标准要求自定义特性应加上 data- 前缀以便验证
                 */

                // 自定义特性不可以通过 DOM 元素本身的属性来访问
                // <div id="myDiv" align="left" my_special_attribute="hello!"></div>
                console.log(div.id);                    // myDiv
                console.log(div.my_special_attribute);  // undefined，IE 除外
                console.log(div.align);                 // left

                /*
                 * 属性值与通过 getAttribute() 返回的值不同
                 * style
                 * getAttribute() 访问返回 CSS 文本
                 * 属性访问返回一个对象
                 * onclick 等类似的事件处理程序
                 * getAttribute() 访问返回 JS 代码字符串
                 * 属性访问返回一个 JS 函数
                 * 如果在元素未指定相应的特性返回 null
                 * 因此，优先使用对象属性的方式来访问
                 * getAttribute() 只用于取得自定义特征值的情况
                 */

            // 3.设置特性
                // setAttribute()
                div.setAttribute("id", "someOtherId");  // 传入特性名会被自动替换为小写
                div.setAttribute("class","ft");
                div.setAttribute("title", "Some other text");
                div.setAttribute("lang", "fr");
                div.setAttribute("dir", "rtl");

                // 所有特性是属性，给属性赋值可以设置特性的值
                div.id = "someOtherId";
                div.align = "left";

                // 自定义属性不会自动成为元素的特性
                div.mycolor = "red";
                console.log(div.getAttribute("myclolor"));  // null，IE除外

                // removeAttribute()
                div.removeAttribute("class");

            // 4.attributes 属性
                // 获取元素的 id 特性的值
                var id = element.attributes.getNamedItem("id").nodeValue;

                /*
                 * element 为获取了元素的变量
                 * attributes 作为元素的属性
                 * getNamedItem() 为返回 nodeName 与传入字符串匹配的节点
                 * nodeValue 返回节点的值
                 */

                var id = element.attributes["id"].nodeValue;    // 同上

                // 设置特性的值
                element.attributes["id"].nodeValue = "someOtherId"; // 取值并赋新值

                // removeNameItem() 方法会返回值 removeAttribute() 方法不会
                var oldAttr = element.attributes.removeNameItem("id");

                // setNamedItem() 为元素添加一个新特性
                element.attributes.setNamedItem(newAttr)

                // 以上方法均不常用
                // 但可用于遍历元素的特性
                function outputAttributes(element)
                {
                    var pairs = new Array(),
                        attrName,
                        attrValue,
                        i,
                        len;

                    for (i = 0, len = element.attributes.length; i < len; i++)
                    {
                        attrName = element.attributes[i].nodeName;
                        attrValue = element.attributes[i].nodeValue;
                        pairs.push(attrName + "=\"" + attrValue + "\"");
                    }
                    return pairs.join(" ");
                }

                // 针对 IE 做出的改进
                function outputAttributes(element)
                {
                    var pairs = new Array(),
                        attrName,
                        attrValue,
                        i,
                        len;

                    for (i = 0, len = element.attributes.length; i < len; i++)
                    {
                        attrName = element.attributes[i].nodeName;
                        attrValue = element.attributes[i].nodeValue;
                        if (element.attributes[i].specified)
                        {
                            pairs.push(attrName + "=\"" + attrValue + "\"")
                        }
                    }
                    return pairs.join(" ");
                }

            // 5.创建元素
                var div = document.createElement("div");
                div.id = "myNewDiv";
                div.className = "box";

                // 将元素添加到文档树
                document.body.appendChild(div);

                // IE 中可以传入完整的元素标签创建元素

            // 6.元素的子节点
                // html 代码见隔壁文件
                // 不同浏览器解析节点不同，操作之前先检测一下 nodeType 属性
                for (var i = 0, len = element.childNodes.length; i < len; i++)
                {
                    if (element.childNodes[i].nodeType == 1)    // 1 表示是元素类型的节点
                    {
                        // 执行某些操作
                    }
                }

                // 标签名取得子节点及后代节点
                var ul = document.getElementById("myList");
                var item = ul.getElementsByTagName("li");   // 搜索起点是 ul

        // 10.1.4 Text 类型
            var textNode = div.firstChild;  // 或者 div.childNodes[0] 取得文本子节点
            div.firstChild.nodeValue = "Some other message";    // 修改子节点

            // 修改时会被 HTML 编码转义
            // 输出结果是"Some &lt;strong&gt;other&lt;/strong&gt; message"
            div.firstChild.nodeValue = "Some <strong>other</strong>message";

            // 1.创建文本节点
                var textNode = document.createTextNode("<strong>Hello</strong> world!");

                // 下述创建<div>元素并在其中添加一条消息
                var element = document.createElement("div");    // 创建一个<div>元素
                element.className = "message";  // 将<div>元素的 class 特性值设置为 message

                var textNode = document.createTextNode("Hello World!"); // 创建文本节点并赋值
                element.appendChild(textNode);  // 将文本节点放置至 <div>元素最后

                document.body.appendChild(element); // 将<div>元素放置在<body>最后

                // 元素包含多个节点
                var element = document.createElement("div");
                element.className = "message";

                var textNode = document.createTextNode("Hello world!");
                element.appendChild(textNode);

                var anotherTextNode = document.createTextNode("Yippee!");
                element.appendChild(anotherTextNode);

                document.body.appendChild(element);

            // 2.规范文本节点
                // normalize()
                var element = document.createElement("div");
                element.className = "message";

                var textNode = document.createTextNode("Hello world!");
                element.appendChild(textNode);

                var anotherTextNode = document.createTextNode("Yippee!");
                element.appendChild(anotherTextNode);

                console.log(element.childNodes.length);     // 2

                element.normalize();

                console.log(element.childNodes.length);     // 1
                console.log(element.firstChild.nodeValue);  // Hello world!Yippee!

        // 10.1.5 Comment 类型
            // <div id="myDiv"><!--A comment --></div>
            var div = document.getElementById("myDiv");
            var comment = div.firstChild;
            console.log(comment.data);  // A comment

            //  创建节点
            var comment = document.createComment("A comment");

        // 10.1.6 CDATASection 类型
            // 只针对 XML 文档的类型

        // 10.1.7 DocumentType 类型
            // name 属性保存着文档类型的名称，也就是出现在<!DOCTYPE之后的文本
            // <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
            //     "http://www.w3.org/TR/html4/strict.dtd">

            alert(document.doctype.name); //"HTML"

        // 10.1.8 DocumentFragment 类型
            // 文档片段
            // 可作为一个“仓库”保存将来可能会添加到文档的节点
            // 创建文档片段
            var fragment = document.createDocumentFragment();

            // 例子
            // <ul id="mylist"></ul>
            // 一次性将三个列表项添加到<ul>元素中
            var fragment = document.createDocumentFragment();   // 创建引用文档片段
            var ul = document.getElementById("myList");     // 引用<ul>
            var li = null;  // 新建一个空的变量

            for (var i = 0; i < 3; i++)     // 循环添加3个<li>元素
            {
                li = document.createElement("li");  // 创建<li>元素

                // 创建文本节点赋值并添加至<li>子节点
                li.appendChild(document.createTextNode("Item " + (i +1)));
                fragment.appendChild(li);   // 将<li>节点添加至文档片段子节点，开始下一个循环
            }

            ul.appendChild(fragment);   // 将文档片段的子节点们一次性转移至<ul>元素下

        // 10.1.9 Attr 类型
            // 元素的特性
            // 与 Element 的 attributes 属性功能重叠

    // 10.2 DOM 操作技术
        // 10.2.1 动态脚本
            // <script type="text/javascript" src="client.js"></script>
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "client.js";
            document.body.appendChild(script);  // 也可以把元素添加至<head>

            // 函数封装
            function loadScript(url)    // 传入链接的字符串参数
            {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url;
                document.body.appendChild(script);
            }

            // 调用函数
            loadScript("client.js");

            // 行内方式
            // 直观的写法
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.appendChild(document.createTextNode("function sayHi(){alert('hi');}"));
            document.body.appendChild(script);

            // IE 中不允许 DOM 访问 script 元素的子节点
            // 使用<script>的 text 属性来制定代码可以避免这个问题
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.text = "function sayHi(){alert('hi!');}";
            document.body.appendChild(script);

            // Safari 3.0之前不支持 text 属性，但可以通过问问节点技术指定代码
            var script = document.createElement("script");
            script.type = "text/javascript";
            var code = "function sayHi(){alert('hi');}";

            try
            {
                script.appendChild(document.createTextNode(code));
            }
            catch (ex)  // IE 中执行上述代码会抛出错误
            {
                script.text = code;
            }
            document.body.appendChild(script);

            // 用函数进行封装
            function loadScript(code)   // 传入参数为字符串
            {
                var script = document.createElement("script");
                script.type = "text/javascript";
                try
                {
                    document.appendChild(document.createTextNode(code));
                }
                catch (ex)
                {
                    script.text = code;
                }
                document.body.appendChild(script);
            }

            // 调用方法
            loadScript("function sayHi(){alert('hi');}");

        // 10.2.2 动态样式
            // <link rel="stylesheet" type="text/css" href="styles.css">
