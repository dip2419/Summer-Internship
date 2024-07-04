const nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
console.log(nestedArray.flat());

const nestedObject = {
    name: "Vishal Kukreja",
    age: 32,
    address: {
      street: "123 Mumbai fashion St",
      city: "Midtown",
      state: "MH",
    },
    hobbies: ["reading", "drawing", "gardening"],
  };
console.log(nestedObject.name) 
console.log(nestedObject.age) 
console.log(nestedObject.address.street) 
console.log(nestedObject.address.city) 
console.log(nestedObject.address.state) 
console.log(nestedObject.hobbies[0]) 
console.log(nestedObject.hobbies[1]) 
console.log(nestedObject.hobbies[2]) 
