import React from "react";
import logo from "./logo.svg";
import "./App.css";

type TitleProps = {
  title: string;
  value?: string;
};

function App() {
  const Title = ({ title, value = "" }: TitleProps) => <h1>{title}</h1>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Title title="Hi, component!!!" />
    </div>
  );
}

export default App;
