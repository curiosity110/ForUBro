import { useDispatch } from 'react-redux';
import { remove_todo, toggle_completed } from '../../store/slices/todos';
import './index.scss';

const TodoListItem = (props) => {
  const dispatch = useDispatch();
  const todoRemoveHandler = () => {
    dispatch(remove_todo(props.todo.id));
  };
  const todoCompleteHandler = () => {
    dispatch(toggle_completed(props.todo.id));
  };

  return (
    <li className={`Todo ${props.todo.completed ? 'Todo-completed' : ''}`}>
      <span onClick={todoCompleteHandler}>{props.todo.content}</span>
      <button onClick={todoRemoveHandler}>X</button>
    </li>
  );
};

export default TodoListItem;
