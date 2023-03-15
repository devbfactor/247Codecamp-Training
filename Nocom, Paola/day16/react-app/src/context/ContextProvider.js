import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => { 
    const [user, setUser] = useState("green");
    const [number, setNumber] = useState(1)

    return (
        <StateContext.Provider value={{ user, setUser, number, setNumber }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);