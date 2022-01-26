import React from 'react';
import Bounce from './animations/Bounce';

class Message extends React.Component {

  render() {
    return <div className={`message ${this.props.sender}`}>
      {this.props.animated ? <Bounce></Bounce> : <>
        <p>{this.props.text}</p>
        {this.props.url && <>
          <p><strong>Läs mer på: </strong> <span><a href={this.props.url}>{this.props.url}</a></span></p>
          </>}
          {this.props.url2 && <>  
          <hr></hr>
          <p>{this.props.text2}</p>
          <p><strong>Läs mer på:</strong> <span><a href={this.props.url2}>{this.props.url2}</a></span></p>
          </>}
      </>
      }
    </div>;
  }
}

export default Message;