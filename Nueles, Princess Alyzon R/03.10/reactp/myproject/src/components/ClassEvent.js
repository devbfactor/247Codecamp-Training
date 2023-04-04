import { Component } from "react";

class ClassEvent extends Component {
    handleClick() {
        console.log('Class based event handling')
    }
    render() {
        return (
            <div>
                <h4>Class based component </h4>
                <button onClick={this.handleClick}>Click Here</button>
            </div>
        )
    }
}

export default ClassEvent;