// 12 DOM2 和 DOM3
    /*
     * DOM1级定义 HTML 和 XML 文档底层结构
     * DOM2 和 3 在此基础上添了更多的交互功能，分为模块如下
     * DOM Level 2 Core
     * DOM Level 2 Views
     * DOM Level 2 Events
     * DOM Level 2 Style
     * DOM Level 2 Traversal and Range
     * DOM Level 2 HTML
     */

    // 12.1 DOM 变化
        // 确认浏览器是否支持这些 DOM 模块，返回 true
        var supportsDOM2Core = document.implementation.hasFeature("Core", "2.0");
        var supportsDOM3Core = document.implementation.hasFeature("Core", "3.0");
        var supportsDOM2HTML = document.implementation.hasFeature("HTML", "2.0");
        var supportsDOM2Views = document.implementation.hasFeature("Views", "2.0");
        var supportsDOM2XML = document.implementation.hasFeature("XML", "2.0");

        // 12.1.1 XML 命名空间的变化
        // 见隔壁

            // 1.Node 类型的变化
                // DOM 2 中包含命名空间的特性
                // localName 不带命名空间前缀的节点名称
                // namespaceURI 命名空间 URI 或 null
                // prefix 命名空间前缀或者 null

                /*
                 * 例子，也可见隔壁
                 <html xmlns="http://www.w3.org/1999/xhtml">
                     <head>
                         <title>Example XHTML page</title>
                     </head>
                     <body>
                         <s:svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                             viewBox="0 0 100 100" style="width: 100%; height:100%">
                             <s:rect x="0" y="0" width="100" height="100" style="fill:red"/>
                         </s:svg>
                     </body>
                 </html>
                 */

                 /*
                  * 对于<html>元素来说
                  * localName 与 tagName 为 html
                  * namespaceURI 为 http://www.w3.org/1999/xhtml
                  * prefix 为 null
                  * 对于是<s:svg>元素来说
                  * localName : svg
                  * tagName : s:svg
                  * namespaceURI : http://www.w3.org/2000/svg
                  * prefix : s
                  */

                //  DOM 3 的变化
                // isDefaultNamespace(namespaceURI) 在指定的 namespaceURI 是当前默认命名空间的情况下返回 true
                // lookupNamespaceURI(prefix) 返回给定 prefix 的命名空间
                // lookupPrefix(namespaceURI) 返回给定 namespaceURI 的前缀

                //可用于以下代码
                console.log(document.body.isDefaultNamespace"http://www.w3.org/1999/xhtml");
                // 返回 true

                // 假设 svg 中包含着对<s:svg>的引用
                console.log(svg.lookupPrefix("http://www.w3.org/2000/svg"));    // s
                console.log(svg.lookupNamespaceURI("s"));   // http://www.w3.org/2000/svg

            // 2.Document 类型的变化
                // DOM 2 Document 类型发生变化
                // 使用给定的 tagName 创建一个属于命名空间的 namespaceURI 的新元素
                // createElementNS(namespaceURI, tagName)

                // 使用给定的 attributeName 创建一个属于命名空间 namespaceURI 的新特性
                // createAttributeNS(namespaceURI, attributeName)

                // 返回属于命名空间 namespaceURI 的 tagName 元素的 NodeList
                // getElementsByTagNameNS(namespaceURI, tagName)

                // 例子，需要传入命名空间的 URI 而不是前缀
                // 创建一个新的 SVG 元素
                var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                // 创建一个属于某个命名空间的新特性
                var att = document.createAttributeNS("http://www.somewhere.com", "random");

                // 取得所有的 XHTML 元素
                var elems = document.getElementsByTagNameNS("http://www.w3.org", "*");

                // 只有文档中存在两个或 多个命名空间的时候，这些命名空间有关的方法才是必须的

            // 3. Element 类型的变化
                // DOM Level 2 core 关于 Element 的变化
                // 取得属于命名空间 namespaceURI 且名为 localName 的特性
                getAttributeNS(namespaceURI, localName);

                // 取得属于命名空间 namespaceURI 且名为 localName 的特征节点
                getAttributeNodeNS(namespaceURI, localName);

                // 返回属于命名空间 namespaceURI 的 tagName 元素的 NodeList
                getElementsByTagNameNS(namespaceURI, tagName);

                // 确定当前元素是否有一个名为 localName 的特性，且该特性命名空间是 namespaceURI
                hasAttributeNS(namespaceURI, localName);

                // DOM 2 也增加了不用考虑命名空间的 hasAttribute() 方法

                // 删除属于该命名空间 namespaceURI 且名为 localName 的特性
                removeAttriubteNS(namespaceURI, localName);

                // 设置属于该命名空间 namespaceURI 且名为 qualifiedName 的特性的值为 value
                setAttributeNS(namespaceURI, qualifiedName, value);

                // 设置属于命名空间 namespaceURI 的特征节点
                setAttributeNodeNS(attNode);

                // 除去第一个参数外，以上方法均与 DOM Level 1 中相关方法作用相同
                // 第一个参数始终是一个命名空间的 URI

            // 4. NameNodeMap 类型的变化
                // 取得属于命名空间  namespaceURI 且名为 localName 的项
                getNamedItemNS(namespaceURI, localName);

                // 移除属于命名空间 namespaceURI 且名为 localName 的项
                removeNamedItemNS(namespaceURI, localName);

                // 添加 node 这个节点已经事先指定了命名空间
                setNamedItemNS(node);

                // 以上方法很少使用

        // 12.1.2 其他方面的变化
            // DOM Level Core 在其他方面也有一些变化，倾向于确保 API 的可靠性和完整性

            // 1. DocumentType 类型的变化
                // 新增三个属性 publicId systemId internalSubset 很少用到

            // 2. Document 类型的变化
                // importNode() 方法
                // 用于从文档取得节点导入到另一个文档里
                var newNode = document.importNode(oldNode, true);   // 导入节点及其所有子节点
                document.body.appendChild(newNode);

                // DOM Level 2 Views 添加了 defaultView 属性，保存着指针指向拥有给定文档的窗口（或框架）
                // 兼容 IE 可用下述代码
                var parentWindow = document.defaultView || document.parentWindow;

            // 3. Node 类型的变化
                // 添加了 isSupported() 方法
                // 用于确定当前节点具有什么能力，两个参数：特性名，特性版本号
                // 与 DOM Level 1 为 document.implementation 引入的 hasFeature() 方法类似
                if (document.body.isSupported("HTML", "2.0"))
                {
                    // 执行只有 DOM Level HTML 才支持的操作
                }

                // 建议使用能力检测

                // DOM Level 3 引入的节点辅助方法，isSameNode() isEqualNode()
                // 接受一个节点参数，判断其相同或相等

                var div1 = document.createElement("div");
                div1.setAttribute("class", "box");

                var div2 = document.createElement("div");
                div2.setAttribute("class", "box");

                console.log(div1.isSameNode(div1));     // true
                console.log(div1.isEqualNode(div2));    // true
                console.log(div1.isSameNode(div2));     // false

                // DOM Level 3 为 DOM 节点 添加额外数据的引入了新方法
                // setUserData() 方法会将数据制定给节点

                document.body.setUserData("name", "Nicholas", function(){});
                var value = document.body.getUserData("name");

                // 例子
                var div = document.createElement("div");
                div.setUserData("name", "Nicholas", function(opearation, key, value, src, dest) {
                    if (opearation == 1) {
                        dest.setUserData(key, value, function() {});
                    }
                });

                var newDiv = div.cloneNode(true);
                console.log(newDiv.getUserdata("name"));

            // 4.框架的变化
                // 表示框架 HTMLFrameElement，表示内嵌框架 HTMLIFrameElement
                // DOM Level2 中拥有一个新属性 contentDocument，拥有指针指向框架内容的文档对象

                var iframe = document.getElementById("myIframe");
                var iframeDoc = iframe.contentDocument;     // IE 8 前无效

                // 兼容性代码
                var iframe = document.getElementById("myFrame");
                var iframeDoc = iframe.contentDocument || iframe.contentDocument.document;

    // 12.2 样式
        // 确认浏览器是否支持 DOM Level 2 的 CSS 能力
        var supportsDOM2CSS = document.implementation.hasFeature("CSS", "2.0");
        var supportsDOm2CSS2 = document.implementation.hasFeature("CSS2", "2.0");

        // 12.2.1 访问元素的样式
            /* CSS 属性               JavaScript 属性
             * background-image     style.backgroundImage
             * color                style.color
             * display              style.display
             * font-family          style.fontFamily
             * float                style.cssFloat  IE styleFloat
             */

            // 例子
            var myDiv = document.getElementById("myDiv");

            // 设置背景颜色
            myDiv.style.backgroundColor = "red";

            // 改变大小
            myDiv.style.width = "100px";
            myDiv.style.height = "200px";

            // 指定边框
            myDiv.style.border = "1px solid black";

            // 取得样式
            console.log(myDiv.style.backgroundColor);
            console.log(myDiv.style.width);
            console.log(myDiv.style.height);

            // 1. DOM 样式属性和方法
                /* DOM Level 2 为 style 对象定义了一些属性和方法
                 * cssText 访问 style 特性中的代码
                 * length 应用给元素的 CSS 属性的数量
                 * parentRule 表示 CSS 信息的 CSSRule 对象
                 * getPropertyCssValue(propertyName) 返回包含特定值的 CSSValue 对象
                 * getPropertyPriority(propertyName) 如果给定的属性使用了 !important 设置，则返回"important"，否则返回空字符串
                 * getPropertyValue(propertyName) 返回给定属性的字符串值
                 * item(index) 返回给定位置的 CSS 的名称
                 * removeProperty(propertyName) 从样式中删除给定属性
                 * setProperty(propertyName, value, priority) 将给定属性设定为相应的值，并加上优先权标志
                 */

                myDiv.style.cssText = "width: 25px; height: 100px; background-color: green";
                console.log(myDiv.style.cssText);

                // length 属性
                for (var i = 0, len = myDiv.style.length; i < len; i++)
                {
                    console.log(myDiv.style[i]);    // 取得的是 background-color 类型的属性名
                    //myDiv.style.item(i);
                }

                // 取得属性值
                var prop,
                    value,
                    i,
                    len;

                for (i = 0, len = myDiv.style.length; i < len; i++)
                {
                    prop = myDiv.style[i];
                    // prop = myDiv.style.item(i);
                    value = myDiv.style.getPropertyValue(prop);
                    console.log(prop + " : " + value);
                }

                // 值的类型，0：继承值，1：基本值，2：值列表， 3：自定义值
                var prop,
                    value,
                    i,
                    len;
                for (i = 0, len = myDiv.style.length; i < len; i++) {
                    prop = myDiv.style[i];
                    // prop = myDiv.style.item(i);
                    value = myDiv.style.getPropertyCssValue(prop);
                    console.log(prop + " : " + value.cssText + " (" + value.cssValueType +")");
                }

                // 移除 CSS 属性
                myDiv.style.removeProperTy("border");

            // 2.计算的样式
                // DOM Level 2 Style 增强了 document.defaultView
                // getComputedStyle() 接受要计算样式的元素和一个伪元素字符串（不需要用 null 代替）；
                var myDiv = document.getElementById("myDiv");
                var computedStyle = document.defaultView.getComputedStyle(myDiv, null);
                console.log(computedStyle.backgroundColor);
                console.log(computedStyle.width);
                console.log(computedStyle.border); // 每个浏览器不同

                // IE 兼容
                var myDiv = document.getElementById(myDiv);
                var computedStyle = myDiv.currentStyle;
                console.log(computedStyle.backgroundColor);
                console.log(computedStyle.width);
                console.log(computedStyle.border); // undefined

                // 计算样式表是只读的
                // 包含浏览器的默认值
                // 每个浏览器的默认值是不同的

        // 12.2.2 操作样式表
            // 检测是否支持 DOM Level 2 StyleSheets
            var supportsDOM2StyleSheets = document.implementation.hasFeature("StyleSheets", "2.0");

            /* CSSStyleSheet 继承自 StyleSheets
             * 属性如下
             * disabled 表示样式表是否被禁用的布尔值，读写，设置为 true 可以禁用
             * href 如果样式表是通过<link>包装的，则是样式表的 URL 否则是 null
             * media 当前样式表支持的所有媒体类型的集合
             * ownerNode 指向拥有当前样式表的节点的指针
             * parentStyleSheet 在当前样式表是通过 @import 导入的情况下，这个属性是一个指向导入它的样式表的指针
             * title ownerNode 中 title 属性的值
             * ***********************/



            // 1. CSS 规则
                // CSSRule 对象表示样式表中的每一条规则，可供多种类型继承的继承的基类
                /* 常见的为 CSSStyleRule 对象，包含下列属性
                 * cssText 返回整条规则对应的文本
                 * parentRule 如果当前规则是导入规则，这个属性引用的就是导入规则，否则是 null
                 * selectorText 返回符合当前规则的选择符文本
                 * style 一个 CSSStyleDeclaration 对象，可以通过它设置和取得规则中特定的样式值
                 * type 表示规则类型的常量值
                 */

                // div.box {background-color: blue;width: 100px;height:200px;}
                // 如果这条规则位于页面的第一个样式表中，而且只有这么一个样式表
                var sheet = document.styleSheets[0];
                var rules = sheet.cssRules || sheet.rules;    // 取得规则列表
                var rule = rules[0];
                console.log(rule.selectorText);             // div.box
                console.log(rule.style.cssText);            // 完整的 CSS 代码
                console.log(rule.style.backgroundColor);    // blue
                console.log(rule.style.width);              // 100px
                console.log(rule.style.height);             // 200px
