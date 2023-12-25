import React from 'react';

export const useDebounce = <T>(value: T, delay: number = 1000): T => {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout((): void => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, value]);

  return debouncedValue;
};
