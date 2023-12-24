import React from 'react';

interface IUseCounterReturn {
  count: number;
  decrease: () => void;
  increase: () => void;
  reset: () => void;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface IUseCounterProps {
  initialCount?: number;
  x?: number;
}

export const useCounter = ({
  initialCount = 0,
  x = 1,
}: IUseCounterProps = {}): IUseCounterReturn => {
  const [count, setCount] = React.useState<number>(initialCount);

  const decrease = React.useCallback((): void => {
    setCount((prevCount) => prevCount - x);
  }, [x]);

  const increase = React.useCallback((): void => {
    setCount((prevCount) => prevCount + x);
  }, [x]);

  const reset = React.useCallback((): void => {
    setCount(initialCount);
  }, [initialCount]);

  return {
    count,
    decrease,
    increase,
    reset,
    setCount,
  };
};
