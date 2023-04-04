//class based component

import { Component } from 'react';

class Counter extends Component {
    //create a state object using a constructor
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
        //binding this keyword to event handler increment
        //this.increment = this.increment.bind(this);
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render() {
        return (
            <div>
                <h2>Class based component </h2>
                <h3>Counter Value is: {this.state.counter} </h3>
                <h3>
                    <button onClick={this.increment}> +1 </button>
                    ' CLICK '
                    <button onClick={() => this.decrement()}> -1 </button>
                </h3>

            </div>
        )
    }
}

export default Counter;