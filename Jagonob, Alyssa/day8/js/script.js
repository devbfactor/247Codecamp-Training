// // let name= 'Peter Griffin'; //assigns Peter Griffin to the variable name
// //console.log('Hello World!'); //output in the console
// //console.log('Using Javascript'); //output in the console
// // let num1 = 12; //numeric
// // let num2 = 3; //numeric



// //Single or Double quotes OK
// // "hello world"
// // 'hello world'

// //concatenation
// // "charlie" = "brown"  //charliebrown


// // console.log("He's a real nowhere man"); //give an example of a sentence
// // console.log('Hello');

// //what if you have to place double quotes inside?
// //Escape characters start with "\"

// // console.log("Singin\"dododododoodod\"");

// //"hello world".length 

// //"hello"[0] index starts with zero

// // console.log(num1 + num2);
// // console.log(name + num2); //unpack concatenation
// // console.log(name / num2); //NaN


// //datatypes will dictate the types of operation that it will perform

// //ask students what they think will be the result (building a rapor, building a connection with students)


// let x = 2;
// let y = 3; 

// console.log(x); 
// // expected output 2

// console.log(x = y+1);// 3+1
// // expected output 4

// console.log(x = x * y); // 4*3
// // expected output 12

// let bar = 5;

// bar += 2

// bar*=2

// console.log(bar)

// // comparison operators it's asking is x equal to y?
// console.log(1 === 1);
// // expected output: true

// //comparison operators
// //Strict Equality Operator
// console.log("1" === 1);
// // expected output: false

// //Equality operator
// console.log(1 == 1); 
// // expected true

// console.log("1" == 1);
// //expected true

// //Inequality operators
// console.log(1 != '1'); // false
// console.log(1 !== '1'); //true

// let x = 4;
// let y = 3; 

// console.log(x > y);
//expected output: true

//Logical Operators
// console.log((19>11) && (23<50));

// true && true = true
// true && false = false

//false && false = false

//Or  one true, is all true
// ! (not) will just switch to opposite of &&

//Control structures - control the flow of the program based on different conditions (since natural flow of the program is from top to bottom)

    //--conditional statements
    //--iteration (looping)

    // let x = 10;

    // if(x === 10){
    //     console.log('Equal to 10')
    // } //if x is equal to ten, perform it on the console
    
// let x = 23;

// if(x === 10){
//     console.log("Equal to 10");
// }else  if (x > 10){
//     console.log("x is greater than 10");
// }
// else{
//     console.log("x is less than 10");
// }

//--------------------


//functions 
//
function rightTriangle(x){
    console.log(x);
    console.log(x+x);
    console.log(x+x+x);
    console.log(x+x+x+x);
    console.log(x+x+x+x+x);
    console.log(x+x+x+x+x+x);
    console.log("=======");
}

rightTriangle("BOB"); //argument

//Functions with Parameters
/*
Example, we want our user to supply the kind of character that it will print. 
So instead of using an asterisk, we want our user to supply the character to use.
*/
// functions can take parameters, parameters are additional information that our function needs to run the code inside

//imagine x is a placeholder
//passing an argument to a function








