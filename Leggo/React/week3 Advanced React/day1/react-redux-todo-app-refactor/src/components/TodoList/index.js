import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import TodoListItem from '../TodoListItem';
import './index.scss';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.list);
  const filter = useSelector((state) => state.filter.selected);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterTodos = () => {
    filter === 'completed' &&
      setFilteredTodos(todos.filter((todo) => todo.completed));

    filter === 'uncompleted' &&
      setFilteredTodos(todos.filter((todo) => !todo.completed));
  };

  useEffect(() => {
    setFilteredTodos(todos);
    filterTodos();
  }, [filter, todos]);
  return (
    <div className='TodoList'>
      <ul>
        {filteredTodos.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
