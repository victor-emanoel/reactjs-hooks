/* eslint-disable @typescript-eslint/no-explicit-any */
interface IUseSessionStorageReturn {
  storage: {
    clear: () => void;
    get: <T>(key: string, fallback: T) => T;
    remove: (key: string) => void;
    set: (key: string, value: any) => void;
  };
}

export const useSessionStorage = (): IUseSessionStorageReturn => {
  const get = <T>(key: string, fallback: T): T => {
    try {
      const storedState: null | string = window.sessionStorage.getItem(key);

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
    window.sessionStorage.setItem(key, value);
  };

  const remove = (key: string): void => {
    window.sessionStorage.removeItem(key);
  };

  const clear = (): void => {
    window.sessionStorage.clear();
  };

  return { storage: { clear, get, remove, set } };
};
