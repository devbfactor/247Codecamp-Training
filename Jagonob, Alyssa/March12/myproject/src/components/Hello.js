const displayMessage = ()=>{
    return 'I need sleep!'
}

function Hello(){
  return <h1>The message is: {displayMessage()}</h1>
}

// const Hello = ()=><h1>Hello there</h1>

export default Hello;