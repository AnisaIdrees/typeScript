"use strict";
/* -------------- Tuple -----------------
Tuple ek khas type ka array hota hai jo fixed length ka hota hai. Har index pe
jo value hogi, uska data type pehle se define hota hai.
Isme values ka order aur type fix hota hai
*/
let student;
student = ['aneesa', 17, true];
console.log(student);
let student1 = ['madiha', 14, true];
student1.push('aneesa'); // tuple me push method normal array ki trha treat krta he or new values ko add krleta he 
/*Lekin yeh TypeScript ka ek exception hai!
Tuple ka fixed length hoti hai, lekin push method TypeScript ke compile time check ko bypass
 kar deta hai. Is wajah se koi error nahi aati.*/
console.log(student1); //output ['madiha', 14 , true , 'aneesa]
// agr hum tuple ko strictly fixed length bnana chahtien hen tu readonly tuple ka use krenge
let student2 = ['aneesa', 17, true,]; /*A good practice is to make your tuple readonly.
                                                      Tuples only have strongly defined types for the initial values:  */
// student2.push('developer'); // error 
console.log(student2);
//  --------------- named Tuples --------------------- //
//Named tuples provide more context for what our index values represent.
const person = ['aneesa', 'web developer'];
console.log(person);
let user;
user = ['Ali', 'ali@gmail.com'];
console.log(user);
