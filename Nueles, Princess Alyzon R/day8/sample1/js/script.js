//alert('test')
// console.log("Hello World"); //output in the console
// console.log("using Javascript"); //output in the console

let namee = "Peter Griffin";  //assigns Peter Griffin to the variable 'name'
let num1 = 12; //numeric data type
let num2 = 3; //numeric data type

//Single or Double Quotes OK
    console.log("He's a real man"); //best used if there's an apostrophe
    console.log('hello world');

//Escape characters start with "\"
    console.log("Singin \"Do wah diddy, diddy, dum do\" "); //will display the double quotes

//Concatenation
    console.log("charlie" + "brown"); //"charliebrown"
    console.log(num1 + num2); 
    console.log(namee + 12);
    console.log(namee / 12); //displays NaN - not a number

    let c = 2;
    let y = 3;
        console.log(c); //expected output: 2
        console.log(c = y + 1); //3 + 1 //expected output: 4
        console.log(c = c * y); //4 * 3 //expected output: 12

// -- Addition Assignment Operator --- //
    let bar = 5;
        bar += 2; 
        console.log(bar);


// -- Comparison Operator --- //
    // *STRICT Equality Operator * - also checks the data type
    console.log(1 === 1); // expected output: true > int = int
    console.log("1" === 1); // expected output: false > string != int

    // *[ABSTRACT] Equality Operator*
    console.log(1 == 1); // expected output: true 
    console.log("1" == 1); // expected output: true 

    // *INEQUALITY Operator*
    console.log(1 != '1'); //false
    console.log(1 != 2); //true
    console.log(1 !== '1'); //true

// -- Relational Operator --- //
    let a = 4;
    let b = 3;
        console.log(a > b); // expected output: true 

// -- Logical Operator --- //
    console.log("Logical &&:");
    console.log((19 > 11) && (23 < 50)); //true && true = true

// -- CONTROL STRUCTURES ---  //
    // *Conditional Statement*
    let n1 = 10;
        if (n1 === 10) { //if true, then perform the condition inside.
            console.log('Equal to 10');
        }
    
    let n2 = 23;
        if(n2 === 10) {
            console.log("Equal to 10");
        } else if (n2 > 10) {
            console.log("n2 is greater than 10");
        } else {
            console.log("n2 is less than 10");
        }

    // *Iteration (Looping)* 
    

// -- Functions ---  //
        function rightTriangle(x) {
            console.log(x);
            console.log(x+x);
            console.log(x+x+x);
            console.log(x+x+x+x);
            console.log(x+x+x+x+x);
            console.log(x+x+x+x+x+x);
            console.log("=======");
        }

        rightTriangle('@'); //argument
        rightTriangle('^');

    // ↑ *Functions with parameters*
        /* Scenario:  We want user to supply the kind of char that it will print. So instead of using *, we want user to supple the char to use. */

        /*Parameters - additional information that our function needs to perform the code. */

        function addNum(a,b) {
            console.log(a + b);
        }

        function addNumNew(a,b) {
            return a+b;
        }

        addNum(2,3)

        let result = addNumNew(2,3)
        console.log(result + 10)