/**
 * 全局对象，参考文档的globals
 */
// console.log(__dirname)


/**
 * 回调函数 HOF
 * 就是指以函数作为参数的函数
 */

// function callBackFunction(fun, ...argments) {
//     // 函数式编程方式，接受一个函数并在内部做执行
//     console.log(argments);
//     fun(argments);
// }

// function sayHi() {
//     console.log('Hi');
// }

// let sayBye = function (argments) {
//     console.log('Bye ' + argments)
// }

// sayHi();
// callBackFunction(sayBye, 1, 2, 3, 4, 5, ' Jacky', ' Hi');


/**
 * 模块
 * 实际导出的exports其实就是一个暴露出的对象
 * require时也是require一个对象进来，因此我们既可以直接导入整个对象，也可以导入特定的某个属性
 */

// node JS情况下是使用modules.exports来导出
// 官方文档：https://www.nodeapp.cn/modules.html#modules_module_exports

// let stuff = require('./count');
// let pi = require('./count').pi;

// console.log(stuff, typeof stuff)
// console.log(stuff.counter(['ruby', 'nodejs', 'react']))
// console.log(stuff.adder(3, 5))
// console.log(pi)

/**
 * 事件
 * node JS本身就是由事件来驱动的，因此是nodeJS的核心内容
 */