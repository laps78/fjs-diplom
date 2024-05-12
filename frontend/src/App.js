import "./App.css";
import Header from "./components/Header/Header";
import AppContext from "./contexts/AppContext";

function App() {
  return (
    <div className="App">
      <AppContext.Provider value={{ AppContext }}>
        <Header />
      </AppContext.Provider>
    </div>
  );
}

export default App;
