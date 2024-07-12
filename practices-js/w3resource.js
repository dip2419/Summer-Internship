let date = new Date();
console.log(date.toLocaleDateString());
// console.log(window.print());

let side1 = 5;
let side2 = 6;
let side3 = 7;
let sum = (side1 + side2 + side3) / 2;
let total = Math.sqrt(sum * ((sum - side1) * (sum - side2) * (sum - side3)));
console.log(total.toPrecision(3));

function leapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapYear(2020));

for (let year = 1900; year <= 2024; year++) {
  let d = new Date(year, 0, 1);

  if (d.getDay() === 0) {
    console.log("1st January is being a Sunday  " + year);
  }
}

function celsiusToFahrenheit(val) {
  return (val * 9) / 5 + 32;
}
let result = celsiusToFahrenheit(110);
console.log(result + "\xB0F");

function ftoc(val) {
  return ((val - 32) * 5) / 9;
}
let res = ftoc(100);
console.log(res + "\xB0C");

const a = [7, 9, 0, -2];
console.log(a.findlast());   
