import { useTodo } from "../../hooks/useTodo"
import { TodoContext } from "./TodoContext"

export const TodoProvider = ({children}) => {

    const {
        handleDeleteTodo,
        handleNewTodo,
        handleToogleTodo,
        todoDoneCounter,
        allTodos,
        todos
    } = useTodo()


  return (
    <TodoContext.Provider value={{allTodos,todos,todoDoneCounter,handleNewTodo,handleDeleteTodo,handleToogleTodo}}>
        {children}
    </TodoContext.Provider>
  )
}
