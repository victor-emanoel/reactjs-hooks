import React from 'react';

export const useOnClickOutside = <T extends Element>(
  elementRef: React.MutableRefObject<T | null>,
  fn: () => void,
): void => {
  React.useEffect(() => {
    const handleClick = (event: Event): void => {
      if (
        event.target instanceof Element &&
        !elementRef.current?.contains(event.target)
      ) {
        fn();
      }
    };

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, [fn, elementRef]);
};
