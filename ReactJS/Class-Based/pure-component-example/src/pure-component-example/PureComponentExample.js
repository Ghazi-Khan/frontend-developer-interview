import React, { PureComponent } from "react";

class PureComponentExample extends PureComponent {
  render() {
    console.log("Pure-Component called..");
    return <div>Pure Component {this.props.count}</div>;
  }
}

export default PureComponentExample;
