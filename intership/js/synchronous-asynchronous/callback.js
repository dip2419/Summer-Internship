function add(a, b) {
  console.log(a + b);
}
function sum(c, d, addsum) {
  addsum(c, d);
}
sum(1, 2, add);

// sum(4,5, (a,b) => {
//     console.log(a+b);
// });


//callback hell 
function setData(data, getData) {
    setTimeout(() =>{
        console.log("data", data);
        if(getData){
            getData()
        }
    }, 2000)
}

setData(1, () =>{
    setData(2, () =>{
        setData(3)
    })
})

