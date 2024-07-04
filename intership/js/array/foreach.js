//In foreach method, It takes an callback function as an arugument and applied it to each element of the array
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = a.forEach((n) => {
  return n*2;
});
console.log(result)
console.log(a)
