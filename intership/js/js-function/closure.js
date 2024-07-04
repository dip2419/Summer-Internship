let myValue = function(){
    let value = 5
    console.log(value)

    let child = function(){
        
        console.log(value += 5)
    }
    return child
}
const result = myValue()
console.log(result)
result()
result()
result()
result()