/*
Variables
    let can be reassigned
    var
    const cannot be reassigned

Data Types
> Primitive Data Types
    - Number or Numeric
        - NaN (is actually a numeric value in JavaScript)
            - Mathematical Operator
                - Unary Operator <> Increment
                    let counter = 0;
                    counter++


    - String
        - .length
        - characters are indexed (zero-based)
        - string methods (things it can perform)
            - toUpperCase()
            let z = 'Thursday'
            z.toUpperCase()
            'THURSDAY'
            - toLowerCase()
        - string template literals
        let animal = "pig"
        let sound = "oink"
        console.log(`${animal} says ${sound}! ${1+45}`)
        > pig says oink! 46

    - Boolean
    - Null
        - intentional absence of any value
        - must be assigned

        let loggedInUser = null
        loggedInUser outputs "null"
    
    - Undefined
        let userNew;
        userNew outputs undefined


> Truthiness and Falsiness

let num = 5
if(5) {
    console.log(true);
} else {
    console.log(false);
}

Falsy values
    - false
    - 0
    - ""
    - null
    - undefined
    - NaN

Arrays
Used to group data together in a certain order
- properties
    - length
- methods
    - push
    - pop
    - shift
    - unshift
    let students = ['Alyssa', 'Princess', 'Paola']

Value Types

let x = 100;
let y = x;

x = 99;


let nums = [2,4,6,8];
let myNums = nums;

nums.push('HEY!');

myNums.push('OK');

const name = 'JavaScript';
const meals = ['milk', 'bread'];

Multi-dimensional arrays

const movies = [
                    ['Exorcist', 'The Nun', 'Texas Chainsaw'],
                    ['Titanic', 'When Harry Met Sally', 'The Notebook'],
                    ['Avengers', 'Iron Man', 'Dr. Strange']
                ];

Functions with Multiple ARGS (arguments)

function num(x, y) {
    console.log(x + y)
}

function sayHi(fname,lname) {
    console.log(`Hi ${lname}, ${fname}`)
}

The RETURN value


// No Return
function add(x, y) {
    console.log(x + y);
}

// This version returns the sum of x & y
function addNew(x, y) {
    return x + y;
    console.log("Hello");
}

function checkAge(x){
    if(x >= 18) {
        console.log("Legal")
    } else {
        console.log("Minor")
    }
}

*/

// Function Expression

// Arrow Functions

function add(x,y) {
    return x+y;
}

const addNew = function(x,y) {
    return x+y;
}

const addNew2 = (x,y) => {
    return x+y;
}

const addNew3 = (x,y) => x+y

function isPositive(number) {
    return number >=0;
}

const isPositive2 = number => number >=0;