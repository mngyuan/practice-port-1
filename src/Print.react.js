// @flow

import * as React from 'react';
import Helmet from 'react-helmet';

import {SinglePhotoGallery, importAllAsArray} from 'mngyuan-lib';

const SETS = {
  milkfat: importAllAsArray(
    require.context('./stories/milkfat', false, /\.(png|jpe?g|svg)$/),
  ),
  hthfasfa: importAllAsArray(
    require.context('./stories/hthfasfa', false, /\.(png|jpe?g|svg)$/),
  ),
};

const Print = () => (
  <React.Fragment>
    <Helmet title="print · Kevin Lee" />
    <div className="print">
      <SinglePhotoGallery photoElems={SETS.hthfasfa} className="gallery" />
      <div className="caption">
        <i>How to Have Friends and Still Feel Alone</i>
        2018
      </div>
      <SinglePhotoGallery photoElems={SETS.milkfat} className="gallery" />
      <div className="caption">
        <i>MILKFAT</i>
        2018
      </div>
    </div>
  </React.Fragment>
);

export default Print;
