import React from 'react'

function FunctionEvent() {
    const handleClick = () => {
        console.log('FC button clicked')
    }

    return (
    <div>
        <h1>Functional Component</h1>
        <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default FunctionEvent;