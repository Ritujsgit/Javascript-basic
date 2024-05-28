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

// const newDate = new Date("2024-05-28")
// console.log(newDate.toString());

//Date(year, month, day, hours, minutes, seconds, milliseconds)
// const date = new Date(2024, 4, 27, 10, 20, 30, 0);
// console.log(date.toString());//

//------------Getter Methods----------

const date = new Date();

// // getDate()
// console.log(date.getDate()); // Outputs 28 .. the day of the month

// // getDay()
// console.log(date.getDay()); // Outputs 2 ..day of the week

// //getFullYear()
// console.log(date.getFullYear());// Outputs 2024

// //getHours()
// console.log(date.getHours()); // Outputs 8

// // getMilliseconds() Returns the milliseconds (0-999) of the specified date.
// console.log(date.getMilliseconds()); // Outputs 928

// // getMinutes()Returns the minutes (0-59) of the specified date.
// console.log(date.getMinutes()); // Outputs the minutes

// // getMonth()Returns the month (0-11) of the specified date (0 for January, 1 for February, etc.).
// console.log(date.getMonth()); // Outputs the month

// // getSeconds()
// console.log(date.getSeconds()); // Outputs the seconds

// // getTime()
// console.log(date.getTime()); // Outputs the time in milliseconds

// // getTimezoneOffset()Returns the time zone difference in minutes between UTC and local time.
// console.log(date.getTimezoneOffset()); // Outputs the time zone offset in minutes

// // getUTCDate()Returns the day of the month (1-31) in UTC for the specified date.
// console.log(date.getUTCDate()); // Outputs the UTC day of the month

// //getUTCDay()Returns the day of the week (0-6) in UTC for the specified date.
// console.log(date.getUTCDay()); // Outputs the UTC day of the week

// getUTCFullYear() / getUTCHours() / getUTCMilliseconds() / getUTCMinutes() / getUTCMonth() / getUTCSeconds()
// console.log(date.getUTCFullYear()); // Outputs the UTC year


// ------------------------ Setter Methods -----------------------------------
const date2 = new Date()

// setDate(day) Sets the day of the month (1-31) for a specified date.
date2.setDate(15)
console.log(date2.toString())

// setFullYear(year, month, day) Sets the full year (optionally month and day) for a specified date.
date2.setFullYear(2025, 4, 27);
console.log(date2.toString());
