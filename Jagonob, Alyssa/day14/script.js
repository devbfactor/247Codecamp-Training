//var -> function
//let -> block
//const -> define constants, block scope
//objects are collections of key-value pair
// arrow function don't rebind this keyword
// ============================================

// // The This Keyword with Bind
//     const person = {
//         name: "Mosh",
//         walk(){
//             console.log(this);
//         }
//     };

//     person.walk();

//     const walk = person.walk.bind(person);
//     walk();
// ============================================
// const jobs = [
//     {id: 1, isActive: true},
//     {id: 2, isActive: true},
//     {id: 3, isActive: false}
// ];

// // const activeJobs = jobs.filter(function(job){
// //     return job.isActive;
// // });

// const activeJobs = jobs.filter(job => job.isActive);
// ==============================================
// const person = {
//     talk(){
//         var self = this;
//         setTimeout(()=>{
//             console.log('this', this);
//         }, 1000);
//     }
// };

// person.talk();
//================================================
// // Map Method
//     const colors = ['red', 'green', 'blue'];
//     const items = colors.map(color => `<li>${color}</li>`);
//     console.log(items);
// ===============================================

// // ===============================================
// const address = {
//     street:'',
//     city: '',
//     country: ''
// };

// // const street = address.street;
// // const city = address.city;
// // const country = address.country;

// // const {street, city, country} = address;

// // object destructuring
// const{street: st} = address;

// ==========================================
// // SPREAD OPERATOR

// // const first = [1,2,3];
// // const second = [4,5,6];

// // // const combined = first.concat(second);
// // // const combined = [...first, 'a', ...second, 'b'];
// // const clone = [...first]
// // console.log (first)
// // console.log(clone)

// const first = {name: 'Mosh'};
// const second = {job: 'instructor'};

// const clone = {...first};

// ===========================================
// CLASSES 

// const person = {
//     name: 'Mosh',
//     walk(){
//         console.log('walk');
//     }
// }

//     //  Inheritance and composition
// class Person {
//     constructor(name){
//         this.name = name;
//     }

//     walk(){
//         console.log('walk');
//     }
// }

// class Teacher extends Person{
//     constructor(name, degree){
//         super(name);
//         this.degree = degree; 
//     }
//     teach(){
//         console.log('teach')
//     }
// }

// const teacher = new Teacher('Mosh', 'MSc');
// ============================================
// Modules

import Teacher, {promote}  from "./teacher";
import React, {Component} from 'react';


const teacher = new Teacher('Mosh', 'MSc');
teacher.teach();


// https://www.youtube.com/watch?v=NCwa_xi0Uuc&t=1777s