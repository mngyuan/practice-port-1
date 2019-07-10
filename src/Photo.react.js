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
  'tokyo-dreaming-wip': {
    photos: importAll(
      require.context('./photos/tokyo-dreaming', false, /\.(png|jpe?g|svg)$/i),
    ),
    cover: TOKYO_DREAMING_COVER,
    description: (
      <div className="description">
        <div className="caption">
          <i>東京DREAMING</i>
          2019
        </div>
        <pre>
          <i>
            an incredible distance
            <br />
            and a latent yearning. all the fury of a second home
            <br />
            and no sound. there's a color here that seems to have been painted
            on my bones, born from my mother's blood.
            <br />
          </i>
        </pre>
        <p>
          I spent two months wandering Asia alone in 2019, meditating in the
          incredibly personal mental space a language and culture barrier
          creates. Crowded public spaces took on a dream-like quality, as if
          they existed solely for myself as places to both confront and embrace
          a surreal familiarity - the familiarity of a First Home, experienced
          through memories of color and spice and foreign tongues spoken in
          adopted homes. The East is at once immediate and inaccessible, a place
          imagined but never fathomed in its whole, its realities and
          complexities a sensory overload for those who have long walked the
          lonesome path of diaspora. Suddenly I found myself overwhelmed with a
          litany of colors, each one more resonant than the last, their
          understated vibrancies completing empty chords within me: The jade of
          faded ads, the soft filtered gold of the Asian sun, the screams of
          neon, the gaudy brilliance of bus sides and bus seats, the piercing
          blue of the shadows cast by salarymen and their briefcases, the
          eggshell white and cream of the lines drawn on the regal Toyota Crown.
        </p>
        <p>
          Here, to a backdrop of discarded cigarettes and backstreet alleyways
          encased in the dust of karaoke joints, I began to find a strange
          comraderie in the strangers around me. I walked among the old men
          growing roots into their seats at Pachinko places, one with their
          despondency; I browsed meat markets hurriedly and bickered at street
          stalls over the prices of a beautiful selection of discarded junk,
          sifting over piles of what were once cameras. I peeked guiltily inside
          smut magazines at FamilyMart, appalled and envious of the brazen
          shamelessness of the working men, always in suits, who joined me on
          breaks in their evening walks home. Each role I took on I feared to
          linger in, in case it might become my own. Yet, with each face came a
          brief comfort, a fleeting feeling of belonging, a touch of something
          old but new to me. If I opened my mouth foreign words might spill out
          and betray the hypocrisy of disguise, but if I held my tongue I could
          be one with something I had only started to realize I longed.
        </p>
        <p>
          In me I'd found something buried long ago. A nostalgia, a yearning, a
          forgotten breathing, something akin to the alienating the mixture of
          smells of ripened fruit and raw fish and dried herbs in a Chinese
          grocer; something the child in me rejected and the adult who grew
          around that child savors. It's the taste of returning to something I'd
          shut out long ago, the reek of childhood innocence and ignorance aged
          into a kind of acceptance. I'd found roots I'd put down long ago, and
          now I've come back to see that scorned tree bear fruit, to see that
          part of me blossom, voraciously, skyward, despite concrete, despite
          oceans and skies between, despite language barriers and distant family
          and a fear of feeling other; despite it all, here it was.
        </p>
        <p>
          My Chinese name is 李梦远, literally meaning dream far. I've read that
          in Chinese, dreams are frequently used as figures for the past,
          whereas in English they stand for hopes or wishes for the future. I
          like this ambiguity a lot - these days I'd like to think that my
          parents named me both as a vessel for their dreams as immigrants and
          Americans, and to remind me to look back, across years and oceans to a
          distant past, one of deep seated memories and identity. Likewise,
          DREAMING is named for that dual dream - the courage to look forward,
          to a grand future, and the patience to look within, towards a enduring
          past; the hubris to look to an Asia I might someday make my own, and
          the humility to look back to an Asia my parents left behind.
        </p>
      </div>
    ),
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
  const {set: setName} = props;
  const humanFriendlySetName = setName.replace(/-/g, ' ');
  const photoElems = SETS[setName].photos.map(src => (
    <img key={src} src={src} />
  ));
  const description = SETS[setName].description;
  return (
    <div className="landing photoset">
      <div className="cover">
        <h3 data-text={setName.replace(/-/g, ' ')}>
          {setName.replace(/-/g, ' ')}
        </h3>
        <img src={SETS[setName].cover} />
      </div>
      {description}
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
