const names :string[]=[]//arrya of string values
const newarr :Array<number>=[]
type user={
    name:string;
    mobile:number;
}

const allUsers: user[]=[]//array of object with key value pairs

allUsers.push({name:"happy yadav",mobile:858585});
names.push("happy")


const MLModels: number[][]=[
    [255,785,541]
]

//readonly arrays

function arryaReadOnly(values: readonly string[]){
console.log(`${values[0]}`)
    
        // values.push("hey")
}
arryaReadOnly(["happy","hishita"]);


export{}