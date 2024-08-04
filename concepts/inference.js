"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// func-1
function addtwo(num) {
    return (num + 2);
}
var show = addtwo(5); //5
console.log(show);
//func-2
function toUp(name) {
    return name.toUpperCase();
}
var show2 = toUp("happy rao"); //HAPPY RAO
console.log(show2);
//func-3
function SignUp(name, email, phoneNum, isPaid) {
}
var show3 = SignUp("happy yadav", "happy_yadav@hunar.ai", 8595864036, true);
console.log(show3);
//func-4
var login = function (name, mobile, isYoung) {
    if (isYoung === void 0) { isYoung = false; }
};
var show4 = login("hishita gupta", 7901730361);
console.log(show4);
