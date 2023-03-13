// Accept a number and print out if the number is Odd or Even.
    function oddEven(num) {
        if((num % 2) == 0) {
            console.log('Even')
        } else {
            console.log('Odd')
        }
    }
        /* convert to Arrow function */
            const oddEven = num => {
                if((num % 2) == 0) {
                    console.log('Even')
                } else {
                    console.log('Odd')
                }
            }

// Accept a word and print out the last character of that word
    // function lastChar(word) {
    //     console.log(word.charAt(word.length-1)); //charAt() method returns the char at a specified index (position) in a string
    // }

    function lastChar(word) {
        let pos = word.length-1;
        console.log(word[pos]); 
    }
        /* convert to Arrow function */
            const lastChar = word => {
                let pos = word.length-1;
                console.log(word[pos]); 
            }

// Modify function lastChar and make sure that it will only accept a string. Throw a message in the console that says "Pls enter a string" (Hint: typeof)
    function lastCharNew(textt) {
        if (typeof textt === 'string') {
            //console.log(typeof textt);
            let poss = textt.length-1;
            console.log(textt[poss]);
        } else {
            console.log('Please enter a string.');
        }
    }

        /* convert to Arrow function */
            const lastCharNew = textt => {
                if (typeof textt === 'string') {
                    //console.log(typeof textt);
                    let poss = textt.length-1;
                    console.log(textt[poss]);
                } else {
                    console.log('Please enter a string.');
                }
            }


// Accept a number and prints out "You are allowed to enter" if the number is >= 18. Else, print 'You are not allowed'
    function legalAge(numm) {
        if(numm >=18) {
            console.log('You are allowed to enter.')
        }else {
            console.log('You are not allowed to enter.')
        }
    }
        /* convert to Arrow function */
            const legalAge = numm => {
                if(numm >=18) {
                    console.log('You are allowed to enter.')
                }else {
                    console.log('You are not allowed to enter.')
                }
            }


// Create a function that accepts a number and converts it to Farenheit