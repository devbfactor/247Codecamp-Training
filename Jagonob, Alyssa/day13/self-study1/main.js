// console.log('hello world')
// console.error('error')
// console.warn ('warning')

//var - not used anymore

// //Primitive Data Types - directly assigned to memory (symbols added in ES)

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z; 

// //logs the data type
// console.log(typeof rating)

//String

// const name = 'John';
// const age = 30;

// console.log('My name is '+name+ ' and I am '+age);
// console.log(`My name is ${name} and I am ${age}.`)
// const hello = `My name is ${name} and I am ${age}.`
// console.log(hello)

//Properties and Method (a method is a function associated with an object)
    // const s = 'Hello World!';

    // console.log(s.toUpperCase())

    // // substring, pull a string out of a string
    // console.log(s.substring(0, 5).toUpperCase())

    //Split - split a string into an array
    // console.log(s.split(''))
    // const s = 'tech, computers, it code'
    // console.log(s.split(', ')) //splitting using comma and space

//Arrays - variables that hold multiple values
    // //Array constructor
    // const numbers = new Array(1,2,3,4,5) //constructing a new array
    // console.log (numbers);

    // const fruits = ['apples', 'oranges', 'pears',]
    // // fruits[3] = 'grapes';
    // // console.log(fruits[1]);
    // fruits.push('mangoes');
    // fruits.unshift('strawberries');
    // fruits.pop();
    // console.log(Array.isArray(fruits)); //true
    // console.log(Array.isArray('fruits')); //false
    // console.log(fruits.indexOf('pears')); //3
    // console.log(fruits);

    //static typing -- readmore on TypeScript


    //Object Literals
    // const person = {
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     age: 30,
    //     hobbies: ['music', 'movies', 'sports'],
    //     address: {
    //         street: '50 main st.',
    //         city: 'Boston',
    //         state: 'MA'
    //     }
    // }

    // // console.log(person)
    // // console.log(person.firstName, person.lastName)
    // // console.log(person.hobbies[2], person.address.city)

    // // const {firstName, lastName, address: {city}} = person;

    // // console.log(city); 

    // person.email = 'john@gmail.com';
    // console.log(person)

    //Arrays of Objects

    // const todos = [
    //     {
    //         id: 1,
    //         text: 'Take out trash',
    //         isCompleted: true
    //     },
    //     {
    //         id: 2,
    //         text: 'Meeting with boss',
    //         isCompleted: true
    //     },
    //     {
    //         id: 3,
    //         text: 'Dentist appt',
    //         isCompleted: false
    //     }

    // ]

    // // turn to JSON string
    // const todoJSON = JSON.stringify(todos);
    // console.log(todoJSON);


    // console.log(todos[1].text)

    //Used free formatter JSON
    // [
    //     {
    //        "id":1,
    //        "text":"Take out trash",
    //        "isCompleted":true
    //     },
    //     {
    //        "id":2,
    //        "text":"Meeting with boss",
    //        "isCompleted":true
    //     },
    //     {
    //        "id":3,
    //        "text":"Dentist appt",
    //        "isCompleted":false
    //     }
    //  ]



//Loops

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }

// ]
// For Loop

// for(let i=0; i <= 10; i++){
//     console.log(`For Loop Number: ${i}`);
// }

// while
// let i = 0
// while(i <10){
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

//Loop through arrays

// for(let i=0; i < todos.length; i++){
//     console.log(todos[i].text);
// }

// for (let todo of todos){
//     console.log(todo.text);
// }

//high order array methods
    //forEach, map, filter
    // //forEach
    // todos.forEach(function(todo){
    //     console.log(todo.text);
    // })

    // //Map
    // const todoText = todos.map(function(todo){
    //     return todo.text;
    // })
    // console.log(todoText);

    // //Map with Filter
    // const todoCompleted = todos.filter(function(todo){
    //     return todo.isCompleted === true;
    // }).map(function(todo){
    //     return todo.text;
    // })
    // console.log(todoCompleted);


//Conditionals
    // const x = '10';

    // if (x == 10){
    //     console.log('x is 10');
    // }

    // // '10' == 10 true
    // // '10' === 10 false since it doesn't match the type

    //  const x = 0;

    // if (x === 10){
    //     console.log('x is 10');
    // }else if(x > 10){
    //     console.log('x is greater than 10')
    // } else {
    //     console.log('x is less than 10');
    // }

    // //Multiple Conditions //Logical operators
    // const x = 0;
    // const y = 11;

    // if (x > 5 || y > 10){
    //     console.log('x is more than 5 or y is more than 10');
    // }

    // //ternary operator - '?' is 'then', ':' is 'else'
    // const x = 10

    // const color = x > 10 ? 'red' : 'blue'

    // console.log(color)

    //------------------------

    // //SWITCH
    // const x = 5

    // // const color = x > 10 ? 'red' : 'blue'
    // const color = 'green'

    // switch(color){
    //     case 'red':
    //         console.log('color is red')
    //         break;
    //     case 'blue':
    //         console.log('color is blue');
    //         break;
    //     default:
    //         console.log('color is NOT red and blue');
    //         break;
    // }

//FUNCTION

// function addNums (num1, num2){
//     return num1+num2
// }
// console.log(addNums(5,4));

// //arrow function
// const addNums = (num1, num2) => num1+num2;
// console.log(addNums(5,4));

// const addNumsb = num1 => num1+8;
// console.log(addNumsb(5));

// Object Oriented Programming

//Es5
    // //Constructor function with Prototype
    // function Person(firstName, lastName, dob){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.dob = new Date (dob);
    //     this.getBirthYear = function(){
    //         return this.dob.getFullYear();
    //     }
    //     this.getFullName = function(){
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    // }


    // //Instantiate Object
    // const person1 = new Person('John', 'Doe','4-8-1980');
    // const person2 = new Person('Mary', 'Smith','3-6-1970');

    // // console.log(person2.dob.getFullYear());
    // console.log(person1.getBirthYear());
    // console.log(person1.getFullName());

//======================================
//Constructor function with Prototype
    // function Person(firstName, lastName, dob){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.dob = new Date (dob);
    // }

    // Person.prototype.getBirthYear = function(){
    //     return this.dob.getFullYear
    // }
    // Person.prototype.getFullName = function(){
    //     return `${this.firstName} ${this.lastName}`;
    // }

    // //Instantiate Object
    // const person1 = new Person('John', 'Doe','4-8-1980');
    // const person2 = new Person('Mary', 'Smith','3-6-1970');

    // // console.log(person2.dob.getFullYear());
    // console.log(person2.getFullName());
    // console.log(person1);

//Es6 classes are added

    // //create a class
    // class Person {
    //     constructor(firstName, lastName, dob){
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.dob = new Date (dob);
    //     }
    //     getBirthYear(){
    //         return this.dob.getFullYear
    //     }
    //     getFullName(){
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    // }

    // //Instantiate Object
    // const person1 = new Person('John', 'Doe','4-8-1980');
    // const person2 = new Person('Mary', 'Smith','3-6-1970');

    // // console.log(person2.dob.getFullYear());
    // console.log(person2.getFullName());
    // console.log(person1);

//===========================================================================
//DOM MANIPULATION
    // //window object is the parent object of the browser
    // console.log(window); 
    
    //Selections
    //Single Element Selectors
        // console.log(document.getElementById('my-form'));
        // console.log(document.querySelector('.container'));

    //Multiple element Selectors
        // console.log(document.querySelectorAll('.item'));
        // console.log(document.getElementsByClassName('item'));
        // console.log(document.getElementsByTagName('li'));

    // const items = document.querySelectorAll('.item');
    // items.forEach((item)=>console.log(item))


    // const ul = document.querySelector('.items');

    // // ul.remove();
    // // ul.lastElementChild.remove();
    // // ul.firstElementChild.textContent = 'Hello';
    // // ul.children[1].innerText = 'Brad';
    // // ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

    // const btn = document.querySelector('.btn');
    // btn.style.background = 'red';

    //Events
    // const btn = document.querySelector('.btn');

    // btn.addEventListener('click', (e)=>{
    //     e.preventDefault();
    //     console.log('click');
    //     console.log(e.target.className);
    // })

    // const btn = document.querySelector('.btn');

    // btn.addEventListener('mouseout', (e)=>{
    //     e.preventDefault();
    //     document.querySelector('#my-form').style.background = '#ccc';
    //     document.querySelector('body').classList.add('bg-dark');
    //     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
    // })

    const myForm = document.querySelector('#my-form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const msg = document.querySelector('.msg');
    const userList = document.querySelector('#users');

    myForm.addEventListener('submit', onSubmit);

    function onSubmit(e){
        e.preventDefault();

        // console.log(nameInput.value)
        // form validation
        if(nameInput.value === '' || emailInput.value === ''){
            // alert('Please enter fields');
            msg.classList.add('error')
            msg.innerHTML = 'Please enter all fields';


           setTimeout(()=>msg.remove(),3000)
        }else{
            // console.log('success');
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

            userList.appendChild(li);

            //Clear the fields
            nameInput.value = '';
            emailInput.value = '';
        }
    }



