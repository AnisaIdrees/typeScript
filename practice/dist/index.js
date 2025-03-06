"use strict";
/// type inference
let num = 50;
console.log(num);
let num1 = 30;
num1 = 40;
console.log(num1);
const dua = 'anisa';
console.log(dua);
function relation(a, b) {
    return a + b;
}
const check = relation('anisa', 'madiha');
console.log(check);
let naMe = "hello world";
console.log(naMe);
// oops
//encapsulation
class car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let student1 = new car('civic', 1000);
console.log(student1);
class student {
    constructor(idNo, grade, name) {
        this.idNo = idNo;
        this.grade = grade;
        this.name = name;
    }
}
let student2 = new student(6423, '6th', 'ali');
console.log(student2);
//# sourceMappingURL=index.js.map