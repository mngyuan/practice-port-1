// @flow

import {importAll} from 'mngyuan-lib';

import * as React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router-dom';

import TOKYO_DREAMING_COVER from './photos/tokyo-dreaming/000019.JPG';
import NYC_DARK_COVER from './photos/nyc-dark/S398787-R3-E097.jpg';
import CINEANNE_COVER from './photos/cineanne/S398787-R4-E128.jpg';

const SETS = {
  'tokyo-dreaming': {
    photos: importAll(
      require.context('./photos/tokyo-dreaming', false, /\.(png|jpe?g|svg)$/i),
    ),
    cover: TOKYO_DREAMING_COVER,
  },
  'nyc-dark': {
    photos: importAll(
      require.context('./photos/nyc-dark', false, /\.(png|jpe?g|svg)$/i),
    ),
    cover: NYC_DARK_COVER,
    bottom: true,
  },
  cineanne: {
    photos: importAll(
      require.context('./photos/cineanne', false, /\.(png|jpe?g|svg)$/i),
    ),
    cover: CINEANNE_COVER,
  },
};

const PhotoLanding = () => (
  <React.Fragment>
    <Helmet title="photo · Kevin Lee" />
    <div className="landing">
      {Object.keys(SETS).map(setName => (
        <Link to={`/photo/${setName}`}>
          <div className="cover">
            <h3
              data-text={setName.replace(/-/g, ' ')}
              className={SETS[setName].bottom ? 'bottom' : ''}
            >
              {setName.replace(/-/g, ' ')}
            </h3>
            <img src={SETS[setName].cover} />
          </div>
        </Link>
      ))}
    </div>
  </React.Fragment>
);

const PhotoSet = (props: {set: string}) => {
  const setName = props.set;
  const humanFriendlySetName = setName.replace(/-/g, ' ');
  const photoElems = SETS[setName].photos.map(src => (
    <img key={src} src={src} />
  ));
  return (
    <div className="landing">
      <div className="cover">
        <h3 data-text={setName.replace(/-/g, ' ')}>
          {setName.replace(/-/g, ' ')}
        </h3>
        <img src={SETS[setName].cover} />
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
