//without reference value
let employee_3 = {
    fName : "deep",
    lName : "Patel"
}
let employee_4 = {
    fName : "deep",
    lName : "Patel"
}
console.log( employee_3 == employee_4)

//with reference value
let employee_1 = {
    fName : "deep",
    lName : "Patel"
}

let employee_2 = employee_1//its called reference

console.log(employee_1 == employee_2)

const a = [1,2,3,4,5,6,7,8]//Array datatype