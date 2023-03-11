import { useContext } from 'react'
import { useTodo } from '../hooks/useTodo'
import { TodoContext } from './context/TodoContext'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
 export const TodoApp = () => {

    const {allTodos,todoDoneCounter} = useContext(TodoContext)
    return (
        <>
        <h1>TodoApp ({allTodos}) <small>Pendiantes: {todoDoneCounter}</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">


                <TodoList/>


            </div>
            <div className="col-5">
                <h4>Agregar Todo</h4>
                <hr />
                <TodoForm/>
                
            </div>
        </div>
    </>
  )
}