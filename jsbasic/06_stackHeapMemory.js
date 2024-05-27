// We have studied earlier that we have two types of DATA TYPES:- Primitive and non Primitive

// Premitive data types are assigned to STACK memory and non premitive are assigned to a HEAP

// -----Premitive data type (Premitive Data types are called by value. means when we want to change this kind of variable then a copy is provided and we can change on that copy and it does not affect the original variable)

// Premitive data types are assigned to STACK memory

// example:-
// let user1 = "Ritu@gmail.com"
// console.log(user1);//Ritu@gmail.com

// let user2 = user1
// console.log(user2);//Ritu@gmail.com

//now if we change the value of user2 does it affect the user1.. NO.. as inside the user2 only a copy of user1 is assigned. 
// user2 = "Ritujoshi1oct@gmail.com"

// console.log(user1);//Ritu@gmail.com
// console.log(user2);//Ritujoshi1oct@gmail.com



//------Non Premitive data type OR REFFERENCE data type (which can have multiple values, and this types are called by reference, )
// When a variable is called by reference, a reference to the actual data is passed to the variable. This means that changes made to the data inside the variable do affect the original variable.

// non premitive are assigned to a HEAP Memory

const user3 = {
    "email" : "Ritu@gmail.com",
    "name" : "Ritu"
}

console.log(user3.email); // Ritu@gmail.com

const user4 = user3
console.log(user4.email); //Ritu@gmail.com

//now if we change the value of user4 does it affect the user3.. YES.. as inside the user2 only a copy of user1 is assigned. 

user4["email"] = "Ritujoshi1oct@gmail.com"

console.log(user3.email);// Ritujoshi1oct@gmail.com
console.log(user4.email); // Ritujoshi1oct@gmail.com