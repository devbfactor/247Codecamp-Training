import React from "react";
import Component4 from "./Component4";

const Component3 = ({ user }) => {
  return (
    <>
      <h1 style={{ color: user }}>Component 3</h1>
      <Component4 red={user} />
    </>
  );
};

export default Component3;
