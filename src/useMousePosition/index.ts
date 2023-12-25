import React from 'react';

interface IMousePositionProps {
  x: null | number;
  y: null | number;
}

export const useMousePosition = (): IMousePositionProps => {
  const [position, setPosition] = React.useState<IMousePositionProps>({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    const handleMouseMove = (event: Event): void => {
      if (event instanceof MouseEvent) {
        setPosition({
          x: event.clientX,
          y: event.clientY,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { ...position };
};
