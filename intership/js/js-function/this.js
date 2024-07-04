const person = {
    fname:"deep",
    lname:"patel",
    age:"18",

    message:function(){
        console.log(`My Name is ${this.fname}`)
    }
    
}
person.message()