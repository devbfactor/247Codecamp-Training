import React, { useEffect } from "react";
import { useStateContext } from "./context/ContextProvider";
import Component2 from "./components/Component2";

function App() {
  const { user, number, setNumber } = useStateContext();

  useEffect = (() => {
    setNumber(1000)
  })

  return (
    <div>
      <h1 style={{ color: user }}> Component {number} </h1>

      <Component2 />
    </div >
  );
}

export default App;
