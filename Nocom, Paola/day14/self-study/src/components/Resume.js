import { Component } from "react";

class Resume extends Component {
    render() {
        const { name, age } = this.props;
        return <h1>Character: {name}, {age} years old</h1>
    }
}

export default Resume;