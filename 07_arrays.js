let ar = [1, 2, 3, null, "not present"]
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