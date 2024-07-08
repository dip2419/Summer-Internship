function reverseString(str) {
  const reversedString = str.split("").reduce((acc, char) => char + acc, "");
  console.log(reversedString);
}
reverseString("Welcome to this Javascript Guide!");

let a = [1, 2, 3, 4, 5];
console.log(a.concat(a));

function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

console.log(mul(2)(3)(4));
console.log(mul(4)(3)(4));

function add(n) {
  return n + 6;
}
console.log(add(10));
console.log(add(21));

for (let i = 10; i < 100; i++) {
  if (i <= 3) {
    console.log("fizz");
    break;
  } else if (i > 3 && i < 15) {
    console.log("Buzz");
    break;
  } else if (i >= 15 && i <= 100) {
    console.log("fizz buzz");
    break;
  }
}

function checkPalindrome(string) {
  const len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}
console.log(checkPalindrome("nitin"));
