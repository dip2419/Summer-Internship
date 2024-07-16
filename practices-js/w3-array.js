function isArray(n) {
  return Array.isArray(n);
}
console.log(isArray("w3resource"));
console.log(isArray([1, 2, 4, 0]));

function array_Clone(n) {
  return n.slice(0);
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

function first(arr, n) {
  if (arr == null) return 0;

  if (n == null) return arr[0];

  if (n < 0) return [];

  return arr.slice(0, n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

var last = function (array, n) {
  if (array == null) return void 0;

  if (n == null) return array[array.length - 1];

  return array.slice(Math.max(array.length - n, 0));
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join("+"));

const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
const res = arr1.sort((a, b) => a - b, 0);
console.log(res);

array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
console.log(array1[0] + array2[0]);
console.log(array1[1] + array2[1]);
console.log(array1[2] + array2[2]);
console.log(array1[3] + array2[0]);

const library = [ 
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
  ];

console.log(library);

const union1 = [1,2,3]
const union2 = [100,2,3,10]
const result1 = union1.concat(union2)
result1.sort((a,b) => a-b)
console.log([...new Set(result1)]);

function check(arr) {
  return arr.filter((n) => n < 0 || n > 0)
}
const array =  [NaN, 0, 15, false, -22, '',undefined, 47, null]
console.log(check(array));

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
function removeDuplicate(n,m) {
  const concat1 = n.concat(m)
  const res = [...new Set(concat1)]
  return res
}
console.log(removeDuplicate(array1,array2));

