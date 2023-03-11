/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import PureComponent from "./pure-component-example/PureComponent";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState({ counter: 0 });

  useEffect(() => {
    setInterval(() => {
      setCount({ counter: count.counter });
    }, 2000);
  }, []);

  console.log("------------------------- App Component re-render -------------------------");
  return (
    <div className="App">
      <header className="App-header">
        <div>Parent Component</div>

        <PureComponent count={count.counter} />
      </header>
    </div>
  );
}

export default App;
