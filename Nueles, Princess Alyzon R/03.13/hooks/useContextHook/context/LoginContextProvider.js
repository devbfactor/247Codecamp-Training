import React, { createContext, useState } from 'react'
//5. import this file {loginContextProvider.js} to MainContext.js

export const LoginContext = createContext();

//3. write in props, {children}
const LoginContextProvider = ({ children }) => {
    // 5. pass state value in this context so create user details and pass defualt value = true. You can pass any type of data and pass that stae variable in value = { }
    const [userDetails, setUserDetails] = useState(true)
    return (
        // 2. after import and initialize create context, set provider and pass children inside provider
        <LoginContext.Provider value={userDetails}>
            {/* 4. pass children inside the provider then give value attribute in provider value = { }*/}
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider
