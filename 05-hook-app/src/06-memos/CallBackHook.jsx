import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback(
        (counter) => {
            setCounter((value) => value + counter)
        },
        [],
    )
    return (
        <>
        <h1>useCallback Hook: {counter}</h1>
        <hr />
        <ShowIncrement increment={incrementFather} />

        
    </>
  )
}
