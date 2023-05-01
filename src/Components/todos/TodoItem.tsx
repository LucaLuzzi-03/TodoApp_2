import { Todo } from '../../interfaces/interfaces';
import './TodoItem.css';
import { useTodos } from '../../hooks/useTodos';


interface Props {
  todo: Todo
}

export const TodoItem = ({todo}: Props) => {

  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <div className={`listItem ${todo.completed ? 'completed' : ''}`}>
      <p onClick={ () => toggleTodo( todo.id ) }>{ todo.title }</p>
      <button onClick={ () => deleteTodo( todo.id ) } className='btn btn-delete'>
        <i className="bi bi-trash3"></i>
      </button>
    </div>
  )
}
