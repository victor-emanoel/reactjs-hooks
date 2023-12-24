import React from 'react';

interface IWindowSizeProps {
  height: number;
  width: number;
}

export const useWindowSize = (): IWindowSizeProps => {
  const [windowSize, setWindowSize] = React.useState<IWindowSizeProps>({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    const handleResize = (): void => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  return windowSize;
};
