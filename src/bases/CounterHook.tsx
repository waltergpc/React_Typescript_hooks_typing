import { useCounter } from '../hooks/useCounter'

interface CounterProps {
  initialValue?: number
}

const CounterHook = ({ initialValue = 0 }: CounterProps) => {
  const { counter, handleClick, counterElement } = useCounter({
    maxCount: 10,
  })

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

export default CounterHook
