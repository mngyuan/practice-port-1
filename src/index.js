import {createBrowserHistory} from 'history';
import {Router} from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root'),
);

document.documentElement.style.setProperty('--mouse-x', 0.5);
document.documentElement.style.setProperty('--mouse-y', 0.5);
document.addEventListener('mousemove', e => {
  const mouseXPerc = e.clientX / window.innerWidth;
  const mouseYPerc = e.clientY / window.innerHeight;
  const mouseXVal = Math.log((Math.E - 1) * mouseXPerc + 1);
  const mouseYVal = Math.log((Math.E - 1) * mouseYPerc + 1);
  document.documentElement.style.setProperty('--mouse-x', mouseXVal);
  document.documentElement.style.setProperty('--mouse-y', mouseYVal);
  console.log(mouseXVal, mouseYVal);
});
