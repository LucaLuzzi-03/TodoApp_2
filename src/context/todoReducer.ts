import { Todo, TodoState } from "../interfaces/interfaces";


type ActionsReducer = 
 | { type: '[TODO] Add todo', payload: Todo } 
 | { type: '[TODO] Toggle todo', payload: number }
 | { type: '[TODO] Remove todo', payload: number }


export const todoReducer = (state: TodoState, action: ActionsReducer): TodoState => {

    switch (action.type) {
        case '[TODO] Add todo':
            return { ...state, todos: [ ...state.todos, action.payload] };
        case '[TODO] Toggle todo':
            return {
                 ...state, 
                 todos: state.todos.map(({ ...todo }) => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                 }) 
            };
        case '[TODO] Remove todo':
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    }
}