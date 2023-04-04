function FunctionEvent() {
    const handleClick = () => console.log('Button is clicked.');

    return (
        <div>
            <h4>Functional component </h4>
            <button onClick={handleClick}>Click Here</button>
        </div>
    )
}

export default FunctionEvent;