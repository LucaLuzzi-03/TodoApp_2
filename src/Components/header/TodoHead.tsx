import './TodoHead.css'
import { useTodos } from '../../hooks/useTodos';


export const TodoHead = () => {

  const { todos } = useTodos();

  return (
    <div className="container">
      <h1>Todo App</h1>
      <p><small>(Todos: {todos.length}, Pendings: {todos.filter(todo => !todo.completed).length})</small></p>
    </div>
  )
}
