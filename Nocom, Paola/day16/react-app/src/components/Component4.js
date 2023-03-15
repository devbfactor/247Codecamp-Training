import React, { useState } from 'react'
import Component5 from './Component5'


const Component4 = ({ red }) => {
  return (
    <>
        <h1 style={{color: red}}>Component 4</h1>
        <Component5 pula={red}/>
    </>
  )
}

export default Component4