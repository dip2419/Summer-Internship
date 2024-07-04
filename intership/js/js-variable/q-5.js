const c = 10;
// const c = 20;//cannot re-declare 
// c = 20;//cannot re-assign

const fName = "deep";
{
    const fName = "patel";
    console.log(fName);
}
console.log(fName);

      