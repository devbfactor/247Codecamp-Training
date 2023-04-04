// example main component from UseContextHooks -- provide data to main component for it to be accessible in all their child components

//has child component which is singlePost

import React from 'react'
import SinglePost from './SinglePost'

const MainComponent = () => {
    return (
        <div>
            <SinglePost />
        </div>
    )
}

export default MainComponent



