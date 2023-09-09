/*//understanding data types
let c = undefined 
console.log(typeof c) //prints undefined
let e = Symbol("Wow")
console.log(typeof e)

//adding a number to string
let s = "Beenu"
s = s + 2
console.log(s)

//converting types
let a = "98"
a=Number.parseInt(a)//converts it into number
console.log(typeof a)*/

//objects
const obj1 = {
    "key1" : true,
    wonder : null,    
    78 : "fire",
    25 : 45
}
console.log(obj1) //prints in dictionary format
console.log(obj1["wonder"]) //prints null
console.log(obj1.key1) 
obj1["maybe"] = undefined
console.log(obj1)
delete obj1[78]   //deletes the key and value pair from object
console.log(obj1)

const obj2 = {
    Rana: 55, Ashru: 78, Reeti: 73, Vanshi : 99
}
//printing the keys and vals using for loop
for (let i=0; i<Object.keys(marks).length; i++){
  console.log(`Marks of ${Object.keys(marks)[i]}: ${marks[Object.keys(marks)[i]]}`)
    /* Object.keys(marks) -> an array containing the keys
       Object.keys(marks).length -> gives the length of the array
       Object.keys(marks)[i] -> gives the ith key
       marks[Object.keys(marks)[i]] -> gives the value of ith key */
}

//simpler version -> for in loops 
for (let a in obj2)
 console.log("Student: " + a + ` Their Marks: ${obj2[a]}`)


