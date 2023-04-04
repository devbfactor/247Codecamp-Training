import React, { useContext } from 'react'
import { LoginContext } from './LoginContextProvider';

const ThirdComponent = () => {
    const login = useContext(LoginContext);
    console.log(login);

    return (
        <div>
            <h3> This is from ThirdComponent.js </h3>
        </div>
    )
}

export default ThirdComponent
