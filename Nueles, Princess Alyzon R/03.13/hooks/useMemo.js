import React, { useState, useMemo } from 'react'

const UseMemo = () => {
    //a.1 crated 2 state variable, number & dark;
    const [number, setNumber] = useState(0); //for input and pass that number in the expensiveFunction, w/c is declared after the component
    const [dark, setDark] = useState(false); //for total dark and light mode


    //AVOID DELAY SOLUTION: Only run the function when the number is changed, use useMemo hook 
    //2. after importing useMemo, add it in functional component and store in variable memoCalculation
    //will take 2 args = for callback func & dependency array
    //whenever any variable from the array dependecy will change, only then the callback function will run
    //3. pass number in dependecy array and call the expensive function inside the callback function and pass number as parameter
    const memoCalculation = useMemo(() => {
        expensiveFunction(number);
    }, [number])

    //a.3 store return value in variable calculation
    // const calculation = expensiveFunction(number);

    //a.4 accrding to dark variable, we change the bg color and text color
    const cssStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };



    return (
        //whenever we increase the value of this input, the expensive function will run and return the new value in calculation, and print it here: ; also whenever we change the number, we are calling the expensive function and console "loop started" - but takes 0.5 secs before updating bec of the for loop inside the fucntion
        //when toggle button is clicked, bg and text color will change; also bec of the for loop and react is also rerendering the component thats why theres a 0.5 secs delay 
        <div style={cssStyle}>
            <input onChange={(e) => setNumber(e.target.valueAsNumber)} type="number" value={number}>
            </input>

            <h2> Calculation: {memoCalculation} </h2>
            <button onClick={() => setDark(!dark)}> Toggle Dark </button>
        </div>


    )
};

//a.2 will return same number, but after running the unwanted for loop = can be any long calculation or anything that takes more time
function expensiveFunction(num) {
    console.log("Loop started.");
    for (let i = 0; i < 1000000; i++) { }
    return num;
}

export default UseMemo
