import { Component } from "react";
import withCounter from "./withCounter";

class ButtonClickHOC extends Component {
  render() {
    return (
      <>
        <div>ButtonClickHOC Component</div>
        <button onClick={this.props.handleIncrement}>Button {this.props.counter} times clicked</button>
      </>
    );
  }
}

export default withCounter(ButtonClickHOC);