import React from "react";
import "./styles.css";

class Footer extends React.Component {
  helloWorld = "Hello World";

  render() {
    const helloWorld = "Hello Again";
    this.helloWorld = "Changed Hello World";

    return (
      <footer className="footer">
        {this.props.copyright} {this.helloWorld} {helloWorld} {this.props.children}
      </footer>
    );
  }
}

export default Footer;
