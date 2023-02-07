function instanceOfExp(left, right) {

    // instanceof关键字实现，本质在于判断对象的原型链上 是否存在 指定 原型。
    // 指定原型 通过 构造方法的prototype属性去获取，这个概念需要学习 引用类型以及原型链知识。
    let proto = Object.getPrototypeOf(proto);
    let prototype = right.prototype;

    while (true) {
        if (!proto) return false
        if (proto === prototype) return true;
        proto = Object.getPrototypeOf(proto)
    }

}

let a = 'asd'
let b = '555'
// isNaN先进行类型转换
console.log(isNaN(a), isNaN(b))
// Number.isNaN不做类型转换
console.log(Number.isNaN(a), Number.isNaN(b))


// // && 与 || 的返回值
console.log(a && b) // 输出第二个操作数b，555
console.log(a || b) // 输出第一个操作数a，asd

// 包装类型
let c = new Boolean(false) // 对象
let d = Boolean(false)  // 布尔值
let e = Object(false)  // 对象

console.log(c, typeof c)
console.log(d, typeof d)
console.log(e, typeof e)

let cc = new String('abc')
let dd = String('abc')
let ee = Object('abc')
console.log(cc, typeof cc)
console.log(dd, typeof dd)
console.log(ee, typeof ee)
/*
[Boolean: false] object
false boolean
[Boolean: false] object
[String: 'abc'] object
abc string
[String: 'abc'] object
*/

let o = {
    valueOf() {
        return 233;
    },
    toString() {
        return 'abcd';
    }
}

// 转换为基本类型的大概规则。
let oo = []
oo.valueOf()
let ooo = {}
ooo.valueOf()

let objToNumber = value => Number(value.valueOf().toString())
console.log(objToNumber(o))
console.log(objToNumber([]))
console.log(objToNumber({}), ooo.valueOf()
)

let obj = {}
if (JSON.stringify(obj) == '{}') {
    console.log('空对象')
}

if (Object.keys(obj).length <= 0) {
    console.log('空对象')
}

