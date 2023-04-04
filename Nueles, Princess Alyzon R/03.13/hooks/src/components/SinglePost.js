//child component of MainComponent.js

import React, { useContext } from 'react'
import { LoginContext } from './UseContextHook';


const SinglePost = () => {
    const login = useContext(LoginContext);
    console.log(login);
    return (
        <div>
            <h3> This is from SinglePost.js </h3>
        </div>
    )
}

export default SinglePost
