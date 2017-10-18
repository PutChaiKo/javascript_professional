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
            // createElementNS(namespaceURI, tagName) 使用给定的 tagName 创建一个属于命名空间的 namespaceURI 的新元素
