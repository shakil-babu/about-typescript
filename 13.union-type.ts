/*
Introduction to TypeScript union type
-------------------------------------
Sometimes, you will run into a function that expects a 
parameter that is either a number or a string. For example:
*/


function add(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

let ans = add('shakil','babu');
console.log(ans);


/*
In this example, the add() function will calculate the sum 
of its parameters if they are numbers.

In case the parameters are strings, the add() function will 
concatenate them into a single string.

If the parameters are neither numbers nor strings, the add() function throws an error.

The problem with the parameters of the add() function is that its parameters have the any type.
 It means that you can call the function with arguments that are neither numbers nor 
 strings, the TypeScript will be fine with it.

*/