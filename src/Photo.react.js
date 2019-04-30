// @flow

import {importAll} from 'mngyuan-lib';

import * as React from 'react';
import {Link} from 'react-router-dom';
import PHOTO_1 from './static/images/87100018.jpg';
import PHOTO_2 from './static/images/87100022.jpg';
import PHOTO_3 from './static/images/87100024.jpg';

const SETS = {
  'tokyo-dreaming': {
    photos: importAll(
      require.context('./photos/tokyo-dreaming', false, /\.(png|jpe?g|svg)$/),
    ),
  },
};

const PhotoLanding = () => (
  <div className="landing">
    <div className="cover">
      <h3 data-text="KOREA 2017">KOREA 2017</h3>
      <img src={PHOTO_3} />
    </div>
    <div className="cover">
      <Link to="/photo/tokyo-dreaming">
        <h3 data-text="TOKYO DREAMING">TOKYO DREAMING</h3>
      </Link>
      <img src={PHOTO_1} />
    </div>
    <div className="cover">
      <h3 className="bottom" data-text="ANNE NYC">
        ANNE NYC
      </h3>
      <img src={PHOTO_2} />
    </div>
    <div className="cover">
      <h3 className="bottom" data-text="LISA @ HOME">
        LISA @ HOME
      </h3>
      <img src={PHOTO_3} />
    </div>
  </div>
);

const PhotoSet = (props: {set: string}) => {
  console.log(props, SETS);
  const humanFriendlySetName = props.set.replace(/-/g, ' ');
  const photoElems = SETS[props.set].photos.map(src => (
    <img key={src} src={src} />
  ));
  return (
    <div className="landing">
      <div className="cover">
        <h3 data-text="KOREA 2017">KOREA 2017</h3>
        <img src={PHOTO_3} />
      </div>
      {photoElems}
    </div>
  );
};

const Photo = (props: {location: {pathname: ?string}}) =>
  props.match.params.set ? (
    <PhotoSet set={props.match.params.set} {...props} />
  ) : (
    <PhotoLanding {...props} />
  );

export default Photo;
