type TVisibility = 'auto' | 'hidden';
type TAxis = 'x' | 'x-y' | 'y';

export const useLockBodyScroll = (
  lock: boolean = false,
  axis: TAxis = 'x-y',
): void => {
  const overflowVisibility: TVisibility = lock ? 'hidden' : 'auto';
  const { style } = document.body;

  if (axis === 'x-y') {
    style.overflow = overflowVisibility;
  } else if (axis === 'x') {
    style.overflowX = overflowVisibility;
  } else if (axis === 'y') {
    style.overflowY = overflowVisibility;
  }
};
