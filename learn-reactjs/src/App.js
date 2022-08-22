import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [myName, setMyName] = useState("Arief Rachman Hakim");
  const [myAge] = useState(20);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{myName}</p>
        <p>{myAge}</p>
        <button onClick={() => setMyName("Morgan Castello")}>Ganti Nama</button>
      </header>
    </div>
  );
}

export default App;
