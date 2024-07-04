const isEven = (num) => {
    if(num % 2 == 0)
        {
            console.log("Even")
        }else{
            console.log("odd")
        }
}
isEven(20)

let text = "The rain in SPAIN stays mainly in the plain";
const myArr = text.matchAll("in");
console.log(myArr);