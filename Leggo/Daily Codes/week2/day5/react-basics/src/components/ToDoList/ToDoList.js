import React from "react";
import ToDoListItem from "../ToDoListItem";

class ToDoList extends React.Component {
  state = {
    todoListItems: [
      { id: 0, todo: "Buy an new iPhone", completed: true },
      { id: 1, todo: "Buy an new Apple Watch Ultra", completed: false },
      { id: 2, todo: "Buy an new AirPods", completed: false },
    ],
    newTodo: ''
  };

  handleClick(id) {
    console.log("handleClick", id);
    const copyTodoListItems = [...this.state.todoListItems];
    copyTodoListItems.forEach((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    });

    this.setState({
      todoListItems: copyTodoListItems,
    });
  };

  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({
      newTodo: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todoListItems: [
        ...this.state.todoListItems, // for copying the existing state
        {
          id: this.state.todoListItems.length,
          todo: this.state.newTodo,
          completed: false
        }
      ],
      newTodo: ''
    });

  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="newTodo">New Todo</label>
        <input value={this.state.newTodo} onChange={this.handleChange} name="newTodo" id="newTodo" />
        <button type="submit">Create Todo</button>
      </form>
        <ul>
          {this.state.todoListItems.map((item) => {
            return (
              <ToDoListItem key={item.id} item={item} handleClick={this.handleClick.bind(this)} />
            );
          })}
        </ul>
      </>
    );
  }
}

export default ToDoList;
