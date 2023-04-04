import Component5 from './Component5'

const Component4 = ({ red }) => {
    return (
        <div>
            <h1 style={{ color: red }}> Component 4 </h1>
            <Component5 pula={red} />
        </div>
    )
}

export default Component4
