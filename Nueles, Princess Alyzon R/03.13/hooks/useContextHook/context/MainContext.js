import React from 'react'
import SecComponent from './SecComponent';
import LoginContextProvider from '../context/LoginContextProvider';


const MainContext = () => {
    return (
        // LogInContext Provider beacuse we pass children inside that provider
        <LoginContextProvider>
            {/* access variable inside single post component. LogInContextProvider > MainContext > SecComp > ThirdCom */}
            <SecComponent />
        </LoginContextProvider>
    )
}

export default MainContext
