import React, { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  //same code can be written as below one..
  //state = { counter:0 }

  handleIncrement = () => {
    console.log("Button clicked");
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  render() {
    return (
      <>
        Counter: {this.state.counter}
        <button onClick={this.handleIncrement}>Increase Value</button>
        <button onClick={this.handleDecrement}>Decrease Value</button>
      </>
    );
  }
}

export default Counter;
