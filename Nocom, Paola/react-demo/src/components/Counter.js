import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
  
  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  const decreaseCounter = () => {
    setCounter(counter - 1)
  }

  const resetCounter = () => {
    setCounter(counter - counter)
  }

  return (
    <div className="Counter">
      <h1>Count: {counter}</h1>
        <button onClick={increaseCounter}>Increase + </button> &nbsp;
        <button onClick={decreaseCounter}>Decrease - </button> &nbsp;
        <button onClick={resetCounter}>Reset to 0 </button> <br/>
    </div>
  )
}

export default Counter