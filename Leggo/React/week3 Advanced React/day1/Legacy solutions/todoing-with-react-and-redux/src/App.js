import React, { Component } from 'react';

import Filter from './components/Filter';
import Header from './containers/Header'
import NewTodo from './containers/NewTodo';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NewTodo />
        <Filter />
        <TodoList />
      </div>
    );
  }
}

export default App;
