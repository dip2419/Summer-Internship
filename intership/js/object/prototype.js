function person(fName,lName){
    this.firstName = fName,
    this.lastName = lName
}

person.prototype.age = 21;

const employee1 = new person("deep","patel")
const employee2 = new person("ayush","mehta")

console.log(employee1.age)
console.log(employee2)

function user(){
    this.fName = "deep",
    this.lName = "Patel"
}
user.prototype.age = 22
const person1 = new user()
console.log(person1.age);

user.prototype.age = 21
user.prototype = {age:20}
const person2 = new user()
console.log(person2.age);