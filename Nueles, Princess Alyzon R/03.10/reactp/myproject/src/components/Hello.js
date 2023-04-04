const name = "Anne"

const displayMessage = () => {
    return "I need help!"
}

function Hello() {
    return ( 
    <> 
        <h1> Hello World! -{name} </h1>
        <h3>This is a Functional Component</h3>
        <h4> The message is: {displayMessage()} </h4>
        Total is: {10 + 2}
    </>
)}

// const Hello = () => <h1> Hello World! </h1>

export default Hello;