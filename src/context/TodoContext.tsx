import { createContext } from "react";
import { Todo, TodoState } from "../interfaces/interfaces";


export type TodoContextProps = {
    todoState: TodoState;
    toggleTodo: (id: number) => void;
    setNewTodo: (newTodo: Todo) => void;
    deleteTodo: (id: number) => void;
}

export const TodoContext = createContext({} as TodoContextProps);