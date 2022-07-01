import { useState, useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState(5)
  const counterElement = useRef<HTMLHeadingElement>(null)
  const timeLine = gsap.timeline()

  const handleClick = () => {
    if (counter >= 10) return
    setCounter((prev) => Math.min(prev + 1, maxCount))
  }

  useLayoutEffect(() => {
    if (!counterElement.current) return

    timeLine
      .to(counterElement.current, {
        y: -10,
        duration: 0.2,
        ease: 'ease.out',
      })
      .to(counterElement.current, {
        y: 0,
        duration: 1,
        ease: 'bounce.out',
      })
  }, [timeLine, counter])

  return { counter, handleClick, counterElement }
}
