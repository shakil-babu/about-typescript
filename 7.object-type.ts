// object type

// first way to declare object (not recommended)
let personDetails:object = {
    firstName : "Shakil",
    lastName : "Babu",
    age:20,
};


// 2nd way to declare object (recommended)
let details:{
    name:string,
    age:number,
    isMarried:boolean,
    favLan:string[]
}

details = {
    name:'Shakil Babu',
    age:20,
    isMarried:false,
    favLan:['js','c++','ts']
}

console.log(details.isMarried)



// combine both syntaxes in the same statement
let intro:{
    name :string,
    age:number
} = {
    name:'shakil',
    age:20
}


console.log(intro.name)