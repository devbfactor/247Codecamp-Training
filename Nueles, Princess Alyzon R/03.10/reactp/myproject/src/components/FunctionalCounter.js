//use state in a func component
import { useState } from "react";

const FunctionalCounter = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h2>Functional Component </h2>
            <h3>Counter Value is: {counter} </h3>
            <button onClick={increment}> Increment +1 </button>
            <button onClick={decrement}> Decrement -1 </button>
        </div>
    )
}

export default FunctionalCounter



