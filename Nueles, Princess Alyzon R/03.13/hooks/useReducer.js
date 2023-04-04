import React, { useReducer } from 'react'

//6. take care of string cases; create object ACTION and use all uppercase; so no chance for spelling mistakes
//so whenever we see this, we know it's for reducer
const ACTION = {
    INCREASE: "increase",
    DECREASE: "decrease"
}

//after importing, 3. define deault state
//define 1 obj w/c we can define out all states
const initialState = { count: 0 };

//4. define reducer function!! w/ 2 parameters
//state = where our app is currently at; use to access current state
//action = w/c action we have to perform [eg. increase, decrease, etc.]; use to get different actions
//whatever we pass in the dispatch function, we can access it by using action parameter
//this fucntion is where we will write all our logic for this usereducer and will return the updated state
const reducer = (state, action) => {
    //return { count: state.count + 1 } // state.count = current count

    //5.b Handle type property increase in reducer function
    //whatever we pass in the dispatch function, we can access it by using action parameter
    //console.log(action);
    //5.c. manage different actions by using switch case or ifelse, etc
    switch (action.type) {
        //case "increase":
        //6.b. replace using ACTION Object
        case ACTION.INCREASE:
            return { count: state.count + 1 };
        //case "decrease":
        case ACTION.DECREASE:
            return { count: state.count - 1 };
        default:
            return state;
    }

}

const UseReducer = () => {
    //2. pass initial state here; useReducer here returns an array same as useState hook w/c means 1st element will return current state and 2nd element will return a function w/c will help update that state
    //returns an array w/ 2 elements so will use array destructing for storing this variable
    //1st elemetn = access current state w/c is initial state
    //2nd elemtn = use for updating that state
    const [state, dispatch] = useReducer(reducer, initialState)
    //state & dispatch most common names for useReducer; you can take other names

    const increaseCount = () => {
        //5. Call Reducer Fucnction using dispatch
        //dispatch();
        //5.a. call different actions. Pass object in dispatch function with type property = increase
        //dispatch({ type: "increase" });
        //6.b. replace using ACTION Object
        dispatch({ type: ACTION.INCREASE });
    }

    const deccreaseCount = () => {
        //setCount((prev) => prev - 1);
        //dispatch({ type: "decrease" });
        dispatch({ type: ACTION.DECREASE });
    }

    return (
        <div>
            <h2> Count: {state.count} </h2>
            <button onClick={increaseCount}> Increase </button>
            <button onClick={deccreaseCount}> Decrease </button>
        </div>
    )
}

export default UseReducer


// CAN ALSO PLACE HERE FOR CLEANER CODE
// //6. take care of string cases; create object ACTION and use all uppercase; so no chance for spelling mistakes
// //so whenever we see this, we know it's for reducer
// const ACTION = {
//     INCREASE: "increase",
//     DECREASE: "decrease"
// }

// //after importing, 3. define deault state
// //define 1 obj w/c we can define out all states
// const initialState = { count: 0 };

// //4. define reducer function!! w/ 2 parameters
// //state = where our app is currently at; use to access current state
// //action = w/c action we have to perform [eg. increase, decrease, etc.]; use to get different actions
// //whatever we pass in the dispatch function, we can access it by using action parameter
// //this fucntion is where we will write all our logic for this usereducer and will return the updated state
// const reducer = (state, action) => {
//     //return { count: state.count + 1 } // state.count = current count

//     //5.b Handle type property increase in reducer function
//     //whatever we pass in the dispatch function, we can access it by using action parameter
//     //console.log(action);
//     //5.c. manage different actions by using switch case or ifelse, etc
//     switch (action.type) {
//         //case "increase":
//         //6.b. replace using ACTION Object
//         case ACTION.INCREASE:
//             return { count: state.count + 1 };
//         //case "decrease":
//         case ACTION.DECREASE:
//             return { count: state.count - 1 };
//         default:
//             return state;
//     }

// }