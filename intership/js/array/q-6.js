

function containsStrictNumber(n) {
  return n.some((item) => typeof item === "number");
}

console.log(containsStrictNumber([1, 2, 3])); // true
console.log(containsStrictNumber(["1", "a", "h"])); // false
console.log(containsStrictNumber(["a", 3, "gh"])); // true
console.log(containsStrictNumber(["a", "3df", "gh"])); // false
