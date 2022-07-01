import Counter from './bases/Counter'
import CounterBy from './bases/CounterBy'
import CounterEffect from './bases/CounterEffect'

function App() {
  return (
    <>
      <h1>React</h1>
      <Counter initialValue={15} />
      <CounterBy initialValue={5} />
      <CounterEffect initialValue={5} />
      <CounterEffect initialValue={5} />
    </>
  )
}

export default App
