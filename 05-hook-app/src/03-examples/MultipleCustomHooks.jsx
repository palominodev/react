import { useCounter, useFetch } from "../hooks"
import {Loading,Blockquote} from './'

const URL = 'https://jsonplaceholder.typicode.com/posts/'
export const MultipleCustomHooks = () => {
    const {counter,increment,decrement} = useCounter(1)

    const {data, isLoading, hasError} = useFetch(URL+counter)
    const {title, body} = !!data && data
  return (
    <>
        <h1>Breaking Bad Quote</h1>
        <hr />

        {
            isLoading ? <Loading />
                      : <Blockquote title={title} body={body} />
        }

       <button 
            className="btn btn-primary"
            onClick={()=> decrement()}   
            disabled={isLoading || counter === 1} 
        >
            Back Quote
       </button>
       <button 
            className="btn btn-primary"
            onClick={()=> increment()}   
            disabled={isLoading} 
        >
            Next Quote
       </button>
    </>
  )
}
