"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list = {
    amount: 4500,
    items: "facewash"
};
var details = {
    cardNum: 778899,
    holderName: "happy yadav",
    cvv: 2567
};
for (var key in details) {
    console.table("".concat(key, ": ").concat(details[key]));
}
