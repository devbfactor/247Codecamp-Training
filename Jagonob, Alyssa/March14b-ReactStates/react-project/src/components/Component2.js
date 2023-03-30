import React from "react";
import { useStateContext } from "../context/ContextProvider";
// import Component3 from "./Component3";

const Component2 = ({}) => {
  const { user, setUser } = useStateContext();

  const changeColor = () => {
    setUser("red");
  };

  return (
    <>
      <h1 onClick={changeColor} style={{ color: user }}>
        Component 2
      </h1>
    </>
  );
};

export default Component2;
