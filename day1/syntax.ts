let name : string = "happy yadav";
let age :number = 20;
let isSingle :boolean = true;
// name.toUpperCase();
let x :(string | number)[]=["happy",45,"hishita"];
x.forEach(element => {
    console.log(element);
});
console.log(name.toUpperCase(), age, isSingle);

let hero:number;
const gethero=()=>{
    return 5;
    
}
hero=gethero();


export {}