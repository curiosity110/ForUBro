import Filter from './components/Filter';
import Quotes from './containers/Quotes';
import NewTodo from './containers/NewTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <Quotes />
      <div className='Todo-container'>
        <h1>your todos for today</h1>
        <NewTodo />
        <Filter />
        <TodoList />
      </div>
    </>
  );
}

export default App;
