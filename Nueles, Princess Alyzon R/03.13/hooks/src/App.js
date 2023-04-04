import React from 'react'
import UseCallback from './components/UseCallback';
import UseContextHook from './components/UseContextHook';
import UseEffectHook from './components/UseEffectHook';
import UseLayoutEffect from './components/UseLayoutEffect';
import UseMemo from './components/UseMemo';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import UseStateHook from './components/UseStateHook';
import MainContext from './context/MainContext';

const App = () => {
  return (
    <div>
      <UseStateHook />
      <hr />
      <UseEffectHook />
      <hr />
      <UseContextHook />
      <hr />
      <MainContext />
      <hr />
      <UseRef />
      <hr />
      <UseReducer />
      <hr />
      <UseLayoutEffect />
      <hr />
      <UseMemo />
      <hr />
      <UseCallback />
    </div>
  )
}
export default App;
