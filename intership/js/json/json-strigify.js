const names = {
    name: "deep",
    surname: "patel",
    age: 21
};
const result1 = JSON.stringify(names);
const parsedResult = JSON.parse(result1);
console.log(parsedResult.age);
