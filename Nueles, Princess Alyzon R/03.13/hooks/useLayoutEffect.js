import React from 'react'
import { useEffect, useState, useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {
    const [toggle, setToggle] = useState(false);
    //2. to access DOM elements, use useRef
    const textRef = useRef();

    //useEffect with dependecy: toggle
    //useEffect will run when this toggle state will change & print useEffect in console
    // useEffect(() => {
    //     console.log("useEffect");
    // }, [toggle]);

    // useLayoutEffect(() => {
    //     console.log("useLayoutEffect");
    // }, [toggle]);


    //text moves to the bottom
    //getBoundingClientRect() = function used to get all dimentsion of this element
    // useEffect(() => {
    //     if (textRef.current != null) {
    //         const dimension = textRef.current.getBoundingClientRect();
    //         // console.log(dimension);
    //         textRef.current.style.paddingTop = `${dimension.height}px`;
    //     }
    // }, [toggle]);


    //noflickering; no friction bec it runs beore the dom printed
    useLayoutEffect(() => {
        if (textRef.current != null) {
            const dimension = textRef.current.getBoundingClientRect();
            console.log(dimension);
            textRef.current.style.paddingTop = `${dimension.height}px`;
        }
    }, [toggle]);

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}> Toggle </button>
            {/* {toggle && <h4> Code Bless You </h4>} */}

            {/* pass ref attributte to this text */}
            {toggle && <h4 ref={textRef}> Code Bless You </h4>}
        </div>
    )
}

export default UseLayoutEffect
