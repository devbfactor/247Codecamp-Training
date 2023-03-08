/* 
VARIABLES 
    - let
    - const (eg. rightAngle = 90, days of the week, etc.)

==========================================================================
DATA TYPES
  1. Primitive Data Types
    * Number or Numeric
        - NaN (Not a Number)
        - Mathematical Operators
            - Unary Operator
                eg. let counter = 0; 
                    counter++;
    * String
        - .length property
        - characters are indexed (zero based)
        - string methods (things it can perform)
            eg. toUpperCase() , toLowerCase() , etc.
        - String Template Literals
            -contatenation 
                eg. let animal = 'pig'
                    let sound = 'oink'

                    animal + " says " + sound + "!";
                    `${animal} says ${sound}!`
    * Boolean
        - returns true or false
    * Null
        - intentional absence of any value
        - must be assigned
            eg. let loggedInUser = null;

    * Undefined
        - variables that don't have an assigned value
            eg. let userNew;

==========================================================================
TRUTHFULLNESS and FALSINESS
  - every value in JS has an inherent truthines or falseness about it
    - True by default
        eg. let num = 5
            if (num) {
                console.log(true)
            } else {
                console.log(false)
            }
        - Falsy Values: (false, " " , 0, null, undefined, NaN)

==========================================================================
ARRAYS
  - collection of related items
  - to group/organize/categorize things together
        eg. let students = ['Alyssa', 'Princess', 'Paola'];
    - can be modified
    - PROPERTIES: 
        - length
        - 
    - METHODS:
        - push
            - returns the number of values in an array
            - adds new element to the end of an array.
                eg. students.push('Bryan')
                    Output: 4
                        students = ['Alyssa', 'Princess', 'Paola', 'Bryan'];
        - pop
            - returns what value you removed
            - removes the last element of an array
                eg. students.pop()
                    Output: Bryan
                        students = ['Alyssa', 'Princess', 'Paola'];
        - shift
            - removes the first element in an array (index[0])
                eg. let students = ['Alyssa', 'Princess', 'Paola'];
                    students.shift()
                        Output: Alyssa 
                            students = ['Princess', 'Paola'];
        -unshift
            - adds new element to the beginning of an array (index[0]) 
                eg. let students = ['Alyssa', 'Princess', 'Paola'];
                        students.unshift('Alan')
                            Output: students = ['Alan', 'Princess', 'Paola'];

    *VALUE TYPES 
        - variable stores the actual value:
            eg. let x = 100;  //displays 100
                let y = x;  //displays 100
                x = 99; // displays 99
                y; //displays 100

    *REFERENCE TYPES
        - array variables do not hold the actual array. Instead, they store a Reference to the array.
            eg. let nums = [2,4,6,8];   //displays [2, 4, 6, 8]
                let myNums = nums;  //displays [2, 4, 6, 8]

                nums.push('Hey!'); //displays [2, 4, 6, 8, 'Hey!']
                myNums; //displays [2, 4, 6, 8, 'Hey!']

            eg. const namee = ['javascript']; // displays javascript
                const meals = ['milk','bread']; // displays ['milk', 'bread']
                namee = 'Node'; // will prompt an Error
                meals.push('eggs') // displays ['milk', 'bread', 'eggs']

    *MULTI-DIMENTIONAL ARRAYS
        - array within an array
            eg. const movies = [
                    ['Exorcist', 'The Nun', 'Texas Chainsaw'], 
                    ['Titanic', 'When Harry Met Sally', 'The Notebook'], 
                    ['Avengers', 'Ironman', 'Dr. Strange']
                ];
                movies[0]; // displays ['Exorcist', 'The Nun', 'Texas Chainsaw']
                movies[1][2]; // displays 'The Notebook'
                movies[1][2] = 'The Workbook' //change value to The Workbook
                movies[1][2] //displays 'The Workbook'
*/  


/*
FUNCTIONS WITH MULTIPLE ARGUMENTS
    - make sure you have the correct sequence of passing the arguments
        eg. function num(x,y) {
                console.log(x - y)
            }
            
            function sayHi (lname, fname) {
                console.log(`Hi ${lname}, ${fname}`);
            }

===============================================================================
RETURN Value
    - catching something that you can still use down the line
        eg. function addNew(x,y) {
                return x + y;
            }

            function checkAge(x) {
                if(x >=18) {
                    return('Legal')
                } else {
                    console.log('Minor')
                }
            }
                //sample future use: 
                    let age = addNew(6, 14); //displays '20'
                    checkAge(age); //displays 'Legal'

        eg. function isPurple(color) {
                if(color.toLowerCase() === 'purple') {
                    return true;
                } else {
                    return false;
                }
            }

===============================================================================
FUNCTION EXPRESSION
    eg. function add(x,y) {
            return x + y;
        }
        ->>> const sum = function (x, y) {   //used const bec we wont change the functionality
                return x + y;
            }

    ARROW FUNCTION
        eg. function add(x,y) {
                return x + y;
            }
        ->>> const addNew = (x, y) =>  x + y; 

        eg. function isPositive(num) {
                return num >= 0;
            }
        ->>> const isPositive = num => num >= 0; 
*/  