//now we need to update the mount value...
//this can be done using use effect also
//just compare both

import React, { Component } from "react";

export default class ClassCounterOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }
  render() {
    return (
      <div>
        count value: {this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increment
        </button>
      </div>
    );
  }
}
