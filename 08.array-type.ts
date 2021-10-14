// array type

// numbers array be like
let numbers:number[] = [10,20,30,40,50];
numbers[0] = 100;
console.log(numbers);


// string array
let names:string[] = ['shakil','john','baby','babu'];
console.log(names);


// boolean array
let stable:boolean[] = [true, false, true, false];
console.log(stable[0]);


// string and boolean array
let arr : (string | number )[] = ['shakil',10,'babu',20];


// mixed array
let array:(string | number | object | boolean)[] = ['ts',10,{name:"shakil"},false];
console.log(array[2]);


// any type array
let arrr:any[] = [10,'shakil',false,{age:10},[10]];
console.log(arrr[arrr.length-1]);

