import React from 'react';

export const createContext = <T>(
  errorMessage: string,
): [React.Context<T | null>, () => T] => {
  const Context = React.createContext<T | null>(null);

  const useContext = (): T => {
    const contextValue = React.useContext(Context);

    if (contextValue) {
      return contextValue;
    } else {
      throw new Error(errorMessage);
    }
  };

  return [Context, useContext];
};
