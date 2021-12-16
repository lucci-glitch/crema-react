import React from 'react';
import Bounce from './animations/Bounce';

class Message extends React.Component {
  render() {
    return <div className={`message ${this.props.sender}`}>
      {this.props.animated ? <Bounce></Bounce> : <p>{this.props.text}</p>}
    </div>;
  }
}

export default Message;