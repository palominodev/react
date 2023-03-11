import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
    
    const {increment,decrement,reset,counter} = useCounter(10)

  return (
    <>
        <h1>Counter: {counter}</h1>

        <hr />

        <button 
            className="btn btn-primary"
            onClick={() => increment(1)}
            >+1</button>
        <button 
            className="btn btn-warning"
            onClick={() => reset(100)}
            >Reset</button>
        <button 
            className="btn btn-success"
            onClick={() => decrement(1)}
            >-1</button>
    </>
  )
}
