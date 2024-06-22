import React, { Component } from "react";
class Propsonclass extends Component {
  render() {
    //const {messagecontent} = this.props  -- now at line 7 instead of passing this.props we can directly put messagecontent...
    return (
      <>
        <h1>The Message: {this.props.messagecontent}</h1>
      </>
    );
  }
}
export default Propsonclass;

//destructuring props in class component is...
// below render method, type..
