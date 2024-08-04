type User = {
    name:String;
    mobile:Number;
    isYoung:boolean
}
//if the developer team wants to use the User object anywhere they can just use it in their function by passing it as an argument
function getDetails(user: User): User{
    return {name:"",mobile:8585,isYoung:true}
}

getDetails({name:"",mobile:8585,isYoung:false});