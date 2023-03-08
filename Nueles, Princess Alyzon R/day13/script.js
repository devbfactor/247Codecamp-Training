/* ----- using the map method 
    - way to iterate an array (same as foreach) 

//example1


//example2
*/

const num = [1,2,3,4,5]
    // num.forEach((num) => {
    //     console.log(num)
    // })

    const newSetOfNums = num.map((num) => {
        return num + 1;
    })

const movies = [
    {
        title: 'The Notebook',
        genre: 'Romance'
    },
    {
        title: 'The Avengers',
        genre: 'Adventure'
    },
    {
        title: 'Avatar',
        genre: 'Adventure'
    },
    {
        title: 'Thor',
        genre: 'Adventure'
    }
]

const movieTitles = movies.map((movies) => {
    return movies.title
})




/* 
======== using the filter method =========
    - creates a new array filled with elements that pass a test provided by a function.
    - does not change the original array.
    - does not execute the function for empty elements.

    - allows us to filter through an array - iterating over the existing values, and returning only the ones that fit certain criteria, into a new array.

    * syntax:
        const filteredArray = oldArray.filter(callbackFn(element, index, array), context)
    
*/


const numbers = [20, 40, 17, 99, 59, 77];
const filteredNumbers = numbers.filter((number) => {
    return number > 20;
});
    console.log(filteredNumbers); 


const age = [20, 40, 17, 15, 13, 28];
const minorAge = age.filter((age) => age < 18);
    console.log(minorAge);


let filteredGenre = movies.filter( movies => movies.genre === 'Adventure');
    console.log(filteredGenre);