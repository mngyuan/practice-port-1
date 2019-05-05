// @flow

import * as React from 'react';

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
  <div className="print">
    <SinglePhotoGallery photoElems={SETS.hthfasfa} />
    <SinglePhotoGallery photoElems={SETS.milkfat} />
  </div>
);

export default Print;
