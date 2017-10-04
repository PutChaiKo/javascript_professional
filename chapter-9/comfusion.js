/* 不懂的地方 */
        // 9.1.1 更可靠的能力检测
            // 测试任何对象的某个特性是否存在
            function isHostMethod(object, property){    // 传入对象和特性参数
                var t = typeof object[property];    // 用 typeof 检测该特性
                return t == 'function' ||   // 标准模式下返回 function
                (!!(t=='object' && object[property])) ||    // IE8 及之前的返回 object
                t == 'unknown'; // IE 中的 Active 对象返回 unknown
            }

    // 9.2
        var func1 = function(){
            return true;
        };

        var func2 = function(){
            return true;
        }();

        for (var variable in object) {
            if (object.hasOwnProperty(variable)) {

            }
        }
