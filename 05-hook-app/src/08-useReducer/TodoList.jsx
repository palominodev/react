import { useContext } from "react"
import { TodoContext } from "./context/TodoContext"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {

  const {todos} = useContext(TodoContext)  

  return (
    <ul className='list-group'>
        {
            todos.map(todo => (
                <TodoItem 
                  // onToogleTodo={onToogleTodo} 
                  // onDeleteTodo={onDeleteTodo} 
                  key={todo.id} 
                  todo={todo} />
            ))
        }
    </ul>
  )
}
