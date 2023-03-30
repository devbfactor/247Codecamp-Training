function FunctionEvent() {
    const handleClick = ()=>{
        console.log('button clicked!')
    };
    return (
        <div>
            Functional component
            <button onClick ={handleClick}>Click here</button>
        </div>

    );
}

export default FunctionEvent;