import React from 'react';

export const useRenderCount = (): number => {
  const count = React.useRef<number>(0);

  React.useEffect(() => {
    count.current += 1;
  });

  return count.current;
};
