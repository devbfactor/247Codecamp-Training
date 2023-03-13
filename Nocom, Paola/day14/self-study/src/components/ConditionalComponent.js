import { useState } from "react";

const ConditionalComponent = () => {
    const [display, setDisplay] = useState(true);

    return display ? (
        <div>
            <h3>So True Bestie</h3>
        </div>
    ) : (
        <div>
            <h3>Not True, Sadly</h3>
        </div>
        )

}

export default ConditionalComponent;