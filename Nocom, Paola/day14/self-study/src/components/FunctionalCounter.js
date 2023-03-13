import { useState } from 'react'

const FunctionalCounter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        console.log('+1')
        setCounter(counter + 1)
    }

    const decrement = () => {
        console.log('-1')
        setCounter(counter - 1)
    }

    const reset = () => {
        console.log('Reset')
        setCounter(counter - counter)
    }

    return (
    <div>
        <h3>Functional Count: {counter}</h3>
        <button onClick={increment}>+1</button> &nbsp;
        <button onClick={decrement}>-1</button> <br/>
        <button onClick={reset}>Reset</button>

    </div>

    )
}

export default FunctionalCounter;