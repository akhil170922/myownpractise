import React from "react";
import { Component } from "react";
class ClassEvent extends Component {
  handleClick = () => {
    console.log("Class Event buttonClicked");
  };
  render() {
    return (
      <>
        Class based event handling
        <button onClick={this.handleClick}>Click Here Class</button>
      </>
    );
  }
}

export default ClassEvent;
