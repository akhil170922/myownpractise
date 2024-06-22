import React, { Component } from "react";
class UpdateTextState extends Component {
  state = {
    text: "Hello Iam Dell",
  };

  handleTextChange=()=>{
    this.setState({
        text:"Hi Iam Akhil"
    })
  }
  revertChanges=()=>{
    this.setState({
      text: "Hello Iam Dell",
    });
  }
  render() {
    return <>
    <h1>{this.state.text}</h1>
    <button onClick={this.handleTextChange}>Change Text</button>
    <button onClick={this.revertChanges}>Revert</button>
    </>;
  }
}

export default UpdateTextState;
