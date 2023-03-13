import { useState } from "react";

const CounterStates = () => {
    const [details, setDetails] = useState({counter: 0, name: ""});
  
  const increaseCounter = () => {
    setDetails((prev) => ({
        ...prev,
        counter: prev.counter + 1
    }))
    console.log(details)
  }


  return (
    <div className="Counter">
        <input type="text" onChange={e => setDetails(e.target.value)} />
        <h1>{details.name} has clicked {details.counter} times!</h1>
        <button onClick={increaseCounter}>Increase + </button> &nbsp;
    </div>
  )
}

export default CounterStates