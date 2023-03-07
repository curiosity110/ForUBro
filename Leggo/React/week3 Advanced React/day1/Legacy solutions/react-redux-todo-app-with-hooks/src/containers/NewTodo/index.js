import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/actions';
import './index.scss';

function NewTodo() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    // creates the dispatch action into a variable for easy reading
    const action = addTodo(newTodo);
    dispatch(action);
    // cleanes the local state
    setNewTodo('');
  };

  const handleNewTodoChange = (e) => {
    const newTodo = e.currentTarget.value;
    // sets the state with the input
    setNewTodo(newTodo);
  };

  return (
    <div className='NewTodo'>
      <form onSubmit={handleAddTodo}>
        <input
          type='text'
          placeholder='Your next todo'
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <input type='submit' value={'Add'} />
      </form>
    </div>
  );
}

export default NewTodo;
