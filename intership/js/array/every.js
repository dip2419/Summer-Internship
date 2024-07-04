const a = [1,-20,3,4,5,6,7,8,9]
let result = a.every((n) =>{
    return n > 0
})
console.log(result);
let result1 = a.some((n) =>{
    return n > 0
})
console.log(result1);
