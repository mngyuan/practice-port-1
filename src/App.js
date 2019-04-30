// @flow

import * as React from 'react';
import {Link, Route, withRouter} from 'react-router-dom';
import Landing from './Landing.react';
import Photo from './Photo.react';
import Print from './Print.react';
import Video from './Video.react';
import About from './About.react';

class App extends React.PureComponent {
  state = {
    background: 'black',
  };

  _onMouseMove = e => {
    //const x = Math.floor((e.screenX / window.innerWidth) * 128 + 127);
    //const y = Math.floor((e.screenY / window.innerHeight) * -128 + 127);
    //console.log(x, y);
    //this.setState({background: `rgba(${x}, ${y}, 187, 0.4)`});
  };

  render() {
    return (
      <div
        className="container"
        onMouseMove={this._onMouseMove}
        style={{background: this.state.background}}
      >
        <div className="content">
          <div className="content-anchor">
            <div className="content-scrollable">
              <Route path="/" exact component={Landing} />
              <Route path="/photo/:set?" component={Photo} />
              <Route path="/about" exact component={About} />
              <Route path="/video" exact component={Video} />
              <Route path="/print/:set?" component={Print} />
            </div>
            <nav className="left-bar">
              <Link to="/about">ABOUT</Link>
              <Link to="/print">PRINT</Link>
              <Link to="/photo">PHOTO</Link>
              <Link to="/video">VIDEO</Link>
            </nav>
            <div className="right-bar">
              <h2>{this.props.location.pathname.split('/')[1]}</h2>
            </div>
            <div className="top-bar">
              <h1>MNGYUAN</h1>
            </div>
            <div className="bottom-bar">COPYRIGHT 2019</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
