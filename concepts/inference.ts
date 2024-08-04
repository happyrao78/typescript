// func-1
//: number after the args in function implies that the function always returns a number value only
function addtwo(num:number):number{
    return (num+2);
    // return "happy";
}
const show=addtwo(5); //5
console.log(show);
//func-2
function toUp(name:string){
    return name.toUpperCase();
}
const show2= toUp("happy rao"); //HAPPY RAO
console.log(show2);

//func-3
function SignUp(name:string,email:string,phoneNum:number,isPaid:boolean){
    
}
const show3=SignUp("happy yadav","happy_yadav@hunar.ai",8595864036,true);
// console.log(show3);
//func-4
const login = (name:string,mobile:number,isYoung:boolean=false)=>{}

const show4=login("hishita gupta",7901730361);
// console.log(show4);

const students = ["happy","hishita","bittu"];
// const students=[50,60,70];

students.map((e): string =>{
    return `name: ${e}`;
})
function consoleError(errmsg:string):void{
    console.log(errmsg);
}
function errorNew(errmsg:string):never{
    throw new Error(errmsg);
}
export {}