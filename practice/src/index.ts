/// type inference
let num: number = 50;
console.log(num);

let num1 = 30;
num1 = 40;
console.log(num1);



const dua: string = 'anisa';
console.log(dua);

function relation(a: string, b: string): string {
    return a + b
}
const check = relation('anisa', 'madiha')
console.log(check);


let naMe: String = "hello world";
console.log(naMe);


// oops
//encapsulation
class car {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price
    }
}
let student1 = new car('civic', 1000)
console.log(student1);


class student {
    idNo: number;
    grade: string;
    name: string;

    constructor(idNo: number, grade: string, name: string) {
        this.idNo = idNo;
        this.grade = grade;
        this.name = name

    }
}
let student2 = new student(6423, '6th', 'ali');
console.log(student2);
