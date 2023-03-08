// alert('hello')

 /*
Callback Functions -  - In JavaScript, a callback function is a function that is passed as an argument to another function, and it is called when the parent function has completed its operation. 
    eg. const greeting = (callback) => {
            console.log(`Hello`)
            callback()
        }

        const sayHi = () => {
            console.log(`Hi`)
        }

        greeting(sayHi)


FOREACH METHOD - - In JavaScript, arrays are a data structure used to store multiple values in a single variable. The forEach method is a built-in function that is available on arrays in JavaScript. It allows you to loop over the elements of an array and perform a specific action on each element.
    eg. const numbers = [1,2,3,4,5];
        numbers.forEach( function(number) {
            console.log(number)
        });

        numbers.forEach(number => console.log(number))
*/

/* ==== JS LOOPS ==== 
loops are used so that you dont have to repeat yourself programatically

WHILE loop - The while loop loops through a block of code as long as a specified condition is true
        eg. let count = 1;
            while(count <= 11) {
                console.log(`Count is ${count}`)
                count+=2
            }

 */

/* 1) Display in the console all numbers between -10 and 19 */
            // let count = -10;
            // while(count <= 19) {
            //     console.log(count)
            //     count++
            // }

/* 2) Display all even numbers between 10 and 40 */
            // let num = 10;
            // while(num <= 40) {
            //     if(num % 2 == 0) {
            //         console.log(num)
            //     }
            //     num++
            // }
/* 3) Print all odd numbers between 300 and 333 */
            // let odd = 300;
            // while(odd <= 333) {
            //     if(odd % 2 != 0) {
            //         console.log(odd)
            //     }
            //     odd++
            // }

/*
do-while loop:
The do-while loop is similar to the while loop, but the code inside the loop is executed at least once, even if the condition is false. The basic syntax of a do-while loop is:

  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
   */

  /**
FOR loop:
The for loop is used when the number of iterations is known in advance. The basic syntax of a for loop is:

Here is an example of a for loop that iterates from 0 to 9:

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
   */



//   allBlogs.forEach((blog)=> {
//     console.log(`author: ${blog.author}`)
//     for(let counter = 0; counter < blog.blogs.length; counter++){
//         console.log(`Title ${counter+1}: ${blog.blogs[counter].title}`)
//     }
//      console.log('=====')
//      })




// const colors = ['red', 'green', 'blue']

// for(let counter = 0; counter < colors.length; counter++) {
//     console.log(colors[counter])
// }


