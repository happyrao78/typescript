"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var names = []; //arrya of string values
var newarr = [];
var allUsers = []; //array of object with key value pairs
allUsers.push({ name: "happy yadav", mobile: 858585 });
names.push("happy");
var MLModels = [
    [255, 785, 541]
];
//readonly arrays
function arryaReadOnly(values) {
    console.log("".concat(values[0]));
    // values.push("hey")
}
arryaReadOnly(["happy", "hishita"]);
