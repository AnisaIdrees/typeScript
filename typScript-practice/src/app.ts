
/* -------------- Tuple -----------------
Tuple ek khas type ka array hota hai jo fixed length ka hota hai. Har index pe 
jo value hogi, uska data type pehle se define hota hai. 
Isme values ka order aur type fix hota hai
*/

let student: [string, number, boolean];
student = ['aneesa', 17, true];
console.log(student);

let student1: [string, number, boolean] = ['madiha', 14, true];
student1.push('aneesa'); // tuple me push method normal array ki trha treat krta he or new values ko add krleta he 

/*Lekin yeh TypeScript ka ek exception hai!
Tuple ka fixed length hoti hai, lekin push method TypeScript ke compile time check ko bypass
 kar deta hai. Is wajah se koi error nahi aati.*/

console.log(student1); //output ['madiha', 14 , true , 'aneesa]


// agr hum tuple ko strictly fixed length bnana chahtien hen tu readonly tuple ka use krenge

let student2: readonly [string, number, boolean] = ['aneesa', 17, true,]; /*A good practice is to make your tuple readonly.
                                                      Tuples only have strongly defined types for the initial values:  */
// student2.push('developer'); // error 
console.log(student2);


//  ----------------------------- named Tuples ---------------------------------------- //

//Named tuples provide more context for what our index values represent.
// Readable & Structured

const person : [name:string , skill:string]=['aneesa','web developer'];
console.log(person);

let user : [name:string, email:string];
user = ['Ali','ali@gmail.com'];
console.log(user);


class Person{
    constructor(){
        
    }
}
const graph: [x: number, y: number] = [55.2, 41.3];
// const graph: [number, number] = [55.2, 41.3];
// const [x, y] = graph;






//  ----------------------------- Destructured Tuples ---------------------------------------- //
// D.Tuple  ko separate variables me assign krne kelie use hota he 




























/*TypeScript allows types to be defined separately from the variables that use them.

Aliases and Interfaces allows types to be easily shared between different variables/objects.

Type Aliases
Type Aliases allow defining types with a custom name (an Alias).

Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

ExampleGet your own TypeScript Server*/
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
/*Interfaces
Interfaces are similar to type aliases, except they only apply to object types.*/

//Example
interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};
