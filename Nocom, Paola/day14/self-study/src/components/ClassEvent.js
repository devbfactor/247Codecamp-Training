import { Component } from "react";

class ClassEvent extends Component {
    handleClick() {
        console.log('CC button clicked')
    }

    render() {
        return (
            <div>
                <h1>Class-based Component</h1>
                <button onClick={this.handleClick}>Click here</button>
            </div>
        )
    }
}

export default ClassEvent;