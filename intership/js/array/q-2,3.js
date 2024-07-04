const users = [
  { first_name: "Handnm", last_name: "L demo", age: 17 },
  { first_name: "Q Wei", last_name: "Alxezx", age: 30 },
  { first_name: "Pdeq Twern", last_name: "Ruse", age: 22 },
  { first_name: "Widfruyn", last_name: "Ruby", age: 11 },
  { first_name: "Erdfg Pso", last_name: "Loal", age: 34 },
  { first_name: "Dedfgmors", last_name: "Poet", age: 60 },
  { first_name: "Ale4tos", last_name: "Lkeu", age: 16 },
];
const updateUser = users.map((n) => ({
  ...n,
  isMature : n.age >= 19
}));
console.log(updateUser);

let arr = [1,2,3,5]
console.log(arr[-1]);
