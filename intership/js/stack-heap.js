//stack memory used in primitive datatype
let name1 = "deep patel"
let name2 = name1
name2 = "Dip Patel"
console.log(name2);
console.log(name1);

//heap memory used in non-primitive datatype
let user = {
    Name : "deep patel",
    email : "email@gmail.com"
}
let user1 = user
user1.email = "user@gmail.com"
console.log(user1);
console.log(user);