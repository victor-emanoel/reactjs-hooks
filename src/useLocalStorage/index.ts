/* eslint-disable @typescript-eslint/no-explicit-any */
interface IUseLocalStorageReturn {
  storage: {
    clear: () => void;
    get: <T>(key: string, fallback: T) => T;
    remove: (key: string) => void;
    set: (key: string, value: any) => void;
  };
}

export const useLocalStorage = (): IUseLocalStorageReturn => {
  const get = <T>(key: string, fallback: T): T => {
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
  };

  const set = (key: string, value: any): void => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const remove = (key: string): void => {
    window.localStorage.removeItem(key);
  };

  const clear = (): void => {
    window.localStorage.clear();
  };

  return { storage: { clear, get, remove, set } };
};
