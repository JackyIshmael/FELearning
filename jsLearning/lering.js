function DDog(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;

    // 自定义的valueOf 不能这样定义？实际调用还是会找到原型链中的valueOf
    // 没有类的概念。要重写Object的toString方法，可以通过其prototype去实现
    function valueOf() {
        return 'hello';
    }

}


var theDDog = new DDog("5555", "Lab", "chocolate", "female");
DDog.prototype.toString = function dogToString() { return this.name; }
DDog.prototype.valueOf = function dogvalueOf() { return 'hi,here is valueOf'; }

console.log(theDDog.toString())
console.log(theDDog.valueOf())
// valueOf执行++后结果为NaN，并不会再调用toString了
console.log(++theDDog)
console.log()
/**
5555
hi,here is valueOf
NaN
 */

let o = {

    valueOf() {
        return 'asd'
    },
    toString() {
        return '-555'
    }
}