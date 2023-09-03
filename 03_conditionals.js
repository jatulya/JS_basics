let a = 57
//if-else
if (a>=18){
    console.log("you can drive")
}
else if (a<18 && a>=13){
    console.log ("You are not eligible to vote but you can still go for driving test")
}
else{
    console.log("You are kid, wait to grow up")
}

//switch
let day = "Monday"
switch(day) {
    case 'Sunday': console.log("A holiday!!"); break;
    case 'Monday':
    case 'Tuesay': console.log('Work hard'); break;
    default: console.log(`Ah, what a ${day}. `) 
}

//ternary example, can be used anywhere, anyway
a = 17
console.log("You can", (a>=18)? "drive, Hurray!!":"not drive. Wait for a while!")
/*note that I didn't add any extra space after "can" or before "drive" and "not drive" 
because a space is there by default*/

//conditional operators
let b = "17"
console.log(b==a) //false -> == checks values are equal
console.log(a===b) //false -> checks if values and types are equal
console.log(a !== b) //true -> checks if values are not equal or its type