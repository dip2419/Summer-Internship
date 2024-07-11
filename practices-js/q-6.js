const input = "Patel Nirav";
const output = input
  .split(" ")
  .map((word) => word.split("").reverse().join(""))
  .join(" ");
console.log(output);
