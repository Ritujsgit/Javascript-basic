// console.log(Math.max(2, 8, 76, 0, 76));//76
// console.log(Math.min(2, 8, 76, 0, 76));//0
// console.log(Math.round(4545.987));// 4546 
// console.log(Math.ceil(4545.987));//4546 ..it will give the heighest value
// console.log(Math.floor(4545.987));//4545 .. it will give the lowest value
// console.log(Math.abs(-5)); // 5 gives us the positive value.. if we give positive value then it will remain same

//RANDOM-- will give us random different number from 0-1
// console.log(Math.random());0.14490382439767946

// //if we need number greater than 0
// console.log((Math.random()*10)); // 6.656608346627271

// //if we want only 1 digit number
// console.log(Math.floor(Math.random()*10));// 3

// //if you dont want a 0
// console.log(Math.floor((Math.random()*10) + 1 ));

//if we want a number between 1-6
// const max_num = 6
// const min_num = 1
// console.log(Math.floor(Math.random() * (max_num - min_num + 1) + 1 ));

//if we want a number between 10-20
const max_num = 20
const min_num = 10
console.log(Math.floor((Math.random()*(max_num - min_num + 1)) + min_num));