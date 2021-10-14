/*
Introduction to typescript never type
The never type is a type that contains no values. Because of this, 
you cannot assign any value to a variable with a never type.

Typically, you use the never type to represent the return type of a 
function that always throws an error. For example:
*/


const thorughtError = (msg:string):never =>{
    throw new Error(msg);
}