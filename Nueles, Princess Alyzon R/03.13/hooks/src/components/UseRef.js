import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    //======= CREATE MUTABLE VAR W/O CAUSING RE-RENDER ======= //
    // const [name, setName] = useState("");
    // const count = useRef(0);

    // useEffect(() => {
    //     count.current = count.current + 1;
    // });

    // return (
    //     <div>
    //         <input type='text' onChange={(e) => setName(e.target.value)} />
    //         <h2>Name: {name} </h2>
    //         <h3> Renders: {count.current} </h3>
    //     </div>
    // )


    //======= ACCESSING DOM ELEMENTS ======= //
    const inputEle = useRef()
    const handleClick = () => {
        // console.log("inputEle.current");
        inputEle.current.style.width = "300px";
        inputEle.current.focus();
        console.log("Function Run")
    }

    return (
        <div>
            <input type='text' ref={inputEle} />
            <button onClick={handleClick}> Click Here </button>
        </div>
    )
}

export default UseRef
