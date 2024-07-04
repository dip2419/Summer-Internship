//1.empty object
let obj1 = {};
console.log(obj1)

//2.object literal
let o1 = {
    name : "deep"//property
}
console.log(o1)

let o2 = {
    name : "ayush",
    message : function(){ //method
        return `hello`
    }
}
console.log(o2.message() + " " + o2.name)

//3.
let obj2 = {}
obj2.name = "Dip",
obj2.age = 28
console.log(obj2)

//4.Object.create()
let car = {
    model : "Tata Tigor",
    color : "White"
}
let newCar = Object.create(car);
    newCar.year = "2020"
console.log(newCar.color)

//5.
let person = new Object()
person.name = "Name"
person.age = 26
person.id = 123
console.log(person)

//6.Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";
  }
  Person.prototype.color = "black"
  // Create 2 Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");

  console.log(myFather)
  console.log(myMother);
 
  //add symbol 

  const sym = Symbol("key")
  const user = {
   name : "Name",
    age : 26,
    id : 123,
    [sym] : "key1"
  }
  console.log(user);