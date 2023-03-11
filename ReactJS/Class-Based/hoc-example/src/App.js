import "./App.css";
import ButtonClick from "./components/componenets-without-hoc/ButtonClick";
import ButtonHover from "./components/componenets-without-hoc/ButtonHover";
import ButtonClickHOC from "./components/components-with-hoc/ButtonClickHOC";
import ButtonHoverHOC from "./components/components-with-hoc/ButtonHoverHOC";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Parent Component</div>

        {/* Components without HOC */}
        <br />
        <ButtonClick />
        <br />
        <ButtonHover />
        <br />

        {/* Ccmpoenents with HOC */}
        <br />
        <ButtonClickHOC />
        <br />
        <ButtonHoverHOC />

      </header>
    </div>
  );
}

export default App;
