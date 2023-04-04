import React, { useState } from 'react'
import Component4 from './Component4'

const Component3 = ({ user }) => {
    //const [user, setUser] = useState('blue');

    return (
        <div>
            <h1 style={{ color: user }}> Component 3 </h1>
            <Component4 red={user} />
        </div>
    )
}

export default Component3
