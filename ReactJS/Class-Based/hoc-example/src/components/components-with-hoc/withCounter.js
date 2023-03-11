import React from "react";

const WithCounter = (WrappedComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
    }
    handleIncrement = () => {
      this.setState((preState) => {
        return { counter: preState.counter + 1 };
      });
    };
    render() {
      return (
        <WrappedComponent
          counter={this.state.counter}
          handleIncrement={this.handleIncrement}
        />
      );
    }
  }
  return NewComponent;
};

export default WithCounter;
