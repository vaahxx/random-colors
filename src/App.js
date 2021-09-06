import "./App.css";
import ColorfulSquare from "./Square";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>Random Colors Square</code>
        </p>
        <strong>Move your mouse across the squares</strong>
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
