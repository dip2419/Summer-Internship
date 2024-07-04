//Immediately Invoked Function Expression(IIFE)

//normal function in IIFE and Name IIFE
(function chai(name){
    console.log(`My name is ${name}`)
})("deep");

//Arrow Function in IIFE and IIFE
((name) =>{
    console.log(`My name is ${name}`)
})("deep");