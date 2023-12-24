import React from 'react';

export const usePrevious = <T>(value: T): T | undefined => {
  const ref = React.useRef<T | undefined>(undefined);

  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
