// console.log('log')
// console.error('error')
// console.warn('warning')

/*
DATA TYPES
    PRIMITIVE DATA TYPES
     - String, Numbers, Boolean, null, undefined
*/

const namee = 'John'; //string
const age = 30; //number
const rating = 4.5; //number - decimal 
const isCool = true; //boolean
const x = null; //empty variable
const y = undefined; //undefined
let z; //undefined

console.log(typeof namee) ; //to test the type of variable namee

//STRING
//concatenation
console.log('My name is' + namee + 'and I am ' + age)
//using template string
    console.log(`My name is ${namee} and I am ${age}`) //can also be assigned to a variable 

const s = 'Hello_world';

/*
method - function associated with an object */

console.log(s.substring(0,5)) //starting and ending index

//s.length 
//s.toUpperCase() = method
//s.toLowerCase()
//s.split(("")) //split string into array by the use of splitter(" ")
    const st = 'tech, computers, it, code'
    console.log(st.split(','))

//=================================================================================================
console.log('=========================================')

//ARRAYS - variables that hold multiple values

const fruits = ['apples','oranges','pears',10,true]
console.log(fruits);
console.log(fruits[1]);

fruits.push('mango'); //add value to the end of array
fruits.unshift('berries'); //add value to the beginning of array
fruits.pop() //remove last one off

console.log(Array.isArray(fruits)) //check if something is an array
console.log(fruits.indexOf('apples')) //get index of an array element

//=================================================================================================
console.log('=========================================')

/*OBJ LITERALS --- key-value pairs */

const person = {
    fName: 'Jane',
    lName: 'Doe',
    agee: 30,
    hobbies: ['music','movies','sports'],
    address:{
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person)
console.log(person.fName, person.lName) //Jane Doe
console.log(person.hobbies[1]) //movies
console.log(person.address.city) //Boston

//Destructuring 
// pull something out of person obj

const { fName, Lname, address: { city
    }
} = person;

console.log(fName)
console.log(city)

//add property:
person.email = "jane@email.com"
console.log(person)


const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "Dentist apt",
        isCompleted: false
    }
]

console.log(todos)
console.log(todos[1].text)

//=================================================================================================
console.log('=========================================')

/*
JSON - data format;
    - used in API, sending and receiving data to server
    - kind of same to obj literals
*/

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)

//=================================================================================================
console.log('=========================================')

//FOR LOOPS

for(let a = 0; a <= 10; a++){
    console.log(`For Loop Number: ${a}`)
}

for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo)
    // console.log(todo.id)
}

//WHILE LOOP
let j = 0;
while(j < 10){
    console.log(`While Loop Number: ${j}`)
    j++;
}

//=================================================================================================
console.log('=========================================')

/*HIGH ORDER ARRAY METHOD - used in iterating in array */

//forEach
    todos.forEach(function(todo){
        console.log(todo.id)
    })

//map
    const todoText = todos.map(function(todo){
        return todo.text
    })
    console.log(todoText)

//filter
    const todoCompleted = todos.filter(function(todo){
        return todo.isCompleted === true;
    }).map(function(todo) {
        return todo.text
    })

    console.log(todoCompleted )

//=================================================================================================
console.log('=========================================')

//CONDITIONALS

const n = 20;
const p = 100;

if(n === 10 ) {
    console.log('n is 10')
}else if(n > 10) {
    console.log('n is greater than 10')
}else {
    console.log('n is less than 10')
}

if(n > 5 || p > 10){
    console.log('n is more than 5 or p is more than 10')
}

//ternary operator = 'then'
const c = 10;
const color = c > 5 ? 'red' : 'blue';
console.log(color);

switch(color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

//=================================================================================================
console.log('=========================================')

//FUNCTIONS

function addNums(num1 = 1, num2 = 2) {
    return num1 + num2
}
console.log(addNums())

const addNums2 = (num1 = 1, num2 = 2) => 
    console.log(num1 + num2)

console.log(addNums2(5,5))

//=================================================================================================
console.log('=========================================')

//OOP

//constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
        //this.dob = dob; 
    this.dob = new Date(dob); //to turn into a date object: 
        // this.getBirthYear = function() {
        //     return this.dob.getFullYear();
        // }
        // this.getFullName = function () {
        //     return `${this.firstName} ${this.lastName}`
        // }
}

//to not have the functions in every object instance:
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

//instatiate obj
const person1 = new Person('Jane', 'Doe','4-3-1980')
const person2 = new Person('Mary','Smith','3-6-1970')

console.log(person2.firstName)
console.log(person2.dob);
// console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person1);

//=================================================================================================
console.log('=========================================')

//CLASSES

class Person2 {
    //add a method -- function inside of a class
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

//instatiate obj
const p1 = new Person2('Joey', 'Cruz','10-10-1910')
const p2 = new Person2('Abba','Ana','6-2-1950')

console.log(p1.getFullName());
console.log(p2.getFullName());
console.log(p2)

//=================================================================================================
console.log('=========================================')

//DOM [main.js]

