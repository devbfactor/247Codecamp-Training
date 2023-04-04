//child component of MainComponent.js

import React, { useContext } from 'react'
import { LoginContext } from './UseContextHook';


const SinglePost = () => {
    //3. import context from file and pass context inside the useContext hook and store it in a variable
    //store logincontext value in variable login
    const login = useContext(LoginContext); //accepts one argument w/c is the login context; [export login context from UseContextHooks;] then pass the login context inside useContext hook
    console.log(login);
    return (
        <div>
            <h3> This is from SinglePost.js </h3>
        </div>
    )
}

export default SinglePost
