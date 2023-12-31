/* eslint-disable @typescript-eslint/no-explicit-any */
interface IUseSessionStorageReturn {
  clear: () => void;
  get: <T>(key: string, fallback: T) => T;
  includes: (key: string) => boolean;
  remove: (key: string) => void;
  set: (key: string, value: any) => void;
}

export const useSessionStorage = (): IUseSessionStorageReturn => {
  const get = <T>(key: string, fallback: T): T => {
    try {
      const storedState: null | string = window.sessionStorage.getItem(key);

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
    window.sessionStorage.setItem(key, JSON.stringify(value));
  };

  const remove = (key: string): void => {
    window.sessionStorage.removeItem(key);
  };

  const clear = (): void => {
    window.sessionStorage.clear();
  };

  const includes = (key: string): boolean => {
    return !!window.sessionStorage.getItem(key);
  };

  return { clear, get, includes, remove, set };
};
