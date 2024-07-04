const numbers = [1, 2, 3, 4];
console.log(numbers.toString());

const numbers1 = [1, 2, 3, 4];
const doubled = numbers1.map((num, index, array) => {
  array.push(num * 2);
  return num * 2;
});
console.log(numbers1, doubled);