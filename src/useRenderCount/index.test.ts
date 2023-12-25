import { renderHook } from '@testing-library/react';

import { useRenderCount } from '.';

describe('useRenderCount hook', () => {
  it('should return 0 on initial render', () => {
    const { result } = renderHook(() => useRenderCount());

    expect(result.current).toBe(0);
  });

  it('count should be incremented whenever a new render occurs', () => {
    const { rerender, result } = renderHook(() => useRenderCount());

    rerender();
    expect(result.current).toBe(1);
    rerender();
    expect(result.current).toBe(2);
  });
});
