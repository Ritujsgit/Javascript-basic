//We can create a string as follows:
const str = "Hello"
console.log(`value of str is '${str}' and its datatype is '${typeof str}' `); // output:: value of str is 'Hello' and its datatype is 'string' 

const str2 = "Ritu"

const str1 = new String("HelloNew")
console.log(`value of str1 is '${str1}' and its datatype is '${typeof str1}'`) // output value of str1 is 'HelloNew' and its datatype is 'object'


// if we use this second method on the browser's console then we can see all the methods of string
// const string1 = new String("hello")
// console.log(string1)

// String {'hello'}
// 0
// : 
// "h"
// 1
// : 
// "e"
// 2
// : 
// "l"
// 3
// : 
// "l"
// 4
// : 
// "o"
// length
// : 
// 5
// [[Prototype]]
// : 
// String
// anchor
// : 
// ƒ anchor()
// at
// : 
// ƒ at()
// big
// : 
// ƒ big()
// blink
// : 
// ƒ blink()
// bold
// : 
// ƒ bold()


// charAt
// : 
// ƒ charAt()
console.log(str.charAt(0)); // Output: "H"

// charCodeAt
// : 
// ƒ charCodeAt()
console.log(str.charCodeAt(0)); // Output: 72

// codePointAt
// : 
// ƒ codePointAt()

// concat
// : 
// ƒ concat()
console.log(str.concat(" ", str1)); // Output: "Hello HelloNew"
console.log(str.concat(" ", str1, " ", str2)); // Output Hello HelloNew Ritu


// constructor
// : 
// ƒ String()


// endsWith
// : 
// ƒ endsWith()
console.log(str.endsWith("lo")); // Output: true

// fixed
// : 
// ƒ fixed()
// fontcolor
// : 
// ƒ fontcolor()
// fontsize
// : 
// ƒ fontsize()
// includes
// : 
// ƒ includes()
console.log(str.includes("ell")); // Output: true

// indexOf
// : 
// ƒ indexOf()
console.log(str.indexOf("e")); // Output: 1


// isWellFormed
// : 
// ƒ isWellFormed()
// italics
// : 
// ƒ italics()


// lastIndexOf
// : 
// ƒ lastIndexOf() :: Returns the position of the last occurrence of a specified value in a string.
console.log(str.lastIndexOf("l")); // Output: 3

// length
// : 
// 0
// link
// : 
// ƒ link()
// localeCompare
// : 
// ƒ localeCompare()


// match()
console.log(str.match(/o/g)); // Output: ["o"]


// matchAll
// : 
// ƒ matchAll()
// normalize
// : 
// ƒ normalize()
// padEnd
// : 
// ƒ padEnd()
// padStart
// : 
// ƒ padStart()


// repeat()
console.log(str.repeat(3)); // Output: "HelloHelloHello"


// replace()
console.log(str.replace("Hello", "Hello JavaScript")); // Output: "Hello JavaScript"

// replaceAll
// : 
// ƒ replaceAll()


// search()
console.log(str.search("o")); // Output: 4


// slice()
console.log(str.slice(0, 4)); // Output: "Hell"


// small
// : 
// ƒ small()
// split
// : 
// ƒ split()

//  startsWith()
console.log(str.startsWith("He")); // Output: true

// strike
// : 
// ƒ strike()
// sub
// : 
// ƒ sub()
// substr
// : 
// ƒ substr()
// console.log(str1.substr(-6, 4)); // Output: "ll"

//substring()
console.log(str.substring(2, 4)); // Output: "ll"
// sup
// : 
// ƒ sup()
// toLocaleLowerCase
// : 
// ƒ toLocaleLowerCase()
// toLocaleUpperCase
// : 
// ƒ toLocaleUpperCase()

// toLowerCase()
console.log(str.toLowerCase()); // Output: "hello world"

// toString
// : 
// ƒ toString()
// toUpperCase
// : 
// ƒ toUpperCase()
// toWellFormed
// : 
// ƒ toWellFormed()
// trim
// : 
// ƒ trim()
// trimEnd
// : 
// ƒ trimEnd()
// trimLeft
// : 
// ƒ trimStart()
// trimRight
// : 
// ƒ trimEnd()
// trimStart
// : 
// ƒ trimStart()
// valueOf
// : 
// ƒ valueOf()
// Symbol(Symbol.iterator)
// : 
// ƒ [Symbol.iterator]()
// [[Prototype]]
// : 
// Object