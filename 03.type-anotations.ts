//Example: Type Annotation in TypeScript

var age: number = 32; // number variable
var Name: string = "John";// string variable
var isUpdated: boolean = true;// Boolean variable


//  Type Annotation of Parameters

function display(id:number, name:string)
{
    console.log("Id = " + id + ", Name = " + name);
}

// Type Annotation of Objects
var employee : {
    id: number;
    name: string;
};

employee = {
  id: 100,
  name : "John"
}

//  Type Annotatin in Array
let mixedArr:(string | number | boolean )[] = ['Shakil',true,20];
console.log(mixedArr[2]);

// type annotation with parameter
let sayName = (Name:string, isMarried:boolean):string =>{
  return `Hello ${Name} , You're ${isMarried ? 'Married' : 'Bachelor !'}` ;
}
let result = sayName('Shakil Babu', false) ;
console.log(result);