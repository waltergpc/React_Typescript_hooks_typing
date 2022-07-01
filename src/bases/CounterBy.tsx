import { useState } from 'react'

interface CounterProps {
  initialValue?: number
}

interface CounterState {
  counter: number
  clicks: number
}

const CounterBy = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  })

  const { counter: count, clicks } = counter

  const handleClick = (e: React.SyntheticEvent, value: number) => {
    console.log(e)
    console.log(value)
    setCounter(({ clicks, counter }) => ({
      counter: counter + value,
      clicks: clicks + 1,
    }))
  }

  return (
    <>
      <h1>CounterBy: {count}</h1>
      <h1>Clicks: {clicks}</h1>
      <button type='button' onClick={(e) => handleClick(e, 1)}>
        +1
      </button>
      <button type='button' onClick={(e) => handleClick(e, 5)}>
        +5
      </button>
    </>
  )
}

export default CounterBy
