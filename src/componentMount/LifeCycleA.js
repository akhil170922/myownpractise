//mouting phases.
//constructor
import React, { Component } from "react";
import LifecycleB from "./LifeCycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Akhil",
    };
    console.log("Lifecycle A constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecyle A getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("Lifecycle A componentDidMount");
  }
  render() {
    console.log("Lifecyle A render");
    return (
      <div>
        LifeCycle A
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
