import React, { Component } from "react";

class ButtonHover extends Component {
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
        <div>Button Hover</div>
        <div onMouseEnter={this.handleIncrement}>
          Hovered {this.state.count} times
        </div>
      </>
    );
  }
}

export default ButtonHover;
