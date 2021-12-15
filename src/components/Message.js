import React from 'react';
import Bounce from './animations/Bounce';

class Message extends React.Component {
  render() {
    return <div className={`message ${this.props.sender}`}>
      {this.props.animated ? <Bounce text={this.props.text}></Bounce> : <p>{this.props.text}</p>}
    </div>;
  }
}

export default Message;