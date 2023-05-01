import { TodoItem } from "./TodoItem";
import './TodoList.css';
import { useTodos } from "../../hooks/useTodos";


export const TodoList = () => {

  const { todos } = useTodos();

  return (
    <ul className="listContainer">
      {
        todos.map((todo) => (<TodoItem key={ todo.id } todo={ todo } />))
      }
    </ul>
  )
}
