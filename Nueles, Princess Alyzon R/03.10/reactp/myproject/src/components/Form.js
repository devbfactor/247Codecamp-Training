//user input

import { Component } from "react";

class Form extends Component {
    state = {
        firstname: "",
        lastname: "",
    };

    handleChange = (event) => {
        this.setState({
            firstname: event.target.value,
        });
        //console.log(this.state.firstname);
    }

    handleLastnameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            fname: this.state.firstname,
            lname: this.state.lastname,
        });
    }

    render() {
        return (
            <div> <h4>FORM </h4>
                <form>
                    <input onChange={this.handleChange} type="text" value={this.state.firstname}>
                    </input>

                    <input onChange={this.handleLastnameChange} type="text" value={this.state.lastname}>
                    </input>

                    <button onSubmit={this.handleSubmit} type="submit">SUBMIT</button>
                </form>
            </div>
        );
    }
}

export default Form;