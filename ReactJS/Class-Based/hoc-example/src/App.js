import "./App.css";
import ButtonClick from "./components/componenets-without-hoc/ButtonClick";
import ButtonHover from "./components/componenets-without-hoc/ButtonHover";

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

      </header>
    </div>
  );
}

export default App;
