import React from 'react';

interface IUseBooleanReturn {
  setFalse: () => void;
  setTrue: () => void;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: () => void;
  value: boolean;
}

export const useBoolean = (
  initialValue: boolean = false,
): IUseBooleanReturn => {
  const [value, setValue] = React.useState(initialValue);

  const toggle = React.useCallback(() => setValue(!value), [value]);
  const setFalse = React.useCallback(() => setValue(false), []);
  const setTrue = React.useCallback(() => setValue(true), []);

  return { setFalse, setTrue, setValue, toggle, value };
};
