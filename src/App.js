import "./App.css";
import ColorfulSquare from "./Square";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Colors</h1>
        <span>Move your mouse across the blocks to create a color</span>
        <span>Click the block to copy the RGB color to clipboard</span>
      </header>
      <div className="App-squares-container">
        <ColorfulSquare />
        <ColorfulSquare />
        <ColorfulSquare />
        <ColorfulSquare />
        <ColorfulSquare />
      </div>
    </div>
  );
}

export default App;
