import React, { useState, useEffect } from 'react'

const UseEffectHook = () => {
    //USEEFFECT HOOK

    const [count, setCount] = useState(0);

    //useEffect w/o dependencies
    // useEffect(() => {
    //   document.title = `${count} new Messages!`
    // }); 

    //useEffect w/ an empty array 
    // useEffect(() => {
    //     document.title = `${count} new Messages!`
    //   }, [] ); 


    //useEffect with variables
    const [otherCount, setOtherCount] = useState(5);

    useEffect(() => {
        document.title = `${otherCount} new Messages!`
    }, [otherCount]);


    //CLEANUP Function

    useEffect(() => {
        console.log("Run useEffect", count); //count variable change, useeffct will run

        return () => {
            console.log("Clean up", count)
        };

    }, [count])


    return (
        <div>
            <h3> {count} new Messages! </h3>
            <button onClick={() => setCount(count + 1)}> Increase </button>
            {/* increase counter by5: */}
            <h3> Other Count: {otherCount} </h3>
            <button onClick={() => setOtherCount(otherCount + 5)}> Increase +5 </button>
        </div>
    )
}

export default UseEffectHook;