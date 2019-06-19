// @flow
import React, {useEffect, useRef} from 'react';
import {withRouter} from 'react-router-dom';

const ScrollableArea = ({children, location: {pathname}, resetOnPage}) => {
  const scrollableElem = useRef(null);
  useEffect(
    () => {
      resetOnPage ? (scrollableElem.current.scrollTop = 0) : null;
    },
    [pathname],
  );

  return (
    <div ref={scrollableElem} className="content-scrollable">
      {children}
    </div>
  );
};

export default withRouter(ScrollableArea);
