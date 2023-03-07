import React from "react";

class Form extends React.Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    event.preventDefault()
    console.log(event)
    this.setState({
        name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name)
    this.setState({
        name: ''
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input value={this.state.name} onChange={this.handleChange} name="name" id="name" />
          <button type="submit">Save Name</button>
        </form>
      </>
    );
  }
}

export default Form;
