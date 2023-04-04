//======= 1st usecase: CREATE MUTABLE VAR W/O CAUSING RE-RENDER ======= //
import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

    const [name, setName] = useState("");

    // const [count, setCount] = useState(0); // so can't use useState bec we'll be stuck in infinite loop
    // useEffect(() => {
    //     setCount((prev) => prev + 1 ) //when the setCount component is rendered, it will update the count variable by 1, and because the state variable is updated, the component is rendered again and again.
    // })


    //2. after name; this function returns an object w/ 1 property that's current so store it in variable count
    const count = useRef(0); //default value of 0; 
    //console.log(count)

    //4. update value when component rendered
    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <div>
            {/* on onChange state, update current input event value */}
            <input type='text' onChange={(e) => setName(e.target.value)} />
            <h2>Name: {name} </h2>

            {/* 3. update or show value by using .current property */}
            <h3> Renders: {count.current} </h3>
        </div>
    )
}

export default UseRef