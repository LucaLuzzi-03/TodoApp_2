import { useState, useContext } from 'react';

import { TodoContext } from '../../context/TodoContext';
import './TodoForm.css'


export const TodoForm = () => {

  const [inputValue, setInputValue] = useState<string>('');
  const { setNewTodo } = useContext( TodoContext );

  const onHnaldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const onResetForm = () => {
      setInputValue('');
  }

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime()+100,
      title: inputValue,
      completed: false
    }

    setNewTodo(newTodo);
    onResetForm();
  }

  return (
    <div className="form-container">
        <h3>What do you want to do?</h3>
        <form onSubmit={ onHandleSubmit } >    
            <input 
                type="text" 
                name="todo"
                id="todo"
                placeholder='Todo'
                value={inputValue}
                onChange={ (e) => onHnaldeChange(e) }
            />

            <button className="btn btn-create">Create</button>
        </form>
    </div>
  )
}
