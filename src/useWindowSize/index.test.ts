import { act, renderHook } from '@testing-library/react';

import { useWindowSize } from '.';

describe('useWindowSize hook', () => {
  it('value of height and width should be of type number', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(typeof result.current.height).toBe('number');
    expect(typeof result.current.width).toBe('number');
  });

  it('should return height and width on initial render', async () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.height).toBe(window.innerHeight);
    expect(result.current.width).toBe(window.innerWidth);
  });

  it('should return height and width on resize', async () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      window.innerHeight = 700;
      window.innerWidth = 400;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.height).toBe(700);
    expect(result.current.width).toBe(400);
  });
});
