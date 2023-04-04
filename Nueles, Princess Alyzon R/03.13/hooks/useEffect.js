import React, { useState, useEffect } from 'react'
//react hooks are functions that makes functional components work like class components and one of the few built in hooks that react provides is the useState hook.  
const App = () => {

    //USEEFFECT HOOK --- allows us to respond to changes. 

    const [count, setCount] = useState(0);

    //useEffect w/o dependencies; -- will run on every single change in that component [app component since we wirte use effect in app component]
    //whenever the component renders,useEffects run 
    // useEffect(() => {
    //   document.title = `${count} new Messages!`
    // }); //title change with counter 

    //useEffect w/ an empty array --useEffect will only run 1 time when component is rendered first time
    //-- useful when fetching data from api or server
    // useEffect(() => {
    //     document.title = `${count} new Messages!`
    //   }, [] ); //will change counter only


    //useEffect with variables -- will run when the state variable's value will change
    const [otherCount, setOtherCount] = useState(5);

    useEffect(() => {
        document.title = `${otherCount} new Messages!`
    }, [otherCount]); //will not work woth old variable since we pass the new variable [otherCount] in dependecy array to update title with state 
    //can pass more variables using comma
    // useEffect(() => {
    //   document.title = `${otherCount} new Messages!`
    // }, [otherCount, coount, ...]);


    //CLEANUP Function
    // const [time, setTime] = useState(0); 
    // useEffect(() => {
    //   const timer = setInterval(() => { //for countdown timer & interval will not stop until we use the clear interval function
    //     setTimeout(time + 1);
    //   }, 1000);

    //   return () => {
    //     cleanInterval(timer)
    //   }
    // })

    useEffect(() => {
        console.log("Run useEffect", count); //count variable change, useeffct will run

        return () => {
            console.log("Clean up", count)
        };

    }, [count])

    //first, the clean up effect will run, then the call back function will run, then previous clean up function will run, then call back will run
    //only required when you needed to stop a repeated side effect when your component unmounts

    return (
        <div>
            <h3> {count} new Messages! </h3>
            <button onClick={() => setCount(count + 1)}> Increase </button>
            {/* increase counter by5: */}
            <h3> Other Count: {otherCount} </h3>
            <button onClick={() => setOtherCount(otherCount + 5)}> Increase +5 </button>
        </div>
    )
}
export default App;
