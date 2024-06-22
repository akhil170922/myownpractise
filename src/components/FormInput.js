import React, { Component } from "react";
class FormInput extends Component {
  state = {
    firstname: "",
    lastname: "",
  };
  handleChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };
  handleLastNameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    window.alert(this.state.firstname + this.state.lastname);
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.firstname} />
          <input
            onChange={this.handleLastNameChange}
            value={this.state.lastname}
          /> 
          <h1>
            {this.state.firstname} {this.state.lastname}
          </h1>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default FormInput;
