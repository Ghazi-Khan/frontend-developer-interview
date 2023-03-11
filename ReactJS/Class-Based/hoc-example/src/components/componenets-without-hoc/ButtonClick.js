import React, { Component } from "react";

class ButtonClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((preState) => {
      return {
        count: preState.count + 1,
      };
    });
  };

  render() {
    return (
      <>
        <div>Button Click</div>
        <button onClick={this.handleIncrement}>
          Button {this.state.count} times clicked
        </button>
      </>
    );
  }
}

export default ButtonClick;
