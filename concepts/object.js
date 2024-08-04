"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "happy",
    phone: 8595864,
    email: "happy_yadav@hunar.ai"
};
console.log(user.email.toUpperCase());
//function passing object as argument
function course(_a) {
    var String = _a.title, Number = _a.price, boolean = _a.isAvailable;
}
var courseInfo = {
    title: "50 Shades of Grey",
    price: 4999,
    isAvailable: true,
    email: "happpy_yadav@hunar.ai"
};
course(courseInfo);
//function returning a object
function AuthLogin() {
    return { name: "happy", mobile: 789654, website: "www.happyrao.tech" };
}
