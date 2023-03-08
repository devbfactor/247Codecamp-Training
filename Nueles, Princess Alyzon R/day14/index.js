import Teacher, {promote} from './teacher';
//import React, {Component} from 'react';


//var -> scoped to the function
//let -> accessible only in that block where they're define
//const -> block-scoped, can't be reassigned/changed

// function sayHello() {
//     for(let i = 0; i < 5; i++){
//         console.log(i);
//     }
// }

// sayHello();

//=================================================================================================
console.log('=========================================')

/*OBJECTS -> collections of key-value pairs */

// const person = {
//     namee: 'Mosh',
//     walk() {}, //in OOP, functions inside an object are called METHODS
//     talk() {},
// };

// person.talk();
// person.name = '';

// const targetMember = 'name'; //imagine as input
// person[targetMember.value] = 'John';

//=================================================================================================
console.log('=========================================')

/* THIS keyword --> returns and reference to the current object */

// const person = {
//     namee: 'Mosh',
//     walk() {
//         console.log(this)
//     }, //in OOP, functions inside an object are called METHODS
//     talk() {},
// };

// person.walk();

// const walk = person.walk.bind(person); 
// console.log(walk);
// walk();

//=================================================================================================
console.log('=========================================')

//ARROW FUNCTIONS

// const square = function(number) {
//     return number * number;
// }

const square = number => number * number;
console.log(square(5));

const jobs = [
    { id: 1, isActive: true},
    { id: 2, isActive: true},
    { id: 3, isActive: false},
];

const activeJobs = jobs.filter(job => job.isActive);

const person = {
    talk() {
        var self = this;
        setTimeout(() => {
            console.log('this', this);
        }, 1000);
    }
}
person.talk();
//=================================================================================================
console.log('=========================================')

//MAP -> method used to render lists

const colors = ['red','green','blue'];
const items = colors.map(color => `<li>${color}<\li>` );
console.log(items);
//=================================================================================================
console.log('=========================================')

//OBJECT DESTRUCTURING
const address = {
    street: '',
    city: '',
    country: '',
}

// const street = address.street;
// const city = address.city;
// const country = address.country;

const { street:st, city, country } = address;

//=================================================================================================
console.log('=========================================')

//SPREAD OPERATOR

const first = [1,2,3];
const sec = [4,5,6];

//const combined = first.concat(sec);
//const combined = [...first, 'a' , ...sec];

const clone = [...first];

//console.log(combined);
console.log(first);
console.log(clone);

const fObj = {namee: 'Mosh'};
const sObj = {job: 'Instructor'};

const combined  = { ...fObj, ...sObj, location: 'Aus'};
console.log(combined)

//=================================================================================================
console.log('=========================================')

//classes

// const person1 = {
//     namee: 'Mosh'
// }

const teacher = new Teacher('Mosh','MSc');
teacher.teach();
