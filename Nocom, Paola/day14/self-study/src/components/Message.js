import { Component } from "react";

class Message extends Component {
    render() {
        return <h2>Message {this.props.messageCode}: {this.props.messageContent}</h2>
    }
}

export default Message;