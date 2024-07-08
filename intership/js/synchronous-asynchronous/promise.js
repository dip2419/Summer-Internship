function setPromise() {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("succes");
    reject("due to network error");
  });
}
let promise = setPromise();
promise.then((res) => {
  console.log("promise fulfill", res);
});

promise.catch((err) => {
  console.log("promise rejected", err);
});

//promise chaning
function setData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", data);
      resolve("succes");
    },3000);
  });
}

setData(1).then(() =>{
    setData(2).then((res)=>{
        console.log(res);
    })
})
