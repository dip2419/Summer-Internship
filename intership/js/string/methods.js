//lenght method
let Name = "Deep Patel.G"
console.log(Name.length)

//charAt method
let text = "Deep-Patel "
console.log(text.charAt(3))
console.log(text.at(0))//latest

//charCodeAt method
let text1 = "Deep Patel"
console.log(text1.charCodeAt(0))

//slice method
let text2 = "hello world"
console.log(text2.slice(0,5))
console.log(text2.slice(5,0))
console.log(text2.slice(6))
console.log(text2.slice(0,-4))
console.log(text2.slice(-2))

//substring method
let  text3 = "Hello world"
console.log(text3.substring(0,5))
console.log(text3.substring(5,0))
console.log(text3.substring(6))
console.log(text3.substring(-1,-5))
console.log(text3.substring(-5))

//toUpperCase and toLowerCase method
let userName = "deep Patel"
console.log(userName.toUpperCase()) 
console.log(userName.toLowerCase())

//concat method
let fName = "deep"
let lName = "patel"
console.log(fName.concat(" ", lName))

//trim method
let text5 = "         deep "
console.log(text5.trim())
console.log(text5.trimStart())
console.log(text5.trimEnd())

//repeat method
console.log(text.repeat(10))

//replace method
console.log(text.replace("Deep", "Dip"))
console.log(text.replace(/deep/i, "Dip"))
console.log(text.replace(/e/g, "i"))

//split method
let alphabet = "my name is deep patel"
console.log(alphabet.split(""))
console.log(alphabet.split(" "))
console.log(alphabet.split())
console.log(alphabet.split("m"))

//padStart method
let pad = "5"
console.log(pad.padStart("5", "1"))

//padEnd method
let pad1 = "5"
console.log(pad.padEnd("5", "1"))