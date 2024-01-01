export const usePrefersColorScheme = (mode: 'dark' | 'light'): boolean => {
  return window.matchMedia(`(prefers-color-scheme: ${mode})`).matches;
};
