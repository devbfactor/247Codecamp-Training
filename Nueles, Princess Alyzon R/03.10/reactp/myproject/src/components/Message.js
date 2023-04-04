import {Component} from 'react';

class Message extends Component {
    render() {
        return <>
            <h3>This is a Class Component. </h3>
            <p> MESSAGE: {this.props.messagecode} {this.props.messagecontent} </p>
        </> 
    }
}

export default Message;