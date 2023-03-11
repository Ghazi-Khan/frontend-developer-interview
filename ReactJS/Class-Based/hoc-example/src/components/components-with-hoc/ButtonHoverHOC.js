import React, { Component } from "react";
import withCounter from "./withCounter";

class ButtonHoverHOC extends Component {
  render() {
    return (
      <>
        <div>ButtonHoverHOC Component</div>
        <div onMouseOver={this.props.handleIncrement}>
          Hovered {this.props.counter} times
        </div>
      </>
    );
  }
}

export default withCounter(ButtonHoverHOC);
