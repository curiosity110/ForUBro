import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../store/actions';
import './index.css';

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    }
  }

  handleAddTodo = () => {
    // creates the dispatch action into a variable for easy reading
    const action = addTodo(this.state.newTodo)
    this.props.dispatch(action);
    // cleanes the local state
    this.setState({ newTodo: '' });
  }

  handleNewTodoChange = (e) => {
    const newTodo = e.currentTarget.value;
    // sets the state with the input
    this.setState({ newTodo });
  }

  render() {
    return (
      <div className="NewTodo">
        <input
          type="text"
          placeholder="Add todo..."
          value={this.state.newTodo}
          onChange={this.handleNewTodoChange}
        />
        <button onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    )
  }
}

export default connect()(NewTodo);
