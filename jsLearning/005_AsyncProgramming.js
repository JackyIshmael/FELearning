/**
 * @desc 关于异步编程的学习
 * @author Jacky
 * @
 */

/**
 * 异步的几种实现方法
 * 1、经典的setTimeout
 * 2、Promise
 * 3、async/await
 */




/**
 * await在等待什么
 */

function getSomething() {
    return "something";
}

async function testAsync() {
    return Promise.resolve("hello async");
}

async function test() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
}

test();