/**
 * this learning
 * 
 * 在实际开发中，this 的指向可以通过四种调用模式来判断。  
●第一种是函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。  
●第二种是方法调用模式，如果一个函数作为一个对象的方法来调用时，this 指向这个对象。  
●第三种是构造器调用模式，如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。  
●第四种是 apply 、 call 和 bind 调用模式，这三个方法都可以显示的指定调用函数的 this 指向。
    apply 方法接收两个参数：一个是 this 绑定的对象，一个是参数数组。
    call 方法接收的参数，第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。
    bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。
 */


/**
 * call 函数的实现步骤：  
●判断调用对象是否为函数，即使不是定义在函数的原型上的，可能出现使用 call 等方式调用的情况。  
●判断传入上下文对象是否存在，如果不存在，则设置为 window 。  
●处理传入的参数，截取第一个参数后的所有参数。  
●将函数作为上下文对象的一个属性。  
●使用上下文对象来调用这个方法，并保存返回结果。  
●删除刚才新增的属性。  
●返回结果。
 */

console.log(Function.prototype)
function hello() {
    console.log('hello')
}

Function.prototype.mycall = function (context) {
    // 此时 this是我们调用的函数，而context则是我们传入的上下文（this)  
    if (typeof this !== 'function') {
        console.error("type error")
    }

    // 获取参数，不需要第一个this
    let args = [...arguments].slice(1);
    let result = null;

    // 判断上下文（对象）是否传入，没有则设置为全局对象window
    context = context || window

    // 对象临时设置一个方法属性并赋值为我们需要调用的函数
    context.tempMethod = this
    result = context.tempMethod(...args)
    // 将属性删除
    delete context.tempMethod

    return result;

}

/**
 * 实现apply
 * apply和call的区别就是apply接受数组形式的参数,因此步骤为
 * 1、判断调用对象是否是函数
 * 2、判断传入对象是否存在，不存在则使用window作为context
 * 3、将函数作为传入对象的一个属性
 * 4、获取传入的参数（apply需要对传入参数做处理，比如判断是否传入了第二个参数即 原本函数所需要使用的 参数数组
 * 5、使用上下文对象调用这个方法并保存返回结果
 * 6、删除新增属性
 * 7、返回结果
 */

Function.prototype.myApply = function (context) {
    // 判断调用对象是否是函数
    if (typeof this !== 'function') {
        console.error("type error");
    }
    context = context || window;
    context.tempMethod = this;
    let result = null;

    if (arguments[1]) {
        //执行函数
        result = context.tempMethod([...arguments[1]])
    } else {
        result = context.tempMethod()
    }
    delete context.tempMethod
    return result;
}



/**
 * bind函数的实现步骤
 * bind函数不需要处理参数部分
 * bind 函数的实现步骤：  
●判断调用对象是否为函数，即使是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。  
●保存当前函数的引用，获取其余传入参数值。  
●创建一个函数返回  
●函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象。
 */

Function.prototype.myBind = function (context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }

    // 获取参数
    var args = [...arguments].slice(1),
        fn = this;

    return function Fn() {
        // 根据调用方式，传入不同绑定值
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        );
    };
};