import { useRef, useEffect } from 'react'

/**
 *
 * @param callback () => void
 * @param delay: number
 *
 * sample reusable setInterval hook given delay time and use callback function to handle your logic.
 */
export function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef(null)

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      savedCallback?.current()
    }

    const id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}
