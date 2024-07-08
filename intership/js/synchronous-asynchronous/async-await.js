function setData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("data", data);
        resolve("succes");
      },3000);
    });
  }

 let result = async () =>{
    await setData(1)
    await setData(2)
    await setData(3)
    await setData(4)
    await setData(5)
  }
  console.log(result());