import { renderHook } from '@testing-library/react';

import { usePrevious } from '.';

describe('usePrevious hook', () => {
  it('should return undefined on initial render', () => {
    const { result } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 0 },
    });

    expect(result.current).toBeUndefined();
  });

  it('should always return previous value after each update', () => {
    const { rerender, result } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 0 },
    });

    rerender({ value: 2 });
    expect(result.current).toBe(0);

    rerender({ value: 4 });
    expect(result.current).toBe(2);

    rerender({ value: 6 });
    expect(result.current).toBe(4);
  });
});
