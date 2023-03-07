import { useDispatch } from 'react-redux';

import { removeTodo, handleToggleCompleted } from '../../store/actions';
import './index.scss';

const TodoListItem = (props) => {
  const dispatch = useDispatch();
  const todoRemoveHandler = () => {
    const action = removeTodo(props.todo.id);
    dispatch(action);
  };
  const todoCompleteHandler = () => {
    const action = handleToggleCompleted(props.todo.id);
    dispatch(action);
  };

  return (
    <li className={`Todo ${props.todo.completed ? 'Todo-completed' : ''}`}>
      <span onClick={todoCompleteHandler}>{props.todo.content}</span>
      <button onClick={todoRemoveHandler}>X</button>
    </li>
  );
};

export default TodoListItem;
