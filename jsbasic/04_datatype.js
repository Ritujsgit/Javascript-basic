"use strict"; // all code should be as per new version

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// alert(3 + 3)// alert statement is for browser but right now we are using nodejs

// -----------------Data types----------------------------
//-----Premitive data type (which have only one value, and these data types are called by value. means when we want to change this kind of variable then a copy is provided and we can change on that copy and it does not affect the original variable)
// number = 3
// BigInt = 8765447826767478758754758974957// very long number
// string = "3"
// Boolean = true/false
// null = Standalone value // TYPE OF NULL IS OBJECT
// undefined = not defined yet //TYPE OF UNDEFINED IS UNDEFINED AS ITS A TYPE 
// Symbol = unique(symbol gives the unique values automatically)

// let abc = Symbol('12345')
// let abc2 = Symbol('12345')
// console.log(abc == abc2); // False
// console.log(abc === abc2); // False

//BigInt -- add a n at the end of the number and JS will automatically convert the number into bigint
// let bigInt = 8765447826767478758754758974957n
// console.log(bigInt);

//------Non Premitive data type OR REFFERENCE data type (which can have multiple values, and this types are called by reference, )
// When a function is called by reference, a reference to the actual parameter is passed to the function. This means that changes made to the parameter inside the function do affect the original variable outside the function.

// object = {}
// array = []
// function 
// date = data()



// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function object
//        Object  =>  object


