import React from "react";
import ToDoListItem from "../ToDoListItem";

class ToDoList extends React.Component {
  state = {
    todoListItems: [
      { id: 0, todo: "Buy an new iPhone", completed: true },
      { id: 1, todo: "Buy an new Apple Watch Ultra", completed: false },
      { id: 2, todo: "Buy an new AirPods", completed: false },
    ],
  };

  handleClick = (id) => {
    console.log("handleClick", id);
    const copyTodoListItems = [...this.state.todoListItems];
    // copyTodoListItems.find(); as a possible alternative to the forEach
    copyTodoListItems.forEach((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    });

    this.setState({
      todoListItems: copyTodoListItems,
    });
  };

  render() {
    return (
      <>
      npx create-react-app react-basic
        <ul>
          {this.state.todoListItems.map((item) => {
            return (
              <ToDoListItem key={item.id} completed={item.completed} >
                <button onClick={() => this.handleClick(item.id)}>
                  Completed
                </button>
                {item.todo}
              </ToDoListItem>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ToDoList;
