import { useInterval } from '@/hooks/useInterval'

import { renderHook } from '@testing-library/react-hooks'

let callback

beforeEach(() => {
  callback = jest.fn()
})

beforeAll(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  callback.mockRestore()
  jest.clearAllTimers()
})

afterAll(() => {
  jest.useRealTimers()
})

describe('useInterval hook', () => {
  it('should init hook with custom delay', () => {
    const { result } = renderHook(() => useInterval(callback, 5000))

    expect(result.current).toBeUndefined()
    expect(setInterval).toHaveBeenCalledTimes(1)
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 5000)
  })

  it('should repeatedly calls provided callback with a fixed time delay between each call', () => {
    renderHook(() => useInterval(callback, 200))
    expect(callback).not.toHaveBeenCalled()

    // fast-forward time until 1s before it should be executed
    jest.advanceTimersByTime(199)
    expect(callback).not.toHaveBeenCalled()

    // fast-forward until 1st call should be executed
    jest.advanceTimersByTime(1)
    expect(callback).toHaveBeenCalledTimes(1)

    // fast-forward until next timer should be executed
    jest.advanceTimersToNextTimer()
    expect(callback).toHaveBeenCalledTimes(2)

    // fast-forward until 3 more timers should be executed
    jest.advanceTimersToNextTimer(3)
    expect(callback).toHaveBeenCalledTimes(5)
  })
})
