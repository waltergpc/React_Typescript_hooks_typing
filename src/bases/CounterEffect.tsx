import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface CounterProps {
  initialValue?: number
}

const CounterEffect = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState(initialValue)
  const counterElement = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (counter < 10) return

    console.log('%cSe llego al valor máximo', 'color: #91eb91')
    const timeLine = gsap.timeline()
    timeLine.to(counterElement.current, {
      y: -10,
      duration: 0.2,
      ease: 'ease.out',
    })
    timeLine.to(counterElement.current, {
      y: 0,
      duration: 1,
      ease: 'bounce.out',
    })
  }, [counter])

  const handleClick = () => {
    if (counter >= 10) return
    setCounter((prevValue: number) => prevValue + 1)
  }

  return (
    <>
      <h1>CounterEffect</h1>
      <h2 ref={counterElement}> {counter}</h2>
      <button type='button' onClick={handleClick}>
        +1
      </button>
    </>
  )
}

export default CounterEffect
