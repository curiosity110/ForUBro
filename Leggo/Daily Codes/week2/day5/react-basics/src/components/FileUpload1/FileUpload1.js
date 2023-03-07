import React from "react";

class FileUpload1 extends React.Component {
  state = {
    image1: undefined,
    image2: undefined,
  };

  handleChange = (event) => {
    event.preventDefault();
    const image1 = event.target.files[0];
    var image2 = undefined;
    if(event.target.files.length > 1) {
        image2 = event.target.files[1];
    }

    this.setState({
        image1: URL.createObjectURL(image1),
        image2: image2 ? URL.createObjectURL(image2) : undefined
    })
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="upload">Upload Image</label>
          <input id="upload" multiple type="file" onChange={this.handleChange} />
        </form>
        <img width="500" src={this.state.image1} />
        <img width="500" src={this.state.image2} />
      </>
    );
  }
}

export default FileUpload1;
