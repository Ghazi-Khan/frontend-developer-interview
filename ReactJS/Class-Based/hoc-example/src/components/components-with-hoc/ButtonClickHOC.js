import { Component } from "react";
import WithCounter from "./withCounter";

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

export default WithCounter(ButtonClickHOC);