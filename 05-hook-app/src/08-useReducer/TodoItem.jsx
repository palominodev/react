import React, { useContext } from 'react'
import { TodoContext } from './context/TodoContext'

export const TodoItem = ({todo}) => {

  const {handleToogleTodo, handleDeleteTodo} = useContext(TodoContext)
  
  return (
    <li 
        className='list-group-item d-flex justify-content-between'>
        <span className='align-self-center'>{todo.todo} {todo.done ? <span>💚</span> : <span>❤</span>}</span>
        
        <button 
            className='btn btn-outline-danger m-3'
            onClick={() => handleDeleteTodo(todo.id)}    
        >Borrar</button>
        <button 
          className="btn btn-outline-success m-3"
          onClick={() => handleToogleTodo(todo.id)}
        >Completar</button>
    </li>
  )
}
