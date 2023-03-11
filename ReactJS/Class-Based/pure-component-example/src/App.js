import { Component } from "react";
import "./App.css";
import PureComponentExample from "./pure-component-example/PureComponentExample";
import RegularComponentExample from "./pure-component-example/RegularComponentExample";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };

    setInterval(() => {
      this.setState({
        ...this.state,
        count: this.state.count,
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Parent Component</p>
          <PureComponentExample count={this.state.count}/>
          <br />
          <RegularComponentExample count={this.state.count}/>
        </header>
      </div>
    );
  }
}

export default App;
