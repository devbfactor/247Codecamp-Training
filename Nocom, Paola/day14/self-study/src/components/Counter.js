import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return <div>
                <h3>Class Count: {this.state.counter}</h3>
                <button onClick={this.increment}>+1</button> &nbsp;
                <button onClick={this.decrement}>-1</button>
                </div>
                
    }
}

export default Counter;