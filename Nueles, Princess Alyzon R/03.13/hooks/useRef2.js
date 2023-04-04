//======= ACCESSING DOM ELEMENTS ======= //
//access dom elements w/o using document.getelement by id or by class name 

const UseRef = () => {

    const inputEle = useRef() //1. after importing useRef hook, write useRef() and store it in a variable
    const handleClick = () => {
        // console.log("inputEle.current");
        //change input width to 300px when button clicked and focus input field using vanilla js
        inputEle.current.style.width = "300px";
        inputEle.current.focus();
        // console.log("inputEle"); //see all methods/properties you can use
        console.log("Function Run")
    }

    return (
        <div>
            {/* give input a property [ref = inputEle w/c is the name of our ref variable; ]
            .. add ref={} attribute to [input]element for access it directly/ to access elements directly */}
            <input type='text' ref={inputEle} />

            {/* if button is clicked, handleClick function will execute */}
            <button onClick={handleClick}> Click Here </button>
        </div>
    )
}

export default UseRef

