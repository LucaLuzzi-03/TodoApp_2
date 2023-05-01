import { TodoForm } from "./Components/form/TodoForm"
import { TodoHead } from "./Components/header/TodoHead"
import { TodoList } from "./Components/todos/TodoList"
import { TodoProvider } from "./context/TodoProvider"

export const TodoApp = () => {
  return (
    <TodoProvider>
        {/* Header */}
        <TodoHead />

        {/* Form */}
        <TodoForm />

        {/* Todos */}
        <TodoList />
    </TodoProvider>
  )
}
