function returnName(n, m) {
  console.log(n + m);
}
function add(a, b, fun) {
  fun(a, b);
}
add("deep", "patel", returnName);

const input = `[
    {
        "id":1,
        "slots":[ {"dosage":"", "title":"Hii"}, {"dosage": "H!", "title":"Hii1"}]
    }, 
   {
        "id": 2,
        "slots": [ { "dosage": "abc", "title": "Hii" }, { "dosage": "H!", "title": "Hii" }]
    }
]`;
let res = JSON.parse(input);
console.log(res[1].slots[0].dosage);

function kthSmallest(arr, K) {
  arr.sort((a, b) => b - a); //[19,12,7,5,3]

  return arr[K - 1];
}

let arr = [12, 3, 5, 7, 19];
K = 2;
console.log("nth largest element is " + kthSmallest(arr, K));

let friends = [
  {
    name: "deep",
    books: ["bible", "harry potter"],
    age: 21,
  },
  {
    name: "deep",
    books: ["bible1", "harry potter1"],
    age: 21,
  },
  {
    name: "deep",
    books: ["bible2", "harry potter2"],
    age: 21,
  },
];
function outputs(key, val) {
  return key.map((items) => items[val]);
}
const res1 = outputs(friends, "books");
console.log(res1.flat());

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const sumOfFirstN = (n * (n + 1)) / 2;

  let sumOfArray = 0;
  for (let i = 0; i < n - 1; i++) {
    sumOfArray = sumOfArray + arr[i];
  }
  console.log(sumOfArray);
  let missingNumber = sumOfFirstN - sumOfArray;

  return missingNumber;
}

const arr1 = [1, 2, 5, 4, 6, 8, 7, 10, 3];
const missingNumber = findMissingNumber(arr1);
console.log("Missing Number: ", missingNumber);

const array = [1, 1, 2, 3, 4, 2, 5, 6, 7, 4];
const duplicates = array.filter((item, index) => array.indexOf(item) !== index);
console.log(duplicates);

function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}
console.log(mul(2)(3)(4)); // output: 24
console.log(mul(4)(3)(4)); // output: 48

let a = "10";
if (typeof a === "number") {
  console.log("Is a Number");
} else {
  console.log("Not a Number");
}

function factorial(val) {
    if(val === 0 || val === 1){
        return 1
    }else{
        return val * factorial(val - 1)
    }
}
let num = 6
console.log(factorial(num));