import React, { createContext } from 'react'
import MainComponent from './MainComponent';

//1. create the context and give name to that context eg LoginContext
export const LoginContext = createContext();

//2. provide the context
const UseContextHook = () => {
    return (
        <LoginContext.Provider value={true}>
            <div>
                {/* access variable inside single post component. UseCOntextHooks > MainComponent > SinglePost */}
                <MainComponent />
            </div>
        </LoginContext.Provider>

    )
}

export default UseContextHook
