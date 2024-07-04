let myDate = new Date();
console.log(myDate.toUTCString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let setDate = new Date(2023,0,10);
console.log(setDate.toDateString());

let time = new Date()
console.log(time.getHours() + "/" + time.getMinutes() + "/" + time.getSeconds());
console.log(time.getFullYear());
console.log(time.getMonth() + 1 );
console.log(time.getDay());
console.log(time.getDate());