// 1. Create a function that accepts a number and prints out "odd" if the number is odd, and "even" if the number is even

// function oddEven(x) {
//     if((x % 2) == 0) {
//         console.log("even")
//     } else { console.log("odd") }
// }

const oddEven = (x) => {
    if((x % 2) == 0) {
        console.log("even")
    } else { console.log("odd") }
}

// 2. Create a function that accepts a word, and prints out the last character of that word

// function lastChar(word) {
//     let lastLetter = word[word.length - 1];
//     console.log(lastLetter)
// }

const lastChar = (word) => {
    let lastLetter = word[word.length - 1];
    console.log(lastLetter)
}

// 3. Modify the function lastChar and make sure that it will only accept a string. Throw a message in the console that says "Please enter a string." (Hint: typeof)

// function lastCharNew(word) {
//     if (typeof word === "string") {
//         lastChar(word)
//     } else { 
//         console.log("Please enter a string.")
//     }
// }

// ALTERNATE (does not call on old function)
// function lastCharNew(word) {
//     if (typeof word === "string") {
//          let lastLetter = word[word.length - 1];
//          console.log(lastLetter)
//     } else { 
//          console.log("Please enter a string.")
//     }
// }

const lastCharNew = (word) => {
    if (typeof word === "string") {
        let lastLetter = word[word.length - 1];
        console.log(lastLetter)
   } else { 
        console.log("Please enter a string.")
   }
}

// 4. Create a function called legalAge that accepts a number and prints out "You are allowed to enter" if the number provided is >= 18. Else, print "You are not allowed."

// function legalAge(num) {
//     if (num >= 18) {
//         console.log("You are allowed to enter.")
//     } else {
//         console.log("You are not allowed.")
//     }
// }

const legalAge = (num) => {
    if (num >= 18) {
        console.log("You are allowed to enter.")
    } else {
        console.log("You are not allowed.")
    }
}

// 5. Create a function called tempConvert that accepts a number and converts it to Fahrenheit. Sample result:
// Celsius: 100
// Fahrenheit: 212

// function tempConvert(num) {
    // return ((num * 1.8) + 32);
// }

const tempConvert = (num) => {
    return ((num * 1.8) + 32);
}
