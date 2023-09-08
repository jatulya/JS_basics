//functions
function add(s1, s2){
    console.log("The adding work is done:")
    return s1+s2
}
//arrow functions
const add2 = (s1, s2) => {
    console.log('From the arrow function')
    return s1+s2
}

const add3 = (s1,s2) => s1+s2

const greet = () => {
    console.log("Hey peeps")
    return "From greet"
}

console.log("From normal function- adding 7&8 : " + add(7,8))
console.log(`From arrow function 1 - adding 90&5: ${add2(90,5)}`) 
console.log(`From arrow function 2 - adding 20&3: ${add3(20,3)}`)
let v = greet()
console.log(v)


