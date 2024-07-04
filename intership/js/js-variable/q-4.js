//let variable cannot be re-declare but can re-assign the value. let variable is a bloack scope variable.

let b = 10;
//let b = 20;//cannot re-declare
    b = 20;
let fName = "patel"
{
    let fName = "deep"
    console.log(fName)
}
console.log(fName)

