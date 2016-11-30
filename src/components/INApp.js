import React from 'react';
import './INApp.css';
//import INDir from './INDir';
import INObj from './INObj';

const maxLen = 16;
const addObjURL = 'https://openclipart.org/image/2400px/svg_to_png/171070/tasto-2-architetto-franc-01-black-border.png';
const addDirURL = 'http://www.pd4pic.com/images/folder-directory-file-system-filesystem-open.png';
const findURL = 'http://pngimg.com/upload/eye_PNG6183.png';

class INApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockArr: [],
      ftnOn: 0,
      keptStr: "",
      isURL: false,
    };
    this.imgClass = this.imgClass.bind(this);
    this.modeClick = this.modeClick.bind(this);
    this.inputCreate = this.inputCreate.bind(this);
    this.delBlock = this.delBlock.bind(this);
    this.keyJudge = this.keyJudge.bind(this);
  }

  imgClass(index) {
    if (index === this.state.ftnOn) return 'ftnOn';
    return 'ftnOff';
  }

  modeClick(index) {
    if (index !== this.state.ftnOn) this.setState({ ftnOn: index, isURL: false });
  }

  inputCreate() {
    let holder = 'Enter Your ';
    const { ftnOn, isURL } = this.state;
    if (ftnOn === 2) holder += 'Keyword';
    else if (ftnOn === 1) holder += `Folder (len < ${maxLen})`;
    else if (isURL) holder += 'URL';
    else holder += `Tag (len < ${maxLen})`;
    return <input type="text" placeholder={holder} onKeyPress={this.keyJudge} />;
  }

  delBlock(index) {
    const { blockArr } = this.state;
    return (() => {
      delete blockArr[index];
      this.setState({ blockArr: blockArr.slice() });
    });
  }

  keyJudge(e) {
    const {ftnOn, isURL, blockArr} = this.state;
    if ((ftnOn < 2) && (!isURL)) e.target.value = e.target.value.substring(0, maxLen - 1);
    if (e.key === 'Enter') {
      const tmpMsg = e.target.value.trim();
      if (tmpMsg === '') { e.target.value = ''; return; }
      if (ftnOn !== 0) { e.target.value = ''; return; }
      if (isURL) {
        const id = blockArr.length;
        blockArr.push(<INObj key={id} nm={this.state.keptStr} url={tmpMsg} del={this.delBlock(id)} />);
      } else this.state.keptStr = tmpMsg;
      e.target.value = '';
      this.setState({ isURL: (isURL === false) });
    }
  }

  render() {
    return (
      <div className="in-app">
        <div className="in-bar">
          <div className={this.imgClass(0)} onClick={() => { this.modeClick(0); }}>
            <img src={addObjURL} width="90 px" height="90 px" />
          </div>
          <div className={this.imgClass(1)} onClick={() => { this.modeClick(1); }}>
            <img src={addDirURL} width="90 px" height="90 px" />
          </div>
          <div className={this.imgClass(2)} onClick={() => { this.modeClick(2); }}>
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
