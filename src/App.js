import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Factory from "./Factory";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  console.log(count);

  return (

    <div className="App">
      <Factory />
      <header className="App-header">
        <h1>Factory Demo</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Count = {count}</p>
        {/* <!-- HTML !--> */}
        <button className="button" onClick={handleClick}>
          Count + 1
        </button>
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
