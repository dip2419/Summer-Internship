const a = [1,-20,3,4,5,6,7,8,9]
console.log(Array.from(a.entries()))
console.log(Array.from(a.keys()))
console.log(Array.from(a.values()))

console.log(Array.from("deep"));
console.log(Array.isArray("deep"));
delete a[1]
a [1]= 20
console.log(a);