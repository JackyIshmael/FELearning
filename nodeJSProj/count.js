let counter = function (arr) {
    return "There are " + arr?.length + " elements in the array";
}

// console.log(counter(['ruby', 'nodeJS', 'react']))

let adder = function (a, b) {
    return `the sum of the 2 number is ${a + b}`
}

var pi = 3.14

// 如果是ES module 则是直接 
// export default counter;


// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
    counter,
    adder,
    pi
}

async function async1() {
    console.log('1');
    await async2();
    console.log('2')
}

async function async2() {
    console.log('3')
}
console.log('4');
async1();
setTimeout(() => {
    console.log('5')
})

new Promise(reslove => {
    console.log('6')
    reslove()
}).then(
    console.log('7')
)

console.log('8')
