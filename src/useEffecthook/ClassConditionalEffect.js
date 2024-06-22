import React, { Component } from "react";

export default class ClassConditionalEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updated - count value and renders");
      document.title = `Clicked ${this.state.count} times`;
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        count value: {this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increment
        </button>
      </div>
    );
  }
}
