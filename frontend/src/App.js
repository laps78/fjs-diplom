import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Aside from "./components/Aside/Aside";
import AppContext from "./contexts/AppContext";

function App() {
  return (
    <div className="App">
      <AppContext.Provider value={{ AppContext }}>
        <Header />
        <div className="app__body">
          <Main />
          <Aside />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
