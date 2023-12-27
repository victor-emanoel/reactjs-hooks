interface IUsePrefersColorSchemeReturn {
  isDarkMode: boolean;
  isLightMode: boolean;
}

export const usePrefersColorScheme = (): IUsePrefersColorSchemeReturn => {
  return {
    isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
    isLightMode: window.matchMedia('(prefers-color-scheme: light)').matches,
  };
};
