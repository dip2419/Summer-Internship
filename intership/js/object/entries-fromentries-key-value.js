let person = {
    fName : "dip",
    lName : "patel",
    age : 21
}
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

let entires = Object.entries(person)
console.log(entires[1])

const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
    ];
console.log(Object.fromEntries(fruits))