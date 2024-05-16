import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Aside from "./components/Aside/Aside";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Main />
        <Aside />
      </div>
    </div>
  );
}

export default App;
