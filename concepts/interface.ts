interface User {

    readonly dbid :number;
    name :string;
    email:string;
    isYoung ?: boolean;
    startTrail() : string;
    couponCode(couponTitle: string, couponDiscount: number) : number;
}
//adding the new values to it by redeclaring the values
interface User {
    githubToken ?:string
}
//inheritance
interface user_two extends User{
  role ?: "sde1" | "sde2" | "sde3"//optional 
}
const happy  :user_two= {
    dbid:456,
    name:"happy",
    email:"happy@google.com",
    startTrail(){
        return "hello happy";
    },
    couponCode(title:"HAPPY450",discount:999){
        return 10000;
    }
}