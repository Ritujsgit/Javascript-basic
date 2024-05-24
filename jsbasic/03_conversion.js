let score = 33
let score_string = String(score)
console.log(score_string, typeof score_string); // output will be 33 string

let score_str = '33'
let score_Num = Number(score_str)
console.log(score_Num, typeof score_Num);// output will be 33 number

let score_NaN = '33abc'
let score_Nan2 = Number(score_NaN)
console.log(score_Nan2, typeof score_Nan2);// output will be NaN number 

//--------------------------------TRUE FALSE---------------------------------

let isLoggedIn = 1
let isLoggedIn_Bool = Boolean(isLoggedIn)
console.log(isLoggedIn_Bool, typeof isLoggedIn_Bool);// output will be True Boolean 

let isNotLoggedIn = 0
let isNotLoggedIn_Bool = Boolean(isNotLoggedIn)
console.log(isNotLoggedIn_Bool, typeof isNotLoggedIn_Bool);// output will be False Boolean

let isNotLoggedIn_str = ""
let isNotLoggedIn_Bool_str = Boolean(isNotLoggedIn_str)
console.log(isNotLoggedIn_Bool_str, typeof isNotLoggedIn_Bool_str);// output will be False Boolean

let isLoggedIn_str = "Hello"
let isLoggedIn_str_Bool = Boolean(isLoggedIn_str)
console.log(isLoggedIn_str_Bool, typeof isLoggedIn_str_Bool);// output will be True Boolean 