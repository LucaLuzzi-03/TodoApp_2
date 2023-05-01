import { useReducer } from "react"

import { TodoContext } from "./TodoContext"
import { todoReducer } from "./todoReducer"
import { Todo, TodoState } from '../interfaces/interfaces';


const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [],
    completed: 0,
    pending: 2
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children}: Props) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const toggleTodo = ( id: number ) => {
        dispatch({ type: "[TODO] Toggle todo", payload: id });
    }

    const setNewTodo = ( newTodo: Todo ) => {
        dispatch({
            type: "[TODO] Add todo",
            payload: newTodo
        });
    }

    const deleteTodo = ( id: number ) => {
        dispatch({
            type: "[TODO] Remove todo",
            payload: id
        });
    }

  return (
    <TodoContext.Provider value={{ todoState, toggleTodo, setNewTodo, deleteTodo }}>
        { children }
    </TodoContext.Provider>
  )
}
