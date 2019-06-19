// @flow
//
import {createBrowserHistory} from 'history';
import * as React from 'react';
import {Link, Route, BrowserRouter, Switch, withRouter} from 'react-router-dom';
import Landing from './Landing.react';
import Photo from './Photo.react';
import Print from './Print.react';
import Video from './Video.react';
import About from './About.react';
import ScrollableArea from './ScrollableArea.react';

const history = createBrowserHistory();

const Content = withRouter(props => (
  <div className="container">
    <div className="content">
      <div className="content-anchor">
        <ScrollableArea resetOnPage>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/photo/:set?" component={Photo} />
            <Route path="/about" exact component={About} />
            <Route path="/video" exact component={Video} />
            <Route path="/print/:set?" component={Print} />
          </Switch>
        </ScrollableArea>
        <nav className="left-bar">
          <Link to="/about">ABOUT</Link>
          <Link to="/print">PRINT</Link>
          <Link to="/photo">PHOTO</Link>
          <Link to="/video">VIDEO</Link>
        </nav>
        <div className="right-bar">
          <h2>{props.location.pathname.split('/')[1]}</h2>
        </div>
        <div className="top-bar">
          <h1>MNGYUAN</h1>
        </div>
        <div className="bottom-bar">COPYRIGHT 2019</div>
      </div>
    </div>
  </div>
));

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL} history={history}>
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;
