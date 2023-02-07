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
    console.log(key, value)
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