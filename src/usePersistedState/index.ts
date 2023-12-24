import React from 'react';

export const usePersistedState = <T>(
  key: string,
  fallback: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = React.useState<T>((): T => {
    try {
      const storedState: null | string = window.localStorage.getItem(key);

      if (storedState) {
        return JSON.parse(storedState);
      } else {
        if (typeof fallback === 'function') {
          return fallback();
        } else {
          return fallback;
        }
      }
    } catch (error: unknown) {
      return fallback;
    }
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state, fallback]);

  return [state, setState];
};
