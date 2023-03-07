import React from "react";
import "./styles.css";

class Header extends React.Component {
  complicatedTitle = () => {
    if (true) {
      return "True Title";
    } else {
      return "False Title";
    }
  };

  render() {
    const appTitle = "My ToDo App: ";
    const menuItems = ["Home", "ToDos", "Create Todo"];

    return (
      <header className="header">
        {appTitle}
        {menuItems
          .filter((menuItem) => menuItem.length > 4)
          .map((menuItem) => {
            return <span key={menuItem}>{menuItem} | </span>;
          })}
        {5 === 4 ? "Im true" : "Im false"}
        {this.complicatedTitle()}
      </header>
    );
  }
}

export default Header;
