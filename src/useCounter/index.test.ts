import { act, renderHook } from '@testing-library/react';

import { useCounter } from '.';

describe('useCounter hook', () => {
  it('should increment count when increase is called', () => {
    const { result } = renderHook(() => useCounter({ initialCount: 10 }));

    act(() => result.current.increase());
    expect(result.current.count).toBe(11);
  });

  it('should decrement count when decrease is called', () => {
    const { result } = renderHook(() => useCounter({ initialCount: 10 }));

    act(() => result.current.decrease());
    expect(result.current.count).toBe(9);
  });

  it('should set count to initialCount when reset is called', () => {
    const { result } = renderHook(() => useCounter({ initialCount: 10 }));

    act(() => result.current.setCount(20));
    act(() => result.current.reset());
    expect(result.current.count).toBe(10);
  });
});
