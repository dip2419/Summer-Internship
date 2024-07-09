let x = 5;
console.log((x *= 2) ** 2); //100

let a = 5;
console.log(++a + ++a + --a + a++); //25
console.log(a); //7

let arr1 = [{ a: 34 }, { a: 45 }, { a: 12 }, { a: 5 }, { a: 78 }];
let arr2 = arr1.map((item) => item.a * 2);
console.log(arr1); // [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
console.log(arr2); // [68, 90, 24, 10, 156]

let text1 = "    Hello World!     ";
text1.trimStart();
text1.trimEnd();
console.log(text1); //Hello World!

const source = { a: 1 };
const target = { b: 2 };
Object.assign(target, source).a = 56;
console.log(target); // { b:2, a:56}

let arr = [1, 2, 3, 4, 5];
console.log(arr.push(4)); // => 6
console.log(arr.push(3) + arr.pop()); // => 10
console.log(arr.length); // => 6

let arr11 = [{ k: 34 }, { l: 45 }, { m: 12 }, { n: 5 }, { o: 78 }];
let arr22 = arr1.map((item) => item);
arr22[2].b = 45;
console.log(arr11); // [{ k: 34 }, { l: 45 }, { m: 12 }, { n: 5 }, { o: 78 }]
console.log(arr22); // [ { a: 34 }, { a: 45 }, { a: 12, b: 45 }, { a: 5 }, { a: 78 } ]

const source1 = { a: { b: 1 } };
const target1 = {};
Object.assign(target1, JSON.parse(JSON.stringify(source1)));
source1.a.b = 2;
console.log(source1); // { a: { b: 2 } }
console.log(target1); // { a: { b: 1 } }

let a1 = [1, 2, 3, 4, 5];
let b1 = a1.reduce((a, c) => {
  a + c;
});
console.log(b1); // undefined

let abc = 14 + 23 + "12" + 4 * 10;
console.log(abc); // 371240

let text = " Apple, Banana, Kiwi  ";
text.slice(-12, -6) || text.padStart(2, "00");
text.trim();
console.log(text); // Apple, Banana, Kiwi

let c = [1, 2, 3, 4, 5];
let sum = c || [].reduce((acc, curr) => acc + curr);
console.log(sum); // [1, 2, 3, 4, 5]

let d = [0, 1, 2, 4, 3, 10];
let e = arr.reduce((curr) => curr) && 45;
console.log(e); // 45

// let f = [1,2,3,4,5]
// let g = f.reduce((a, c) => a + c).map(item => item);
// console.log(g); // => error

const example = ({ a, b, c }) => {
  console.log(a, b, c); // undefined undefined undefined
};
example(0, 1, 2);

let abc1 = 14 + 23 + ("12" + 4) * 10;
console.log(abc1); // 1277
console.log(typeof abc1); // number

let h = [11, 2, 3, 4, 5];
let i = h.reduce((a) => a);
console.log(h, i); //[ 11, 2, 3, 4, 5 ] 11

let accname = "account name";
let obj = { "accname name": "Abc Done", Amount: 35000 };
console.log(obj.accname); // undefined
let obj1;
console.log(obj1 && obj1.accname); // undefined

let obj2 = { name: "demo", age: 45 };
const { name, age: year } = obj2;
console.log(name); // demo
console.log(year); //  45
// console.log(age); // age is not defined

let arr10 = [1, 2, 3, 4, 5];
let arr20 = arr10.map((index) => {
   index;
});
console.log(arr10); //[ 1, 2, 3, 4, 5 ]
console.log(arr20); // [ undefined, undefined, undefined, undefined, undefined ]
