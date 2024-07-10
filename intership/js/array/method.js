const a = [1,2,3,4,5,6,4]
a.push(2);
console.log(a);
a.pop();
console.log(a);

console.log(a.unshift(10));
a.shift()
console.log(a);
console.log(a.slice(0,3))
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

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log( fruits.length);

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log( fruits1.toString());



const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4.join("*"));

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits5.copyWithin(2, 0,2))

const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr.flat()); 