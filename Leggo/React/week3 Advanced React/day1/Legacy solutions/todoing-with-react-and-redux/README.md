# Todoing with React and Redux

- Install react and react-redux
- Create store and the TODO reducer
  - store folder
    - reducers.js to create the reducer. Only to store the array of todos.
    - index.js to create the store
  - import store in `index.js`. Add some todos in the initial state. Log the `getState()`.
- Connect the App to the store
  - Provider
  - connect the TodoList. Log `this.props.dispatch`
  - Remove todos from state in App and don't pass them. `Cannot read property 'map' of undefined`.
  - Add defaultProps.
  - Get the todos from the store.
  ```
  const mapStateToProps = (state) => ({
    todos: state
  });
  ```
  - Everything is broken.
- Action + reducer to toggle completed.
  - `store/actions.js` action + constant
  - `store/reducers.js` switch case + import constant
  - App component, remove method that toggles completed
  - create a method on TodoList that toggles completed dispatching the action. Import action, dispatch it using `this.props.dispatch`
  ```
  handleToggleCompleted = (todoId) => {
    const action = toggleCompleted(todoId);
    this.props.dispatch(action);
  }
```
  - It should re-render
- Action + reducer to add a todo.
  - connect NewTodo component
  - import addTodo action and dispatch it
- Action + reducer to remove todo.
  - use TodoList connected component
- How to filter? Move filter to redux store. First Todos namespace in state.
  - 2 reducers. Todos + Filter. `combineReducers`
  - `store/reducers/todos.js`, `store/reducers/filter.js`, `store/reducers/index.js`
  - for now just move Todos without filter.
  ```
  import { combineReducers } from 'redux';

  import todos from './todos';

  export default combineReducers({
    todos,
    });
    ```
  ```
  const mapStateToProps = (state) => ({
    todos: state.todos
  });
  ```
- Filter reducer and namespace.
  - Add filter reducer. Initial state `all`. Remove state from App. Remove passed props to Filter
  - Create `store/reducers/filter.js`
  - connect Filter component. Map state to props.
  ```
  const mapStateToProps = (state) => ({
    selectedFilter: state.filter,
  });
  ```
  - can't change filter without errors, nor filtering
- Change without errors.
  - action + reducer to change selectedFilter
  - dispatch action in Filter
- Use the filter in TodoList `mapStateToProps`
  - return only filtered todos
  ```
  <div>
    <Header />
    <NewTodo />
    <Filter />
    <TodoList />
  </div>
  ```

- Add Ron Swanson Quote to Redux
- Add Category filtering to redux
