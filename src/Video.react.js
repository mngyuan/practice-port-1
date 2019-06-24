// @flow

import * as React from 'react';
import Helmet from 'react-helmet';

const Video = () => (
  <React.Fragment>
    <Helmet title="video · Kevin Lee" />
    <div className="landing">
      <iframe
        src="https://player.vimeo.com/video/343994338"
        width="460"
        height="259"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      />
      <iframe
        src="https://player.vimeo.com/video/299145066"
        width="460"
        height="500"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      />
      <iframe
        src="https://player.vimeo.com/video/291332507"
        width="460"
        height="267"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      />
      <iframe
        src="https://player.vimeo.com/video/292051680"
        width="460"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      />
      <iframe
        src="https://player.vimeo.com/video/287009901"
        width="460"
        height="480"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      />
      <iframe
        src="https://player.vimeo.com/video/277013545"
        width="460"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      />
      <iframe
        src="https://player.vimeo.com/video/213032482"
        width="460"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      />
    </div>
  </React.Fragment>
);

export default Video;
