import { Component } from "react";

class Resume extends Component {
    render() {
        const {name} = this.props;
        return(
                <h4>Destructuring in a class component. - {name}</h4>
        )}
}

export default Resume;