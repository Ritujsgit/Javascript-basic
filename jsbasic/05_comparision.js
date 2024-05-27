// Compair two or more operands.. it returns a boolean value (TRUE OR FALSE)

// console.log(5 > 4); // returns true
// console.log(5 >= 4);// returns true
// console.log(5 < 4);// returns False
// console.log(5 <= 4);// returns False
// console.log(5 == 4);// returns False
// console.log(5 != 4);// returns true

// console.log("2" > 1); // returns true but its not true as the data type of both operands are different
// console.log("02" >1); // returns true but its not true as the data type of both operands are different

console.log("3" == 3); // returns true but its not true as the data type of both operands are different but its not checking the datatype

console.log(3 === 3); // '==='is used to check the value along with the data type.. if both data type is same only then it will return true

//Lets compair the null with 0
console.log(null > 0); // returns False, because comparison operator convert the null into 0 nand then check.. the result is false because 0 is not greater then 0
console.log(null == 0); // returns False, because EQUALITY Check operator work differently than comparison operator. it does not convert the null into 0.

console.log(null >= 0);// returns True, because comparison operator convert the null into 0 and then check.. the result is True because 0 is equal to 0