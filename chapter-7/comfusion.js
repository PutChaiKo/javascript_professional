/* 不懂的地方 */
        // 7.4.2 模块模式
            var singleton = function()
            {
                // 私有变量和私有函数
                var privateVariable = 10;
                function privateFunction()
                {
                    return false;
                }
                // 特权/公有方法
                return {
                    publicProperty : true,
                    publicMethod : function()
                    {
                        privateVariable++;
                        return privateFunction();
                    }
                };
            }();    // 这个括号为什么不会产生错误？

        // 7.4.3 增强的模块模式
            var application = function()
            {
                // 私有变量和方法
                var components = [];

                // 初始化
                components.push(new BaseComponent());   // 初始化通过一个 new 是不是创建了一个这个函数的副本？

                // 创建 application 的一个局部副本
                var app = new BaseComponent();      // 为什么创建副本要用初始化的的函数？

                // 公共接口
                app.getComponentcount = function()
                {
                    return components.length;
                };
                app.registerComponent = function(component)
                {
                    if (typeof component == "object")
                    {
                        components.push(component);
                    }
                };

                // 返回这个副本
                return app;
            }();
