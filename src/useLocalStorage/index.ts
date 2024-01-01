/* eslint-disable @typescript-eslint/no-explicit-any */
interface IUseLocalStorageReturn {
  clear: () => void;
  get: <T>(key: string, fallback: T) => T;
  includes: (key: string) => boolean;
  remove: (key: string) => void;
  set: (key: string, value: any) => void;
}

export const useLocalStorage = (): IUseLocalStorageReturn => {
  const get = <T>(key: string, fallback: T): T => {
    try {
      const storedState: null | string = window.localStorage.getItem(key);

      if (storedState) {
        return JSON.parse(storedState);
      } else {
        return fallback;
      }
    } catch (error: unknown) {
      console.error(error);
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

  const includes = (key: string): boolean => {
    return !!window.localStorage.getItem(key);
  };

  return { clear, get, includes, remove, set };
};
