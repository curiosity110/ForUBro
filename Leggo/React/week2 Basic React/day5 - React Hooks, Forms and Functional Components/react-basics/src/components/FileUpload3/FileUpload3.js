import React from "react";

class FileUpload3 extends React.Component {
  state = {
    image: undefined,
  };

  imageRef = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const image = this.imageRef.current.files[0];
    console.log("imageRef", image);
    this.setState({
        image: URL.createObjectURL(image)
    })

  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Upload an Image</label>
          <input ref={this.imageRef} name="image" type="file" />
          <button type="submit">Submit</button>
        </form>
        <img width="400" src={this.state.image} />
      </>
    );
  }
}

export default FileUpload3;
