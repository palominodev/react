import { useState } from 'react'

export const CounterApp = ({value}) => {
    console.log('render')
    const [count, setCount] = useState(value)
    const handleAdd = () => {
        setCount((count) => count + 1)
    }
    const handleSubtract = () => {
        setCount((count) => count - 1)
    }
    const handleReset = () => {
        setCount(value)
    }

  return (
    <>
        <h1>Counter APP</h1>
        <h2>{count}</h2>

        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleReset}>Reset</button>
    </>
  )
}
