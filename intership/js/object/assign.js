let firstName = {
    fName:"Deep"
}
let lastName = {
    lName:"Patel"
}

let fullName = Object.assign({},firstName,lastName,{age:21})
console.log(fullName);


function printName(arg) {
    const defaultValue = {
        fName : "Name",
        lName : "Surname"
    }
    arg = Object.assign({},defaultValue,arg)

    console.log(`${arg.fName} ${arg.lName}`)
}

printName({
    fName:"deep"
})
let o1 = {a:1}
let o2 = {b:2}
let o3 = Object.assign({...o1},o2)
console.log(o1);



