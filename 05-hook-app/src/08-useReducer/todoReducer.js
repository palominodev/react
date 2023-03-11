
export const todoReducer = (initalState, action) => {
    switch (action.type) {
        case 'add todo':
            return [...initalState, action.todo]
        case 'delete todo':
            const deleteTodo = initalState.filter(todo => todo.id!== action.id)
            return deleteTodo
        case 'toogle todo':
            const toogleTodo = initalState.map( todo => {
                if(todo.id === action.id){
                    todo.done =!todo.done
                }
                return todo
            })
            return toogleTodo
        default:
            throw new Error(`El método ${action.type} no existe`)
    }

}
