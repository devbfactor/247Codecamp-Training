import React from "react";
import { useStateContext } from "./context/ContextProvider";
import Component2 from "./components/Component2";
function App() {
  const { user } = useStateContext();

  return (
    <div>
      <h1 style={{ color: user }}>Component 1</h1>
      <Component2 />
    </div>
  );
}

export default App;
