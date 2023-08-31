//understanding data types
let c = undefined 
console.log(typeof c) //prints undefined
let e = Symbol("Wow")
console.log(typeof e)
//objects
const obj1 = {
    "key1" : true,
    "wonder" : null,    
    78 : "fire",
    25 : 45
}
console.log(obj1) //prints in dictionary format
console.log(obj1["wonder"])