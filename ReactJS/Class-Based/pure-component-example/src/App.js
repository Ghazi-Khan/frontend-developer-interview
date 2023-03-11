import { Component } from "react";
import "./App.css";
import PureComponentExample from "./pure-component-example/PureComponentExample";
import PureListComponent from "./pure-component-example/PureListComponent";
import RegularComponentExample from "./pure-component-example/RegularComponentExample";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      listA: [],
      listB: [],
    };
  }

  componentDidMount() {
    setInterval(() => {
      const listACopy = this.state.listA;
      const listBCopy = this.state.listB;

      listACopy.push('A');
      listBCopy.push('B');
      this.setState({
        ...this.state,
        count: this.state.count,
        listA: [...listACopy],      // Reference getting updated
        listB: listBCopy,           // Reference NOT getting updated
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Parent Component</p>
          <PureComponentExample count={this.state.count}/>
          <br />
          <RegularComponentExample count={this.state.count}/>


          {/* In case of PureListComponent B, the value of list getting updated but
              the component is not re-rendering because the list refernce is not getting udpated
           */}
          <PureListComponent listName={'A'} items={this.state.listA} />
          <PureListComponent listName={'B'} items={this.state.listB} />
        </header>
      </div>
    );
  }
}

export default App;
