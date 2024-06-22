// having componentdidmount run their effect only once
import React, { Component } from "react";
class ClassMouse extends Component {
  state = {
    x: 0,
    y: 0,
  };
  logMousePosition = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };
  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }
  componentWillUnmount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }
  render() {
    return (
      <>
        <h5>
          the x:{this.state.x} and the y: {this.state.y}
        </h5>
      </>
    );
  }
}

export default ClassMouse;
