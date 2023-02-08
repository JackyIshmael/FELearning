/**
 * Map方法学习
 */

const map = new Map([
    ["foo", 1],
    ["bar", 2],
])

/**
 * forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
 */
map.forEach((value, key, map) => {
    // console.log(key, value)
})

/**
 * WeakMap
 */

const wMap = new WeakMap([
    //["aa", 1] // TypeError: Invalid value used as weak map key
    [{}, 1]
])

/**
 * 数组有哪些原生方法？  
●数组和字符串的转换方法：toString()、toLocalString()、join() 其中 join() 方法可以指定转换为字符串时的分隔符。  
●数组尾部操作的方法 pop() 和 push()，push 方法可以传入多个参数。  
●数组首部操作的方法 shift() 和 unshift() 
●数组重排序的方法 reverse() 和 sort()，sort() 方法可以传入一个函数来进行比较，传入前后两个值，如果返回值为正数，则交换两个参数的位置。  
●数组连接的方法 concat() ，返回的是拼接好的数组，不影响原数组。  
●数组截取办法 slice()，用于截取数组中的一部分返回，不影响原数组。  
●数组插入方法 splice()，影响原数组
●数组查找特定项的索引的方法，indexOf() 和 lastIndexOf()
●数组迭代方法 every()、some()、filter()、map() 和 forEach() 方法  
●数组归并方法 reduce() 和 reduceRight() 方法
 */

/**
 * 对类数组对象的理解，如何转化为数组  
一个拥有 length 属性和若干索引属性的对象就可以被称为类数组对象
类数组对象和数组类似，但是不能调用数组的方法。
常见的类数组对象有 arguments 和 DOM 方法的返回结果，函数参数也可以被看作是类数组对象，因为它含有 length属性值，代表可接收的参数个数。  
常见的类数组转换为数组的方法有这样几种：
 */


/**
 * ES6模块和 CommonJS模块的异同点
 * 前者是值的引入，后者是值的拷贝
    前者是编译的时候输出接口，后者是运行加载
    前者是异步加载，后者是同步加载？
    ES6模块用的是import
    CommonJS模块用的是require，支持文件夹作为模块
    具体见：http://nodejs.cn/api-v18/packages.html#determining-module-system
    属于nodeJS管理模块导入的知识
 */


/**
 * for...in，for...of的区别
 * for of是ES6新增的方法，用于遍历含有iterator接口的数据接口，切遍历的是value 键值
 * for in是旧遍历方法，遍历对象的键名，key
 * 
 * for of只会遍历当前对象而不会遍历原型链
 * for in会遍历对象的整个原型链，不推荐使用。
 * 
 * 遍历数组时：
 * for of只返回数组下标对应的属性值
 * for in 会返回数组中所有可以枚举的属性包括原型链
 * 
 * 总结：
 * for of【常用】适用于数组、类数组对象、以及一切包含迭代器的对象比如字符串、Set、Map和Generator对象
 * for in 适用于单纯的遍历对象，非常不适合遍历数组, 对于String包装器可以遍历，对于基本类型string则抛出多个undefined，对于Date直接不进行遍历。。。
 * Date对象参考：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#examples
 */

let testForIn = [2, 3, 3, 4, 5]
let testForInTwo = new Date(2023, 2, 8)
// Date的构造方法，不设置key

/**
 * for ... in 的使用
 */

// for in
// for (let k in testForIn) {
//     console.log(k, testForIn[k]);
// }

// for (let k in testForInTwo.toDateString()) {
//     console.log(k, testForInTwo.toDateString()[k])
// }

// for (let k in 'asdasdsad') {
//     console.log(k, 'asdasdsad'[k])
// }


/**
 * for ... of 的使用
 */

let eazyForOf = {
    0: 'one',
    1: 'two',
    length: 2
}
eazyForOf = Array.from(eazyForOf)
for (let k of eazyForOf) {
    console.log(k)
}

let hardForOf = {
    a: 1,
    b: 2,
    c: 3
};

// 方法一：添加迭代器方法，返回 next迭代器，在next迭代器中返回结果
hardForOf[Symbol.iterator] = function () {
    // 对普通对象创建一个迭代器，用于遍历其值。 for of对数组类似的对象是非常好用的，因为我们不关心key
    // 关心key的时候还是别用这个了呜呜

    let keys = Object.keys(this);
    let count = 0;
    return {
        // 迭代器需要返回一个next方法，并在其中处理 普通迭代结果以及迭代终点
        next() {
            if (count < keys.length) {
                return { value: hardForOf[keys[count++]], done: false }
            } else {
                // 必须终止
                return { done: true }
            }
        }
    }
};
for (let k of hardForOf) {
    console.log(k)
}

let hardForOfSec = {
    a: 1,
    b: 2,
    c: 3
};

hardForOfSec[Symbol.iterator] = function* () {
    var keys = Object.keys(hardForOf); // 数组
    for (let k of keys) {
        yield [k, hardForOf[k]]
    }
}

for (let [k, v] of hardForOfSec) {
    console.log(k, v)
}


/**
 * forEach方法与Map方法的区别
 * 这方法都是用来遍历数组的，两者区别如下：  
●forEach()方法会针对每一个元素执行提供的函数，对数据的操作会改变原数组，该方法没有返回值；  
●map()方法不会改变原数组的值，返回一个新数组，新数组中的值为原数组调用函数处理之后的值；
 */



/**
 * 在JavaScript中是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype 属性，
 * 它的属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。
 * 当使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的 prototype 属性对应的值
 * 在 ES5 中这个指针被称为对象的原型。一般来说不应该能够获取到这个值的，
 * 但是现在浏览器中都实现了 __proto__ 属性来访问这个属性，但是最好不要使用这个属性，因为它不是规范中规定的。
 * ES5 中新增了一个 Object.getPrototypeOf() 方法，可以通过这个方法来获取对象的原型。
 */
function Person(name) {
    this.name = name
}

// 修改其原型，将原型塑造为 { getName: [Function (anonymous)] } 这个对象
// Person.prototype.getName = function () { }
let p = new Person('hello')
console.log(Object.getPrototypeOf(p), p.__proto__, Person.prototype)