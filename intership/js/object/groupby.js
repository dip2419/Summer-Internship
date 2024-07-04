const user = [
    { name:"deep",gender:"male"},
    { name:"ayushi",gender:"female"},
    { name:"ayush",gender:"male"},
    { name:"deepika",gender:"female"},
    { name:"ajay",gender:"male"},
    { name:"sunita",gender:"female"},
    { name:"kevin",gender:"male"},
    { name:"kavita",gender:"female"},
    { name:"jeet",gender:"male"},
    { name:"savita",gender:"female"},
    { name:"milan",gender:"male"},
    { name:"babita",gender:"female"},
    { name:"yash",gender:"male"},
    { name:"champa",gender:"female"}
]

const result = Object.groupBy( user , ({ gender }) => gender)
console.log(result)





