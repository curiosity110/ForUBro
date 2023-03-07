import React from "react";
import "./styles.css";

class ToDoListItem extends React.Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        {this.props.children}
      </li>
    );
  }
}

export default ToDoListItem;
