import { useLayoutEffect, useRef, useState } from "react"

export const Blockquote = ({title,body}) => {
  const paramRef = useRef()
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
    const {width,height} = paramRef.current.getBoundingClientRect() ;
    setBoxSize({width,height})

  }, [])



  return (
    <>
      <blockquote 
        className="blockquote text-end d-flex">
          <h3>{title}</h3>
          <p
            ref={paramRef} 
            className="mb-1">{body}</p>
      </blockquote>

      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}
