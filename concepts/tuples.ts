//strict type follow via tuples
let myfunc :[string , number]=["happy yadav",7091];

//assigning the same values to array
let rgb  :[number,number,number]=[254,456,658];

//checking with the type keyword
type User=[string,number];
let newUser :User =["happy yadav",8585];
//values can be overrriden
newUser[0]="HAPPY RAO";
newUser.push("true");//store the values as string and number only as defined



export{}