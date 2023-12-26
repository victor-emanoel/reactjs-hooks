import React from 'react';

export const useIsFirstRender = (): boolean => {
  const ref = React.useRef<boolean>(true);

  if (ref.current) {
    ref.current = false;

    return true;
  } else {
    return false;
  }
};
