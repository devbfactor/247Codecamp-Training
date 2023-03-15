import React, {useEffect} from 'react';
import { useStateContext } from './context/ContextProvider'
import Component2 from './components/Component2';
import './App.css';

function App() {
  const {user, number, setNumber} = useStateContext();

  useEffect(() => {
    setNumber(1000);
  })
  

  return (
    <>
      <h1 style={{color: user}}>Component {number}</h1>
      <Component2 />
    </>
  );
}

export default App;
