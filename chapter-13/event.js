// 13 事件
    // 13.2
        // 13.2.1
        // 13.2.2
            var btn = document.getElementById('myBtn');
            btn.onclick = function(){
                alert(this.id);
            }

        // 13.2.3
            var btn = document.getElementById("myBtn");
            btn.addEventListener("click", function()
            {
                alert(this.id);
            }, false);  // 此处的 false 表示在冒泡阶段调用事件处理程序

            // 可用于添加多个事件处理程序
            var btn = document.getElementById("myBtn");
            btn.addEventListener("click", function()
            {
                alert(this.id);
            }, false);
            btn.addEventListener("click", function()
            {
                alert("Hello World!");
            }, false)

            // 移除
            btn.removeEventListener("click", function()
            {
                alert(this.id);
            }, false);  // 无法移除

            // 应当如此移除
            var btn = document.getElementById("myBtn");
            var handler = function(){
                alert(this.id);
            };
            btn.addEventListener("click", handler, false);

            btn.removeEventListener("click", handler, false);

        // 13.2.4 IE
            var btn = document.getElementById("myBtn");
            btn.attachEvent("onclick", function()
            {
                alert("Clicked");
            });

            // 事件处理谁在全局作用域中进行
            var btn = document.getElementById("mtBtn");
            btn.attachEvent("onclick", function()
            {
                alert(this === window);     // true
            });

            // 多事件，反过来显示
            var btn = document.getElementById("myBtn");
            btn.attachEvent("onclick", function()
            {
                alert("Clicked");
            });
            btn.attachEvent("onclick", function()
            {
                alert("Hello world!");
            });

            // 移除
            var btn = document.getElementById("myBtn");
            var handler = function(){
                alert("Clicked");
            };
            btn.attachEvent("onclick", handler);

            btn.detachEvent("onclick", handler);

            // 13.2.5 跨浏览器
            var EventUtil = {

                addHandler: function(element, type, handler)
                {
                    if (element.addEventListener)
                    {
                        element.addEventListener(type, handler, false);
                    }
                    else if (element.attachEvent)
                    {
                        element.attachEvent("on" + type, handler);
                    }
                    else
                    {
                        element["on" + type] = handler;
                    }
                },

                removeHandler: function(element, type, handler)
                {
                    if (element.removeEventListener)
                    {
                        element.removeEventListener(type, handler, false);
                    }
                    else if (element.detachEvent)
                    {
                        element.detachEvent("on" + type, handler);
                    }
                    else {
                        element["on" + type, type] = null
                    }
                }
            };

            // 使用
            var btn = document.getElementById("myBtn");
            var handler = function(){
                alert("Clicked");
            };

            EventUtil.addHandler(btn, "click", handler);
            // 执行某些操作之后
            EventUtil.removeHandler(btn, "click", handler);

    // 13.3
        // 13.3.1
            var btn = document.getElementById("myBtn");
            btn.onclick = function(event)
            {
                alert(event.type);      // "click"
            };

            btn.addEventListener("click", function(event){
                alert(event.type);      // "Click"
            }, false);
