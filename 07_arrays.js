let a = [ 1,2,3,4,8,7]
/*let ar = [1, 2, 3, null, "Zorca","not present"]
console.log(ar) //prints [1,2,3,null,"not present"]
let b = ar.toString()
console.log(b) //prints 1,2,3,,not present
let c = ar.join('++')
console.log(c, typeof(c)) //prints 1++2++3++++not present  string
ar.push(9) //modifies original array and return the original array
console.log(ar)
ar.pop() //modifies the original array and returns the popped value
console.log(ar)
console.log(ar.shift()) // removes first element and returns it, modifies the array
delete ar[2] //just deletes the element at the index specified, but the length doesnt change
console.log("after delete",ar) //after delete [ 2, 3, <1 empty item>, 'not present' ]
console.log("after sorting: ", ar.sort()) //[ 2, 3, 'not present', <1 empty item> ]

b = [1,2,36,78,9,8,4]
//only sorting
b.sort() //alphabetical sorting
console.log(b) // o/p -> [1,2,36,4,78,8,9]

//giving a function to the sort() function
let tosort = (a,b) => a - b
console.log(b.sort(tosort))

//splice
b.splice(4, 3, "Hannah", null, 55, true)
console.log(b) //[ 1, 2, 4, 8, 'Hannah', null, 55, true ]
console.log(b.slice(3)) //[8, 'Hannah', null, 55, true]
console.log(b.slice(3, 6)) // [8, 'Hannah', null]

//for each
let a = [1, 2, 3, 4, 5]
a.forEach((ele) => {
  console.log(ele + "*" + ele)
  ele = ele*ele;
  console.log(ele)
})

//Array.from
let ar = Array.from("Hannah") //makes an array ar from "Hannah"
//console.log(ar) //o/p -> ['H','a','n','n','a','h']

//map
let a1 = ar.map((val) =>{
  console.log(val)
  return val+val
})
console.log(a1) //op-> ['HH','aa', 'nn', 'nn', 'aa', 'hh'] 

//filter
b = ["Hannah", 3, 5, '7', 'nine']
let b2 = b.filter((ele)=> {
  return ele>"ab"
})
console.log(b2) //op ['nine'] */

//reduce funtionsc-method 1
a = [10, 11, 15, 7, 3]
let a3 = a.reduce((e1,e2, e3, e4) => {
  console.log(e1,e2,e3, e4)
  return e1 - e2 + e3
})
console.log(a3 + "Method 1") 
//method 2 -> same result
const op = (e1, e2, e3,e4) => {
  console.log(e1,e2,e3,e4)
  return e1 - e2 + e3
}
console.log(a3 = a.reduce(op))

//factorial using reduce funtion given an array of first n natural numbers
b = [1,2,3,4,5] 
const op2 = (e1,e2) =>  e1*e2
console.log(b.reduce(op2))
