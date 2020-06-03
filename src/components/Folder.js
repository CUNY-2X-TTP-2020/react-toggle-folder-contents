import React, { Component } from "react";

class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: this.props.visible };
  }

  folderToggle = () => {
    if (this.state.visible == true) {
      this.setState({ visible: false });
    } else {
      this.setState({ visible: true });
    }
  };

  folderVisible = () => {
    if (this.state.visible == true) {
      return (
        <ul>
          <li>File 1</li>
          <li>File 2</li>
          <li>File 3</li>
        </ul>
      );
    }
  };

  render() {
    return (
      <>
        <h1>Home</h1>
        <button visible={this.state.visible} onClick={this.folderToggle}>
          Toggle
        </button>
        {this.folderVisible()}
      </>
    );
  }
}

export default Folder;
