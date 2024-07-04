//indexOf method
let fruits = "apple,orange,graphs,orange,banana"
console.log(fruits.indexOf("orange"))
console.log(fruits.indexOf("orange",13))

//lastindexof method
let fruits1 = "apple,orange,graphs,orange,banana"
console.log(fruits1.lastIndexOf("orange"))

//search method
let fruits2 = "apple,orange,graphs,orange,banana"
console.log(fruits2.search("orange"))
console.log(fruits2.search("orange",13))

//match method
let fruits3 = "apple,orange,graphs,orange,banana"
console.log(fruits3.match("an"))
console.log(fruits3.match(/an/))
console.log(fruits3.match(/An/i))
console.log(fruits3.match(/an/g))

//include method
let fruits4 = "apple,orange,graphs,orange,banana"
console.log(fruits4.includes("orange"))
console.log(fruits4.includes("orange", 12))

//startWith method
let intro = "My name is deep patel"
console.log(intro.startsWith("My"))
console.log(intro.startsWith("n", 3))

//endWidth method
let intro1 = "My name is deep patel"
console.log(intro1.endsWith("l"))
console.log(intro1.endsWith("y", 2))

const sentence = "JavaScript is cool!";
console.log(sentence.concat(" I love it!"));


