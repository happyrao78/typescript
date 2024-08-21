//"type" keyword is used for using this object entirely anywhere in the development by multiple developers
type shoppingList={
    readonly amount:number;//cant be changed
    items:string;
    extraItems?:string;//optional
}

const list : shoppingList={
    amount:4500,
    items:"facewash"
}

// list.amount=45000; can't change the value due to readonly mode.

///combing the properties of different object

type CardNumber={
    cardNum:number
}

type CardHolder={
    holderName:string
}

type carddetails = CardNumber & CardHolder &{
    cvv:number
}

const details:carddetails={
    cardNum:778899,
    holderName:"happy yadav",
    cvv:2567
}
// for in loop is used for iterating through objects
for (const key in details) {
    console.table(`${key}: ${details[key]}`)
    
}
// console.table(details.holderName.toUpperCase());


export {}