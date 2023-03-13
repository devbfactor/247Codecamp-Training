import React, {useRef} from 'react'

const UseRef2 = () => {
    const inputEle = useRef()
    const handleClick = () => {
        console.log(inputEle.current);
        inputEle.current.style.width = "300px";
        inputEle.current.focus();
    }
  return (
    <div>
        <input type="text" ref={inputEle}/> &nbsp;
        <button onClick={handleClick}>Resize & Focus</button>
    </div>
  )
}

export default UseRef2