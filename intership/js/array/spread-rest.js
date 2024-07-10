function add(n,m) {
    return n + m
}
const myarr = [1,2]
console.log(add(...myarr));//spread operator

function add1(...n) {//rest operator
    let sum = 0
    n.forEach(items => {
       sum += items
    });
    return sum
}
console.log(add1(1,2,3,4,56,7,8));

