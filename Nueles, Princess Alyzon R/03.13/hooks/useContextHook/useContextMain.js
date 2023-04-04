import React, { createContext } from 'react'
import MainComponent from './MainComponent';

//1. create the context and give name to that context eg LoginContext
export const LoginContext = createContext();
//export logincontext then import to singlepost [to access variable] then pass the login context inside useContext hook in singlepost.js

//2. provide the context == define w/c components we want to access the context
//provide data to main component for it to be accessible in all their child components
//eg. access that data into main component
const UseContextHook = () => {
    return (
        //2.a. Decide w/c component can access this context (LoginCOntext) with the use of Context.provider and pass other components (MainComponent) b/w this provider tag, and in value attribute, pass value inside curly braces value = { }
        // whatever data you pass b/w this contextprovider, [we can access its value using useContext Hook;] it & its style component can access its context value
        //pass value using value attribute
        <LoginContext.Provider value={true}>
            <div>
                {/* access variable inside single post component. UseCOntextHooks > MainComponent > SinglePost */}
                {/* 3. [in singlePost.js] */}
                <MainComponent />
            </div>
        </LoginContext.Provider>

    )
}

export default UseContextHook
