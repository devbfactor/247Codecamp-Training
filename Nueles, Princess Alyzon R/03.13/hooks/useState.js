import React, { useState, useEffect } from 'react'
//react hooks are functions that makes functional components work like class components and one of the few built in hooks that react provides is the useState hook.  
const App = () => {
    //USESTATE -- allows us to create vaariable and add state in our functional components . Used to store and retrieve dynamic data in our component .w/c changes when the user interacts with it. 

    // const array = useState(0);
    // const counter = array[0];
    // const setCounter = array[1]; //update state values; increase counter by 1 when button is clicked
    // console.log(array);

    //Array destructuring
    // const [counter, setCounter] = useState(0);
    // const [namee, setName] = useState(""); //initial value is empty string, whenever the value of input field changes, setName function is called and pass e.target.value

    //useState with object
    //create usestate and pass object as initial value, define name by using array destructuring
    const [details, setDetails] = useState({ counter: 0, name: "" })

    function increaseCtr() {
        //setCounter(counter + 1); //original value counter + 1

        // setDetails({ counter: details.counter + 1 }); //whatever you pass on this function, will be updated with the original value

        setDetails(() => ({  //create anohter function inside that returns the previous value of our state variable; prev is same as details variable
            //use spread operator; will add all previous values of the state variable
            ...prev,
            counter: prev.counter + 1,
        }));

    }
    return (
        <div>
            {/* useState with input Text; e.target.value to update state variable */}
            {/* <input type='text' onChange={(e) => setName(e.target.value)} /> */}
            {/* variable name */}
            <input type='text' onChange={(e) => e.target.value} />
            <h1> {details.namee} has clicked {details.counter} times! </h1>
            <button onClick={increaseCtr}> Increase </button>
        </div>
    )
}

export default App