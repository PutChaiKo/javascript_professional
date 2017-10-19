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

                
