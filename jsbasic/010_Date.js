// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
// const myDate = new Date();
// console.log(myDate) //Output : 2024-05-28T07:42:20.866Z

// // We can use various methods to convert this date into more readable value.
// console.log(myDate.toString()) //Output : Tue May 28 2024 07:42:20 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toLocaleString()) // Output : 5/28/2024, 7:42:20 AM
// console.log(myDate.toLocaleDateString()) //Output : 5/28/2024
// console.log(myDate.toLocaleTimeString()) // Output : 7:42:20 AM

// console.log(myDate.toDateString()) //Output : Tue May 28 2024
// console.log(myDate.toTimeString()) // Output : 07:42:20 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toISOString()) // Output : 2024-05-28T07:42:20.866Z
// console.log(myDate.toJSON()) //Output : 2024-05-28T07:42:20.866Z

//---------------------------
// give your own date:- 0 is for jan, 1 is for feb 2 is for mar and so on..
// const newDate = new Date(2024, 4, 28)
// console.log(newDate.toString());// Tue May 28 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

// you can also add time after the date
// const newDate = new Date(2024, 4, 28, 13, 32)
// console.log(newDate.toString());// Tue May 28 2024 13:32:00 GMT+0000 (Coordinated Universal Time)

const newDate = new Date("2024-05-28")
console.log(newDate.toString());