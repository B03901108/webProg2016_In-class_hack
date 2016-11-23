import React from 'react';
import './INApp.css';
//import INDir from './INDir';
import INObj from './INObj';

const addObjURL = 'https://openclipart.org/image/2400px/svg_to_png/171070/tasto-2-architetto-franc-01-black-border.png';
const addDirURL = 'http://www.pd4pic.com/images/folder-directory-file-system-filesystem-open.png';
const findURL = 'http://pngimg.com/upload/eye_PNG6183.png';

class INApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockArr: [],
      imgClass: ['ftnOn', 'ftnOff', 'ftnOff'],
      keptStr: "",
      isURL: false,
    };
    this.modeClick = this.modeClick.bind(this);
    this.keyJudge = this.keyJudge.bind(this);
    this.inputCreate = this.inputCreate.bind(this);
  }

  modeClick(index) {
    for (let i = 0; i < 3; i += 1) this.state.imgClass[i] = 'ftnOff';
    this.state.imgClass[index] = 'ftnOn';
    this.setState({ imgClass: this.state.imgClass.slice(), isURL: false });
  }

  keyJudge(e) {
    if (e.key === 'Enter') {
      const tmpMsg = e.target.value.trim();
      if (tmpMsg === '') { e.target.value = ''; return; }
      if (this.state.imgClass[0] !== 'ftnOn') { e.target.value = ''; return; }
      if (this.state.isURL) this.state.blockArr.push(<INObj nm={this.state.keptStr} url={tmpMsg} />);
      else this.state.keptStr = tmpMsg;
      e.target.value = '';
      this.setState({ isURL: (this.state.isURL === false) });
    }
  }

  inputCreate() {
    let holder = 'Name of Tag';
    if (this.state.isURL) holder = 'URL of Tag';
    return <input type="text" placeholder={holder} onKeyPress={this.keyJudge} />;
  }

  render() {
    return (
      <div className="in-app">
        <div className="in-bar">
          <div className={this.state.imgClass[0]} onClick={() => { this.modeClick(0); }}>
            <img src={addObjURL} width="90 px" height="90 px" />
          </div>
          <div className={this.state.imgClass[1]} onClick={() => { this.modeClick(1); }}>
            <img src={addDirURL} width="90 px" height="90 px" />
          </div>
          <div className={this.state.imgClass[2]} onClick={() => { this.modeClick(2); }}>
            <img src={findURL} width="90 px" height="90 px" />
          </div>
          {this.inputCreate()}
        </div>
        <div className="in-blocks">
          {this.state.blockArr}
        </div>
      </div>
    );
  }
};

export default INApp;
