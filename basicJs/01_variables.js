//understanding different methods to declare a variable
var a = 10
let b = "Hey there"
const d = 7
{
    console.log("inside a block")
    let b = 20
    console.log(b)
}
console.log("Outside the block: " + b)