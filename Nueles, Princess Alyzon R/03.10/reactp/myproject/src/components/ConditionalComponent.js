import { useState } from "react";
//import Counter from "./Counter";
//import FunctionalCounter from "./FunctionalCounter";

export default function ConditionalComponent() {
    const [display, setDisplay] = useState(true);
    //==== Ternary Conditional
    return display ? (
        <div>
            <h3>This is a Conditional Component </h3>
        </div>
    ) : (
        <div>
            <h4> Nothing to see here. Display = false</h4>
        </div>
    );

    //==== Conditional rendering using elements
    // let output;

    // if (display) {
    //     output = <h3>This is a Conditional Component </h3>;
    // } else {
    //     output = <h4> Nothing to see here. Display = false</h4>;
    // }
    // return <div>{output}</div>;


    //==== Conditional rendering
    // if (display) {
    //     return (
    //         <div>
    //             <h3>This is a Conditional Component </h3>
    //             {/* <Counter /> */}
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <h4> Nothing to see here. Display = false</h4>
    //             {/* <FunctionalCounter /> */}
    //         </div>
    //     )
    // }
}