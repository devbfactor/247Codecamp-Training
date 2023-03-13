import React, { useState, useEffect } from 'react'

const CounterEffects = () => {

    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(5);


    useEffect(() => {
        document.title = `${otherCount} new messages!`
    }, [otherCount]);

    return (
        <div>
            <h3>{otherCount} new Messages!</h3>
            <button onClick={() => setCount(count + 1)}>Increase by 1</button>
            <button onClick={() => setOtherCount(otherCount + 5)}>Increase by 5</button>
        </div>
  )
}

export default CounterEffects