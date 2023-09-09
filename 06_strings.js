let name1 = "Atulya"
let name2 = 'Shenu'
console.log(typeof(name1))
console.log(name2.length)
//template literals -> we can add "", '' and specify variable directly, without the using the + sign
//${varname} -> this usage is called string interpalation
let sentence = `Nikhil's Friend's name is "Pramod"` 
console.log(sentence)

// escape sequences
name1 = "banana \'s world" //\' char
console.log(name1)
console.log("Hello \n World\r") // new line character
console.log("usage of escape char r -> let's see what \r happens")
//brings the curson to the beginning of the line ->here it prints "happens escape char r -> let's see"