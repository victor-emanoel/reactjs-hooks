import { act, renderHook } from '@testing-library/react';

import { useBoolean } from '.';

describe('useBoolean hook', () => {
  it('should set value to false when setFalse is called', () => {
    const { result } = renderHook(() => useBoolean(true));

    act(() => result.current.setFalse());
    expect(result.current.value).toBe(false);
  });

  it('should set value to true when setTrue is called', () => {
    const { result } = renderHook(() => useBoolean(false));

    act(() => result.current.setTrue());
    expect(result.current.value).toBe(true);
  });

  it('should toggle value when toggle is called', () => {
    const { result } = renderHook(() => useBoolean(true));

    act(() => result.current.toggle());
    expect(result.current.value).toBe(false);
    act(() => result.current.toggle());
    expect(result.current.value).toBe(true);
  });

  it('should set setValue argument as value', () => {
    const { result } = renderHook(() => useBoolean());

    act(() => result.current.setValue(true));
    expect(result.current.value).toBe(true);
  });

  it('default initial value should be false', () => {
    const { result } = renderHook(() => useBoolean());

    expect(result.current.value).toBe(false);
  });
});
