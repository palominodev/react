import { useState } from "react"

export const AddCategory = ({add}) => {

    const [inputValue, setInputValue] = useState('')


    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length <= 1) return;
        add(inputValue)
        setInputValue('')
    }
  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
