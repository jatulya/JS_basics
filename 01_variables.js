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

//taking inputs
b = prompt("Enter a value to print a message: ") //asks for a value, on the screen
alert(`The entered value is ${b}`) //shows a message in a box on the screen, not on the console //

//for printing values of variables between sentences, use `...${var_name}...`
console.log(`Hi, ${b}`) 