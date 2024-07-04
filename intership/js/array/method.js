const a = [1,2,3,4,5,6,4]
a.push(2);
console.log(a);
a.pop();
console.log(a);
a.unshift(10)
console.log(a);
a.shift()
console.log(a);
console.log(a.slice(0,3))
console.log(a);
console.log(a.toSpliced(0,3))
console.log(a);
console.log(a.splice(0,3))
console.log(a);

const even = [0,2,4,6]
const odd = [1,3,5,7]
console.log(even.concat(odd))
console.log(...even,...odd);

console.log(Array.isArray("deeep"));
console.log(Array.from("deeep"));
console.log(Array.from({Name : "deeep"}));
