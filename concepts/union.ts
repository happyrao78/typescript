let x: string | number;
x="happy"
x=45;

type admin ={
    name: string;
    id: number;
}

type user ={
    userName: string;
    id:number;
}

let login : admin | user ={
    name:"happy yadav",
    id:5
}

login={// same just only tried for declaring again for the username
    userName:"happy_yadav",
    id:5
}
// different data types for function arguments
const funcTest = (name: string | number) =>{
    console.log(`Name is : ${name}`)

}

funcTest(45);
funcTest("Happy yadav");

// using union in arrow fucntion
const funcTest_another = (id :string | number) =>{
    if(typeof id === "string"){
        id.toUpperCase();
    }

    if(typeof id === "number"){
        id +5;
    }
}


//arrays

let id : string[] | number[] = ["happy","hishita"];// all string values
id=[1,2,3,4,5];//all numbers 

//for different datatype values we can use this syntax:

let id_two : (string |  number | boolean)[]=["happy",8585,true];


//fixxed values which can not be changed or altered :

let seatAllotment :"aisle" | "window" | "middle";
seatAllotment="window"
seatAllotment="middle"