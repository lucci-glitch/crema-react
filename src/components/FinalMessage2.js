import React from 'react';
import Bounce from './animations/Bounce';

class FinalMessage2 extends React.Component {
  render() {
    return <div className={`message ${this.props.sender}`}>
      {this.props.animated ? <Bounce></Bounce> : <div><p>{this.props.post1}</p><p>{this.props.url1}</p><br></br><br></br><p>{this.props.post2}</p><p>{this.props.url2}</p></div>}
    </div>
  }
}

export default FinalMessage2;