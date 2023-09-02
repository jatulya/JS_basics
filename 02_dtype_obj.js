//understanding data types
let c = undefined 
console.log(typeof c) //prints undefined
let e = Symbol("Wow")
console.log(typeof e)

//objects
const obj1 = {
    "key1" : true,
    wonder : null,    
    78 : "fire",
    25 : 45
}
console.log(obj1) //prints in dictionary format
console.log(obj1["wonder"])
console.log(obj1.key1)
obj1["maybe"] = undefined
console.log(obj1)
delete obj1[78]   //deletes the key and value pair from object
console.log(obj1)

//adding a number to string
let s = "Beenu"
s = s + 2
console.log(s)

//converting types
let a = "98"
a=Number.parseInt(a)//converts it into number
console.log(typeof a)