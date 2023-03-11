import React, { useContext } from 'react'
import { useForm } from '../hooks'
import { TodoContext } from './context/TodoContext'

export const TodoForm = () => {

    const { handleNewTodo } = useContext(TodoContext)

    const {todo,onInputChange,onReset} = useForm({
        todo: ''
    })

    const onSubmitTodo = (e) => {
        e.preventDefault()
        if(todo.trim() === '') return
        handleNewTodo({
            id: new Date().getTime(),
            todo,
            done: false
        })
        onReset()
    }


  return (
    <>
        <form onSubmit={onSubmitTodo}>
            <input 
                type="text" 
                name="todo"
                value={todo}
                onChange={onInputChange}
                id="text"
                placeholder="¿Que hay que hacer?"
                className="form-control" />
            <button 
                type="submit"
                className='btn btn-outline-primary mt-2'
            >
                Agregar {todo}
            </button>
        </form>
    </>
  )
}
