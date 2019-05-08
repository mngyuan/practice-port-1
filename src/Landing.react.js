// @flow

import * as React from 'react';
import {Redirect} from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <Redirect to="/photo" />
  </div>
);

export default Landing;
