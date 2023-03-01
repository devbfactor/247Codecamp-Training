// Variables (let and const)
    //good examples to students of what is constant, days in a week, months in a year, right angle = 90, something that never changes, (so when do we use const in programming?)
//Data types 
    //Primitive Data Type: 
    //Number
        //Nan (Not a number, is a number in JS; try typing typeof NaN in the console)
        //mathematical operators
            //Unary operator(increment )


    //String
        //Properties
            //.length
            //character are indexed (zero based)
        //Methods (things it can perform)
            //toUpperCase
                //ex. let z="thursday"
                //z.toUpperCase()
            //toLowerCase
        //String template Literals
            //let animal = 'pig'
            //let sound = 'oink'
            //animal+" says " + sound+" !"
            //`${animal} says ${sound} !`

    //Boolean
    //Null
        //intentional absence of any value
        //must be assigned
    //Undefined
        //variables that do not have an assigned value are undefined
//?????????

//Truthfulness and Falseness 
// every value in Js has an inherent truthiness or falseness about it

    // let num = 5 
    //     if(5){
    //         console.log(true)
    //     }else{
    //         console.log(false)
    //     } 
        //wil log as true

    //False Values
        //false
        //0
        //""
        //null
        //undefined
        //NaN
//--------------------------------
//Arrays 
    // let crayons = ['pink', 'green', 'blue'] 
    // let crayons = ['pink', 'green', 'blue'] 
    // crayons[crayons.length-1] //to get the last item of an array

    //also mutable ex. crayons[0] = 'yellow'
    
    //purpose: to group them since they have something in common
        //Properties
            //length
        //methods
            //push //crayons.push('pink')
            //pop //crayons.pop('pink')
            //shift crayons.shift() 
                //removes the first element
            //unshift crayons.unshift('teal')
                //adds in the first element
//--------------------------------------------
//Value Types - the variable stores the actual value
    // let x = 100;
    // let y = x;

    // x = 99; 
    //y did not change



//Reference Types - array variables do not hold the actual array instead they store a REFERENCE to the array
    // let nums = [2,4,6,8]; //it points to a reference to the location of 2,4,6,8
    // let myNums = nums; //so in myNums, it's pointing to the same location 

    // nums.push('hey!');
    //if array it's not actual value, but they only store the reference of contents of that array

    //sample
    // myNums.push('hello');
    // 6
    // myNums
    // (6) [2, 4, 6, 8, 'hey!', 'hello']
    // nums
    // (6) [2, 4, 6, 8, 'hey!', 'hello']

        // const name = 'JavaScript';
        // const meals = ['milk', 'bread'];
            // name = 'Node'
            // returns an error
            // meals.push('eggs');
            // 3
            // meals
            // (3) ['milk', 'bread', 'eggs']

            // const - reference will not change
//----------------------
//Multi-Dimensional Arrays

    // const movies = ['alan', true, 15, [], 'eggs'];
    // const alanPerformance = ['Poor', false, 1.5];
    // const movies = 
    // [
    //     [
    //         'Exorcist', 
    //         'The Nun', 
    //         'Texas'
    //     ],
    //     [
    //         'Titanic', 
    //         'When Harry Met Sally', 
    //         'The Notebook'
    //     ],
    //     [
    //         'Avengers', 
    //         'IronMan', 
    //         'Dr. Strange'
    //     ] 
    // ];
//------------------------------
//Functions with multiple arguments

    // function num(x,y){
    //     console.log(x-y)
    // }

    // function sayHi(lname,fname){
    //     console.log(`Hi ${lname}, ${fname}`)
    // }
    // sayHi('Stark', 'Tony')
    //  Hi Stark, Tony
    //add multioke arguments but make sure passing them in their proper order

//------------------------
//The Return Value (IMPORTANT)

    //No return

    // function add(x,y){
    //     console.log(x+y);
    // }

    // //This version return the sum of x&y;
    // function addNew (x,y){
    //     return x+y;
    //     console.log('Hello!') // Unreacheable since it's after return
    // }

    // function checkAge(x){
    //     if(x >=18){
    //         console.log('legal')
    //     }else{
    //         console.log('minor')
    //     }
    // }

    //multiple return statements in conditionals
//---------------------------
//Function Expression
    //functions can be written as expression
    // function add(x,y){
    //     return x+y
    // } 
    //this can be written as a function expression

    // const sum = function add(x,y){
    //     return x+y
    // } 
    //this is a sample for function expression
    // 
    //const because the function will not change througought the program
//---------------
// Arrow Function

//     function add(x,y){
//             return x+y
//         }

//     const addNew = function add(x,y){
//         return x+y
//     }

//     const addNew2 = (x,y) => x+y
//     //arrow function is shorter

//     function isPositive(number){
//         return number >=0
//     }

// const isPositive2 = number => number>=0

// convert arrowfunction

// function oddEven(num){
//         if((num % 2)==0){
//             console.log('even')
//         }else{
//             console.log('odd')
//         }
    
//     }

    // const oddEven=(num) =>{
    //     if((num % 2)==0){
    //         console.log('even')
    //     }else{
    //         console.log('odd')
    //     }
    
    // }

    // // ----------------
    // const lastChar = word =>{
    //       let pos =  word.length -1;
    //         console.log(word[pos]);
    //     }

