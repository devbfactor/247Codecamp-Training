import { createContext, useContext, useState } from 'react';
import React from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState('green');
    const [number, setNumber] = useState(1);

    // const [color, setColor] = useStar('yellow');
    // const [loading, setLoading] = useState(false);
    // const [number, setNumber] = useState(0);

    return (
        // <StateContext.Provider value={{ user, setUser, color, setColor, loading, setLoading, number }}>
        <StateContext.Provider value={{ user, setUser, number, setNumber }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);