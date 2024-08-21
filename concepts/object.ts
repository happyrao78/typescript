const user={
    name:"happy",
    phone:8595864,
    email:"happy_yadav@hunar.ai"
}
console.log(user.email.toUpperCase());

//function passing object as argument

function course({title:String,price:Number,isAvailable:boolean}){}

let courseInfo={
    title:"50 Shades of Grey",
    price:4999,
    isAvailable:true,
    email:"happpy_yadav@hunar.ai"
}

course(courseInfo)//passed the object to a function as an argument

//function returning a object

function AuthLogin():{name: String,mobile:Number,website:String}{
    return {name:"happy",mobile:789654,website:"www.happyrao.tech"}
}

export {}