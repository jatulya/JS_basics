/*let name1 = "Atulya"
console.log(typeof(name1))
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

//some string methods
//for more methods, search mdn string methods
let name2 = 'Shenu\'s'
console.log(name2.length) //length of the string = 7 (\' is an escape seq->single char)
console.log('hello'.toUpperCase()) //'HELLO'
name2 = "Shrenu Shri"
console.log(name2.slice(3,8)) //prints "enu S"
console.log(name2.slice(4))// prints "nu Shri"
console.log(name2.replace('Shri',"Goenka")) //prints Shrenu Goenka
console.log(name2) //prints Shrenu Shri -> to make the changes permanent, assign the modified value
name2 = "   Shrenu Pa riakh   "
name2 = name2.trim()  //removes whitespaces from the end
console.log(name2)*/

//strings are immutable, eg -> we can't do name2[9] = 's' like that

sentence = 'The quick brown fox jumps over the lazy dog.';
let word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// op: "The word "fox" is in the sentence"

sentence = 'Cats are the best!';
console.log(sentence.endsWith('best!')); //op ->true
console.log(sentence.endsWith('best', 17)); //op-> true
//17 -> the end position of the string searching for
const str2 = 'Is this a question?';
console.log(str2.endsWith('question'));
// Expected output: false
console.log(sentence.endsWith('are'))

sentence = sentence.concat(" 1000")
sentence = sentence.slice('Cats are the best!')
Number.parseInt(sentence)
console.log(typeof(sentence))
