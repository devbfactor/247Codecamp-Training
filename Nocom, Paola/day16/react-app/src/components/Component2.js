import React from "react"
import { useStateContext } from '../context/ContextProvider'

const Component2 = () => {
    const {user, setUser} = useStateContext();

    const changeColor = () => {
        setUser("red");
    }
  return (
    <>
        <h1 onClick={changeColor} style={{color: user}}>Component 2</h1>
    </>
  )
}

export default Component2