import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeTodo, handleToggleCompleted } from '../../store/actions'
import './index.css';

class TodoListItem extends Component {

  handleRemoveTodo = () => {
    const action = removeTodo(this.props.todo.id)
    this.props.dispatch(action);
  }

  handleToggleCompleted = () => {
    const action = handleToggleCompleted(this.props.todo.id)
    this.props.dispatch(action);
  }

  render() {
    return (
      <li>
        <span
          onClick={this.handleToggleCompleted}
          className={this.props.todo.completed ? 'TodoListItem-completed' : ''}
        >
          {this.props.todo.content}
        </span>
        <button onClick={this.handleRemoveTodo}>X</button>
      </li>
    )
  }
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    content: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
}

export default connect()(TodoListItem);
