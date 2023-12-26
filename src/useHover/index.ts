import React from 'react';

interface IUseHoverReturn {
  isHover: boolean;
}

export const useHover = (
  elementRef: React.MutableRefObject<Element | null>,
): IUseHoverReturn => {
  const [isHover, setIsHover] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleMouseMove = (event: Event): void => {
      if (event.target instanceof Element && elementRef.current) {
        if (elementRef.current.contains(event.target)) {
          if (!isHover) {
            setIsHover(true);
          }
        } else {
          if (isHover) {
            setIsHover(false);
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [elementRef, isHover]);

  return { isHover };
};
