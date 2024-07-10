const fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple", 1));

const fruits1 = ["Orange", "Apple", "Orange", "Apple", "Mango"];
console.log(fruits1.lastIndexOf("Apple", 2));

const fruits2 = ["Banana", "Mango", "Orange", "Apple"];
console.log(fruits2.includes("Mango", 1));

const numbers = [4, 9, 16, 25, 29];
console.log(numbers.find(myFunction));

function myFunction(value, index, array) {
  return value > 18;
}

const numbers1 = [4, 9, 16, 25, 29];
console.log(numbers1.findIndex(myFunction));
function myFunction(value, index, array) {
  return value > 18;
}

const temp = [27, 28, 30, 40, 42, 35, 30,55];
console.log(temp.findLast(x => x > 40));

const temp1 = [27, 28, 30, 40, 42, 35, 30];
console.log(temp1.findLastIndex(x => x > 40))

