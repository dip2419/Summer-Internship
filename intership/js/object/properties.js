const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN",
};

console.log(Object.defineProperty(person, "age", { value: "21" }));
console.log(person.age);
console.log(Object.defineProperty(person, "lastName", { value: "patel" }));
delete person.firstName;
console.log(Object.getOwnPropertyNames(person));
console.log(Object.keys(person));
console.log(Object.getOwnPropertyDescriptor(person, "age"));
console.log(Object.getPrototypeOf(person));
console.log(Object.hasOwn(person, "language"));
console.log(person.hasOwnProperty("language"));
