import React from 'react';
import './INDir.css';
import INObj from './INObj';

class INDir extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elementArr: [],
      show: false,
    };
    this.add = this.add.bind(this);
  }

  add() {}

  render() {
  	return (
  	  <div className="dir-area">
      <div className="dir-link">
        <input type="button" value="+" className="addBlock" onClick={this.add} />
        <span>{this.props.nm}</span>
        <input type="button" value="x" className="deleteGroup" onClick={this.props.del} />
      </div>
      </div>
    );
  }
}

export default INDir;