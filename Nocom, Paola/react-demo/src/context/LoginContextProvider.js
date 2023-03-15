import React, {useState, createContext} from "react";
import MainComponent from "../components/MainComponent";

export const LoginContext = createContext()

const LoginContextProvider = ({children}) => {
    const [userDetails, setUserDetails] = useState(true)
  return (
    <LoginContext.Provider value={userDetails}>
        {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider