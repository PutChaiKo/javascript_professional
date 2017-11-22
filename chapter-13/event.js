// 13 事件
    // 13.2
        // 13.2.1
        // 13.2.2
            var btn = document.getElementById('myBtn');
            btn.onclick = function(){
                alert(this.id);
            };

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
            }, false);

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
                        element["on" + type] = null;
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

            btn.addEventListener("click", function(event)
            {
                alert(event.type);      // "click"
            }, false);

            //
            var btn = document.getElementById("myBtn");
            btn.onclick = function(event)
            {
                alert(event.currentTarget === this);    // true
                alert(event.target === this);           // true
            };

            document.body.onclick = function(event)
            {
                console.log(event.currentTarget === document.body);   // true
                console.log(this === document.body);    // true
                console.log(event.target === document.getElementById("myBtn"));    // true
            };

            // type 属性
            var btn = document.getElementById("myBtn");
            var handler = function(event)
            {
                switch (event.type)
                {
                    case "click":
                        console.log("Clicked");
                        break;

                    case "mouseover":
                        event.target.style.backgroundColor = "red";
                        break;

                    case "mouseout":
                        event.target.style.backgroundColor = "";
                        break;

                }
            };

            btn.onclick = handler;
            btn.onmouseover = handler;
            btn.onmouseout = handler;

            // 阻止默认行为 preventDefault();
            var link = document.getElementById("myLink");
            link.onclick = function(event){
                event.preventDefault(); // 此处阻止了 link 的自动跳转功能
            };

            // 用于停止事件在 DOM 层中的传播
            var btn = document.getElementById("myBtn");
            btn.onclick = function(event)
            {
                console.log("Clicked");
                event.stopPropagation();    // 阻止冒泡到 body
            };

            document.body.onclick = function(event)
            {
                console.log("Body clicked");
            };

            // event.eventPhase
            var btn = document.getElementById("myBtn");
            btn.onclick = function(event)
            {
                alert(event.eventPhase); // 2
            };

            document.body.addEventListener("click", function(event)
            {
                alert(event.eventPhase);    // 1 捕获阶段
            }, true);

            document.body.onclick = function(event)
            {
                alert(event.eventPhase);    // 3
            };

            // 12.3.2 IE 兼容
                var btn = document.getElementById("myBtn");
                btn.onclick = function()
                {
                    var event = window.event;   // 存在于 window对象中
                    alert(event.type);  // click
                };

                var btn = document.getElementById("myBtn");
                btn.attachEvent("onclick", function(event)
                {
                    alert(event.type);  // click
                });

                // HTML 特性指定的的事件
                // <input type="button" value="click" onclick="alert(event.type)">

                // 属性方法
                var btn = document.getElementById("myBtn");
                btn.onclick = function()
                {
                    alert(window.event.srcElement === this);    // true 与 DOM 中 target 相同
                };

                btn.attachEvent("onclick", function(event)
                {
                    alert(event.srcElement === this);   // false
                });

                // returnValue 属性相当于 preventDefault() 方法
                var link = document.getElementById("myLink");
                link.onclick = function()
                {
                    window.event.returnValue = false;
                };

                // cancelBubble 属性与 DOM 中的 stopPropagation() 方法相同
                var btn = document.getElementById("myBtn");
                btn.onclick = function()
                {
                    alert("Clicked");
                    window.event.cancelBubble = true;
                };

                document.body.onclick = function()
                {
                    alert("Body Clicked");
                };

            // 13.3.3
                var EventUtil = {
                    addHandler : function(element, type, handler)
                    {
                        // 此处应该有代码
                    },

                    getEvent : function(event)
                    {
                        return event ? event : window.event;
                    },

                    getTarget : function(event)
                    {
                        return event.target || event.event.srcElement;
                    },

                    preventDefault : function(event)
                    {
                        if (event.preventDefault)
                        {
                            event.preventDefault();
                        }
                        else
                        {
                            event.returnValue = false;
                        }
                    },

                    removeHandler : function(element, type, handler)
                    {
                        // 此处应该有代码
                    }，

                    stopPropagation : function(event)
                    {
                        if (event.stopPropagation)
                        {
                            event.stopPropagation();
                        }
                        else
                        {
                            event.cancelBubble = true;
                        }
                    }
                };

                // 使用
                btn.onclick = function(event)
                {
                    event = EventUtil.getEvent(event);
                };

                btn.onclick = function(event)
                {
                    event = EventUtil.getEvent(event);
                    var target = EventUtil.getTarget(event);
                };

                var link = document.getElementById("myLink");
                link.onclick = function(event)
                {
                    event = EventUtil.getEvent(event);
                    EventUtil.preventDefault(event);
                };

                var btn = document.getElementById("myBtn");
                btn.onclick = function(event)
                {
                    alert("Clicked");
                    event = EventUtil.getEvent(event);
                    EventUtil.stopPropagation(event);
                }

                document.body.onclick = function(event)
                {
                    alert("Body clicked");
                };

    // 13.4
        // 13.4.1 UI event
            // 1.laod
            EventUtil.addHandler(window, "load", function(event)
            {
                alert("Loaded!");
            });

            var image = document.getElementById("myTmage");
            Event.addHandler(image, "load", function(event)
            {
                event = EventUtil.getEvent(event);
                alert(EventUtil.getTarget(event).src);
            });

            EventUtil.addHandler(window, "load", function()
            {
                var image = document.createElement("img");
                EventUtil.addHandler(image, "load", function()
                {
                    event = EventUtil.getEvent(event);
                    alert(EventUtil.getTarget(event).src);
                });
                document.body.appendChild(image);
                image.src = "smail.gif";
            })

            EventUtil.addHandler(window, "load", function()
            {
                var image = new Image();
                EventUtil.addHandler(image, "load", function(event)
                {
                    alert("Image loaded!");
                });
                image.src = "smile.gif";
            });

            EventUtil.addHandler(window, "load", function()
            {
                var script = document.createElement("script");
                EventUtil.addHandler(script, "load", function(event)
                {
                    alert("Loaded");
                });
                script.src = "example.js";
                document.body.appendChild(script);
            });

            EventUtil.addHandler(window, "load", function() // 检测 window 是否加载完毕
            {
                var link = document.createElement("link");  // 创建 link 元素
                link.type = "text/css";
                link.rel = "stylesheet";
                EventUtil.addHandler(link, "load", function(event)  // 往 link 上添加 load 事件
                {
                    alert("css loaded");
                });
                link.href = "example.css";  // 添加 href 在添加
                document.getElementByTagName("head")[0].appendChild(link);  //
            });

        // 2.unload 事件
            EventUtil.addHandler(window, "unload", function()
            {
                alert("Unloaded");
            });

        // 3. resize
        EventUtil.addHandler(window, "resize", function()
        {
            alert("Resized");
        });

        // 4.scroll
        EventUtil.addHandler(window, "scroll", function(event)
        {
            if (document.compatMode == "CSS1Compat")
            {
                alert(document.documentElement.scrollTop);
            }
            else
            {
                alert(document.body.scrollTop);
            }
        });

    // 13.4.2 焦点事件

    // 13.4.3 鼠标与滚轮施加

        // 1.客户端坐标位置
            var div = document.getElementById("myDiv");
            EventUtil.addHandler(div, "click", function()
            {
                event = EventUtil.getEvent(event);
                alert("Client coordinates: " + event.clientX + "," + event.clientY);
            });

            // 页面没有滚动 pageX pageY 和 clientX clientY 相等

        // 2.页面坐标位置
            // 取得事件在页面中的坐标
            var div = document.getElementById("myDiv");
            EventUtil.addHandler(div, "click", function()
            {
                event = EventUtil.getEvent(event);
                alert("Page coordinates: " + event.pageX + "," + event.pageY);
            });
            // IE 8 之前的版本计算页面事件坐标
            var div = document.getElementById("myDiv");
            EventUtil.addHandler(div, "click", function(event)
            {
                event = EventUtil.getEvent(event);
                var pageX = event.pageX;
                var pageY = event.pageY;

                if (pageX === undefined)
                {
                    pageX = event.clentX + (document.body.scrollLeft || documentElement.scrollLeft);
                }

                if (pageY === undefined)
                {
                    page = event.clentY + (document.body.scrollTop || documentElement.scrollTop);
                }

                alert("Page cpprdinates: " + pageX + "," + pageY);
            });

        // 3.屏幕坐标位置
            var div = document.getElementById("myDiv");
            EventUtil.addHandler(div, "click", function(event)
            {
                event = EventUtil.getEvent(event);
                alert("screen coordinates: " + event.screenX + "," + event.screenY);
            });

        // 4.修改键
            var div = document.getElementById("myDiv");
            EventUtil.addHandler(div, "click", function(event)
            {
                event = EventUtil.getEvent(event);
                var key = new Array();
                if (event.shiftKey)
                {
                    key.push("shiftKey");
                }

                if (event.ctrlKey)
                {
                    key.push("ctrl");
                }

                if (event.altKey)
                {
                    key.push(alt);
                }

                if (event.metaKey)
                {
                    keys.push(meta);
                }

                alert("Key: " + keys.join(","));
            });

        // 5.相关元素
            // 跨浏览器取得相关元素
            var EventUtil = {
                // 省略代码
                getRelatedTarget: function(event)
                {
                    if (event.relatedTarget)    // mouseover mouseout 包含值，其他事件为 null
                    {
                        return event.relatedTarget;
                    }
                    else if (event.toElement)   // IE mouseout 保存着相关元素
                    {
                        return event.toElement;
                    }
                    else if (event.formElement) //  IE mouseover
                    {
                        return event.formElement;
                    }
                    else
                    {
                        return null;
                    }
                },
                // 省略代码
            };

            // 使用
            var div = document.getElementById("myDiv");
            EventUtil.addHandler(div, "mouseout", function()
            {
                event = EventUtil.getEvent(event);
                var target = EventUtil.getTarget(event);
                var relatedTarget = EventUtil.getRelatedTarget(event);
                alert("Moused out of " + target.tagName + " to " + relatedTarget.tagName);
            });

        // 6.鼠标按钮
        // 添加一个 getButton()
        var EventUtil = {
            // 省略其他代码

            getButton : function(event)
            {
                if (document.implementation.hasFeature("MouseEvent", "2.0"))
                {
                    return event.button;
                }
                else
                {
                    switch (event.button)
                    {
                        case 0:
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                            return 0;
                        case 2:
                        case 6:
                            return 2;
                        case 4:
                            return 1;
                    }
                }
            },

            // 省略的代码
        };

        // 7.更多的事件操作

        // 8.滚轮事件
        EventUtil.addHandler(document, "mousewheel", function(event)
        {
            event = EventUtil.getEvent(event);
            alert(event.wheelDelta);
        });

        // Opera 9.5之前的 wheelDelta 的正负是相反的，特征检测支持
        EventUtil.addHandler(document, "mousewheel", function(event)
        {
            event = EventUtil.getEvent(event);
            var delta = (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
            alert(delta);
        });

        // Friefox
        EventUtil.addHandler(window, "DOMMouseScroll", function(event)
        {
            event = EventUtil.getEvent(event);
            alert(event.detail);
        });

        // 跨浏览器
        var EventUtil = {

            // 省略的代码

            getWheelDelta : function(event)
            {
                if (event.wheelDelta)
                {
                    return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
                }
                else
                {
                    return -event.detail * 40;
                }
            },

            // 省略的代码

        }

        // 使用
        (function()
        {
            function handleMouseWheel(event)
            {
                event = EventUtil.getEvent(event);
                var delta = EventUtil.getWheelDelta(event);
                alert(delta);
            }

            EventUtil.addHandler(document, "mousewheel", handleMouseWheel);
            EventUtil.addHandler(document, "DOMMouserScroll", handleMouseWheel);
        })();

        // 9.触摸设备
        // 不支持 dbclick
        // 轻击触发 mousemove
        // 轻击不可单击元素不会触发事件
        // mousemove 事件会触发 mouseover onmouseout
        // 双指滚屏会触发 mousewheel 和 scroll 事件

        // 10.无障碍问题
        // 使用 click 事件执行代码
        // 不要使用 onmouseover 向用户展示新的选项
        // 不要使用 dbclick 实现重要的操作

    // 13.4.4 键盘与文本事件
        // 1.键码
        var textbox = document.getElementById("myText");
        EventUtil.addHandler(textbox, "keyup", function(event)
        {
            event = EventUtil.getEvent(event);
            alert(event.keyCode);
        });

        // 2.字符编码
        var EventUtil = {

            // 省略的代码
            getCharCode: function(event)
            {
                if (type event.charCode == "number")
                {
                    return event.charCode;
                }
                else
                {
                    return event.keyCode;
                },

            }
        }
