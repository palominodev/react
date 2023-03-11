import { useState } from "react"

export const useCounter = (value=0) => {

    const [counter, setCounter] = useState(value)

    const increment = (count=1) => {
        setCounter(counter + count)
    }
    const decrement = (count=1) => {
        setCounter(counter - count)
    }
    const reset = (count=0) => {
        setCounter(count)
    }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}
