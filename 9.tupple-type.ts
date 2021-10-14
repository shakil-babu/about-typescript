// tupple type
/*
    A tupple is an array with a fixed number of elements whose types are known.
    A tuple works like an array with some additional considerations:
    The number of elements in the tuple is fixed.
    The types of elements are known, and need not be the same.
*/


let details:[number, string, boolean] = [10,'js',false];
console.log(details[0]);


// if our tupple will be
let tup : [string, number] = [10,'js'];

// it will show us error because we broken the tupples rules
// For this reason, it’s a good practice to use tuples with data that is related to each other in a specific order.

tup = ['js', 10];
// it's right way
