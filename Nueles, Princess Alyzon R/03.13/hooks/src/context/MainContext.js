import React from 'react'
import SecComponent from './SecComponent';
import LoginContextProvider from '../context/LoginContextProvider';


const MainContext = () => {
    return (
        <LoginContextProvider>
            <SecComponent />
        </LoginContextProvider>
    )
}

export default MainContext
