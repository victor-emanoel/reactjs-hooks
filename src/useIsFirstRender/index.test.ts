import { renderHook } from '@testing-library/react';

import { useIsFirstRender } from '.';

describe('useIsFirstRender hook', () => {
  it('should return true on initial render', () => {
    const { result } = renderHook(() => useIsFirstRender());

    expect(result.current).toBe(true);
  });

  it('should return false on re-render', () => {
    const { rerender, result } = renderHook(() => useIsFirstRender());

    for (let i = 0; i <= 3; i++) {
      rerender();
      expect(result.current).toBe(false);
    }
  });
});
