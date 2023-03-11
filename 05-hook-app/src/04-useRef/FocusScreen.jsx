import React, { useRef } from 'react'

export const FocusScreen = () => {
    
    const inputRef = useRef()
    
    
    const onFocus = () => {
        const {current} = inputRef
        current.select()
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={inputRef}
            type="text"
            placeholder='Ingrese nombre' 
            className='form form-control'   
            onFocus={() => console.log('holaaaa')}
        />

        <button 
            onClick={onFocus}
            className='btn btn-primary mt-2'>
            Set focus
        </button>
    </>
  )
}
