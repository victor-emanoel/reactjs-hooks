import React from 'react';

interface IUseOnInteractOutsideProps {
  elementRef: React.MutableRefObject<Element | null | undefined>;
  events?: (keyof WindowEventMap)[];
  fn: () => void;
}

export const useOnInteractOutside = ({
  elementRef,
  events = ['click'],
  fn,
}: IUseOnInteractOutsideProps): void => {
  React.useEffect(() => {
    const handleEvent = (event: Event): void => {
      if (
        event.target instanceof Element &&
        elementRef.current &&
        !elementRef.current.contains(event.target)
      ) {
        fn();
      }
    };

    events.forEach((event) => window.addEventListener(event, handleEvent));

    return () =>
      events.forEach((event) => window.removeEventListener(event, handleEvent));
  }, [fn, events, elementRef]);
};
