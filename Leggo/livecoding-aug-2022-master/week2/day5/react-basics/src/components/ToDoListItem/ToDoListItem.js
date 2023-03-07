import React from "react";
import "./styles.css";

class ToDoListItem extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <li className={item.completed ? "completed" : ""}>
        <button onClick={() => this.props.handleClick(item.id)}>Completed</button>
        {item.todo}
      </li>
    );
  }
}

export default ToDoListItem;
