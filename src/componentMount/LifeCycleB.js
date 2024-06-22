//mouting phases.
//constructor
import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Akhil",
    };
    console.log("Lifecycle B constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecyle B getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("Lifecycle B componentDidMount");
  }
  render() {
    console.log("Lifecyle B render");
    return <div>LifeCycle B RenderMethod</div>;
  }
}

export default LifecycleB;
