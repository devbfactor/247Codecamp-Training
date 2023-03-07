//Callback Function 
    //it is a function that is passed as an argument to another function, and it is called when the parent function has completed its operation

    // const greeting = (callback)=>{
    //     console.log(`Hello`)
    //     callback()
    // }

    // const sayHi = () =>{
    //     console.log(`Hi!`)
    // }

    // greeting(sayHi)

//FOR EACH
//In JavaScript, arrays are a data structure used to store multiple values in a single variable. The forEach method is a built-in function that is available on arrays in JavaScript. It allows you to loop over the elements of an array and perform a specific action on each element.

    // const numbers =[1, 2, 3, 4, 5];

    // numbers.forEach(function(number){
    //     console.log(number)
    // })
    // const numbers =[1, 2, 3, 4, 5];
    // numbers.forEach((number)=>console.log(number))

//JAVASCRIPT LOOPS

//WHILE LOOP
//The while loop loops through a block of code as long as a specified condition is true

    // let count = 1;
    // while(count < 11){
    //     console.log(`Count is ${count}`)count++

    // }

    // let num = 1;
    // while(num <=11){
    //     console.log(num)
    //     num +=2
    // }

    // let num = -10;
    // while(num <=19){
    //     console.log(num)
    //     num ++
    // }

    // let num = 10;
    // while(num <=40){
    //     console.log(num)
    //     num +=2
    // }


    // let num = 301;
    // while(num <=333){
    //     console.log(num)
    //     num +=2
    // }

//DO WHILE LOOP

//is similar to the while loop, but the code inside the loop is executed at least once, even if the condition is false. The basic syntax of a do-while loop is:

    // let i = 0;
    // do {
    //   console.log(i);
    //   i++;
    // } while (i < 5);




// for loop:
// The for loop is used when the number of iterations is known in advance. The basic syntax of a for loop is:

// Here is an example of a for loop that iterates from 0 to 9:
    
    //   for (let i = 0; i < 10; i++) {
    //     console.log(i);
    //   }

// for(let count = 0; count < 6; count++){
//     console.log(count)
// }

    //  for (let num = -10; num <=19; num++) {
    //     console.log(num);
    //   }

    //   for (let num = 10; num <=40; num+=2) {
    //     console.log(num);
    //   }

    //   for (let num = 301; num <=333; num+=2) {
    //     console.log(num);
    //   }

// JS Objects
// In JavaScript, object literals are a way to define objects using a concise syntax. Object literals are created by enclosing a list of "key-value pairs" inside curly braces {}. Here's an example of an object literal:(reference type) (an object has properties and methods, the function inside a a property is a method)

    // const person = {
    //     name: 'John',
    //     age: 30,
    //     email: "johndoe@mail.com",
    //     sayHello: function(){
    //         console.log(`Hello! My name is ${this.name}`)
    //     }
    // }

    // person.name = 'Jane'
    // person.sayHello()


    //other notes console and window is also an object with methods, alert is a method from window.alert()

    //if there's a method in an object, don't use an arrow function, has to do with the binding of "this"

//Represent an Array of Blog Posts


const allBlogs = [
    {
       author: 'Alan',
       email: 'alan@mail.com',
       blogs: [
            {
                title: 'JS Modules',
                body: 'Js is ...'
            },

            {
                title: 'Node Express',
                body: 'Express is ...'
            },
        ] 
    },
    {
        author: 'Bry',
        email: 'bry@mail.com',
        blogs: [
             {
                 title: 'Smart Contract',
                 body: 'Smart Contract is ...'
             },
 
             {
                 title: 'Blockchain',
                 body: 'Blockchain is ...'
             },
         ] 
     },
     {
        author: 'Gab',
        email: 'gab@mail.com',
        blogs: [
             {
                 title: 'Creating your own Crypto',
                 body: 'Crypto is ...'
             },
 
             {
                 title: 'Ordinal inscription',
                 body: 'Ordinal inscription is ...'
             },
         ] 
     }
]


//Getting the author
 // const numbers =[1, 2, 3, 4, 5];

    // numbers.forEach(function(number){
    //     console.log(number)
    // })

// allBlogs.forEach(function(blogs) {
//     const author = blogs.author;
//     console.log(author);
// }
// );

// allBlogs.forEach((blog)=>{
//     console.log(`Author: ${blog.author}`)
// })
    
// allBlogs.forEach((blog)=>{
//     console.log(`Author: ${blog.author}`)
//     for (let counter = 0; counter <blog.blogs.length; counter++){
//         console.log(`Title $(counter): ${blog.blogs[counter].title}`)
//     }
//     console.log(`====`)

// })

// allBlogs.forEach((blog)=>{
//     console.log(`Email: ${blog.email}`)
// })

// allBlogs.forEach((blog)=>{
//     console.log(`blogs: ${blog.blogs[0].title}`)
// })

allBlogs.forEach((blog)=>{
    console.log(`author: ${blog.author}`)
    for (let counter = 0; counter < blog.blogs.length; counter++){
        console.log(`Title: ${blog.blogs[counter].title}`)

    }
    console.log('=======')
})

