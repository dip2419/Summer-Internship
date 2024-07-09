const day = new Date();
const result = day.getDay();
switch (result) {
  case 0:
    console.log("Today is: Sunday");
    break;
  case 1:
    console.log("Today is: Monday");
    break;
  case 2:
    console.log("Today is: Tuesday");
    break;
  case 3:
    console.log("Today is: Wednesday");
    break;
  case 4:
    console.log("Today is: Thusday");
    break;
  case 5:
    console.log("Today is: Friday");
    break;
  case 6:
    console.log("Today is: Saturday");
    break;
  default:
    break;
}
const result1 = day.toLocaleTimeString();
console.log("The current time is: " + result1);

const foot = 5.6;
function footToCm(n) {
  return n * 30.48;
}
function ftToInch(n) {
  return n * 12;
}
console.log("5.6ft is " + footToCm(foot) + " cm");
console.log("5.6ft is " + ftToInch(foot).toPrecision(3) + " inch");

let side1 = 5;
let side2 = 6;
let side3 = 7;

let s = (side1 + side2 + side3) / 2;

let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area.toPrecision(3));

for (let year = 2014; year <= 2024; year++) {
  let d = new Date(year, 0, 1);

  if (d.getDay() === 0) {
    console.log("1st January is being a Sunday  " + year);
  }
}

function getFileExtension(filename) {
  return filename.split(".").pop();
}

const result2 = getFileExtension("module.txt");
console.log(result2);

let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++;
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }
  m = 0;
}
console.log(item + " ( " + mf + " times ) ");

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function Ordinal(n) {
  let o = ["th", "st", "nd", "rd"],
    x = n % 100;
  console.log(n);
  return x + (o[(x - 20) % 10] || o[x] || o[0]);
}

for (n = 0; n < color.length; n++) {
  let ordinal = n + 1;

  let output = Ordinal(ordinal) + " choice is " + color[n] + ".";

  console.log(output);
}
