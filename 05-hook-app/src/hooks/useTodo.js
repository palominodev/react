import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

export const useTodo = () => {
    const initialState = []

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }


    const [todos, dispatch] = useReducer(todoReducer, initialState,init)


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [])
    }, [todos])
    

    
    const handleNewTodo = (todo) => {
        dispatch({
            type: 'add todo',
            todo
        })
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'delete todo',
            id,
        })
    }

    const handleToogleTodo = (id) => {
        dispatch({
            type: 'toogle todo',
            id
        })
    }

    const todoDoneCounter = todos.filter(todo => !todo.done).length
    const allTodos = todos.length
    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToogleTodo,
        todoDoneCounter,
        allTodos
    }
}
