let myFullDetails = function(city,country,state){
    console.log("My full name is " + this.fName + " " + this.lName + " and my age is " + this.age + " and my city is " + city +" " + country + " " + state)
}

let personDetail = {
    fName : "Deep",
    lName :  "patel",
    age: 21
}

let personDetail1 = {
    fName : "Ayush",
    lName :  "Mehta",
    age: 22
}

let personDetail2 = {
    fName : "kevin",
    lName :  "usadadiya",
    age: 20
}
myFullDetails.call(personDetail2,"surat", "India","Gujarat" )
console.log(personDetail2);
myFullDetails.apply(personDetail, ["ahmedabd", "India","Gujarat"])
console.log(personDetail);
let copy = myFullDetails.bind(personDetail1, "Baroda", "India","Gujarat")
copy()
console.log(personDetail1);

