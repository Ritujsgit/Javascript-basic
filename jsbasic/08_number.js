const score = 400
const score2 = new Number(400)

console.log(`value of score is ${score}(type: ${typeof score}) and the value of score2 is ${score2} (type: ${typeof score2})`);
// output is 'value of score is 400(type: number) and the value of score2 is 400 (type: object) '

console.log(score2); // output [Number: 400]

// In JavaScript, string interpolation (template literals) implicitly calls the .toString() method on the expressions it interpolates.

//-----------------------------------------------//

// Methods of Number---------------
// constructor
// : 
// ƒ Number()
// toExponential
// : 
// ƒ toExponential()


//  toFixed()
console.log(score2.toFixed(2));// 400.00 .. fixed the decimal value to 2

// toLocaleString()
const num5 = 10000000
console.log(num5.toLocaleString());// 10,000,000

const num6 = 10000000
console.log(num5.toLocaleString('en-IN'));// 1,00,00,000
// -----------------------------------
// toString()
console.log(score2.toString().length);//output : 3....here we have convert this number into string so we can use all the string methods with it
// -------------------------

//  toPrecision()
console.log(score2.toPrecision(4));// output is 400.0 ... here 4 means total digit should be 4.. some time if you dont know the exact digit of the output and you use the toPrecision()method then you might get the unwanted result:
const num2 = 654.8754
console.log(num2.toPrecision(4));// output 654.9

const num3 = 654.8
console.log(num3.toPrecision(3));// output 655

const num4 = 6548
console.log(num4.toPrecision(3));// output 6.55e+3

// -------------------------------




// valueOf
// : 
// ƒ valueOf()

