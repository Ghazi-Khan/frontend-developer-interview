import React, { Component } from "react";

class RegularComponentExample extends Component {
  render() {
    console.log("Regular-Component called..");
    return <div>Regular Component {this.props.count}</div>;
  }
}

export default RegularComponentExample;
