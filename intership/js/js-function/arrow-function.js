// const person = () =>{

// }

const value = (num1,num2) => num1 + num2
console.log(value(1,2))

const employee = () =>{
    let name = "deep"
    console.log(name)
}
employee()

const squareNumber = (num) => {
    num = num ** 2
    return num
}
console.log(squareNumber(5))

const getFullName = (firstName,lastName) => {
    return `My full name is ${firstName} ${lastName}`
}
console.log(getFullName("Deep","Patel"))

const calculateArea = (lenght,width) =>{
    console.log(lenght * width)
}
calculateArea(5,10)
