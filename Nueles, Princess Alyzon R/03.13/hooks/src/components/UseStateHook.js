import React, { useState, useEffect } from 'react'

const UseStateHook = () => {
    //USESTATE HOOK

    //useState with object
    const [details, setDetails] = useState({ counter: 0, name: "" })

    function increaseCtr() {
        setDetails((prev) => ({
            ...prev,
            counter: prev.counter + 1,
        }));

        console.log(details);
    }
    return (
        <div>
            <input type='text' onChange={(e) => e.target.value} />
            <h1> {details.namee} has clicked {details.counter} times! </h1>
            <button onClick={increaseCtr}> Increase </button>
        </div>
    )
}

export default UseStateHook;