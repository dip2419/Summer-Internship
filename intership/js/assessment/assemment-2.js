// const a = 3;
// const b = 4;
// let sumOfAB = sum(a, b);
// const sum = (d1, d2) => d1 + d2;
// console.log(sumOfAB); // error

function getName(obj, key) {
  return this.obj;
}
const obj1 = { name: "demo", age: 23 };
let name = getName(obj1, "name");
console.log(name); // undefined

function abc() {
  const ab = () => 40;
  abcd(() => ab());
}
function abcd(cb) {
  let a = cb();
  console.log(a); // 40
}
console.log(abc()); // undefined

function operationObj(obj) {
  obj.z = { ...obj, c: 12 };
}
let a = { x: 34, y: 56 };
console.log(a); // { x: 34, y: 56}

const target = { a: 1 };
const source = { b: 2 };
const result = Object.assign(target, source);
console.log(result === target); // true

let text = [{ a: 34 }, { a: 45 }, { a: 5 }, { a: 2 }];
text &&
  (text = text.map((an) => {
    an.a = 2;
  }));
console.log(text); // [ undefined, undefined, undefined, undefined ]

var animal = { weight: 23, sound: "woof" };
function makeSound(options) {
  var species = options.species || "animal";
  var sound = options.sound;
  return "The " + species + " says " + sound + "!";
}
console.log(makeSound(animal)); // The animal says woof!.

const sortDescending = (arr) => {
  return arr.sort((a, b) => b - a);
};
const names = ["10", "150", "56", "1", "4", "55", "67"];
console.log(sortDescending(names));

let arr = [1, 2, 3];
let arr2 = [100, 2, 1, 10];
let out = arr.concat(arr2);
function duplicate(data) {
  return [...new Set(data)];
}
let result1 = duplicate(out);
console.log(result1.sort((a, b) => a - b));

let obj = { df: 56 };
let { a: df = 45 } = obj;
console.log(df); // 45

function extractNumbers(inputString) {
  let numbers = inputString.match(/\d+/g);

  return numbers ? numbers.map(Number) : [];
}

let result2 = extractNumbers("as4dj1as2asd3n");
console.log(result2); //[4, 1, 2, 3]
