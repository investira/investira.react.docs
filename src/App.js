import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Basic, Button } from "investira.react.components";
import { renders, displays } from "investira.react.lib";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Basic>Teste</Basic>
        <Button variant="outlined" color="primary">
          Teste
        </Button>
        {displays.cpf("10403782775")}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
