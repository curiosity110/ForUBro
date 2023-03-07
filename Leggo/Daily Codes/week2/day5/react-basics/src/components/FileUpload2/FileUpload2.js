import React from "react";

class FileUpload2 extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        console.log("image", formData.get("image"))
    }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Upload an Image</label>
          <input name="image" type="file" />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default FileUpload2;
