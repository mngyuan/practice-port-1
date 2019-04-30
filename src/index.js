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
