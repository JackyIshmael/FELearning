const obj = {
    a: 3,
    b: 4,
    getArrow() {
        return () => {
            // 注意这边直接打印了条件运算的返回值
            console.log(this === obj, this);
        }
    },
    c: function () {

    }
}

let tempArrow = obj.getArrow()
tempArrow()