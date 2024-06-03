import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppBrowserRouterArray from "./AppBrowserRouter";

function App() {
  return (
    <Routes>
      {AppBrowserRouterArray.forEach((routerArrayItem) => {
        return (
          <Route
            path={routerArrayItem.path}
            element={routerArrayItem.element}
            allowedRoles={routerArrayItem.allowedRoles}
          />
        );
      })}
    </Routes>
  );
}

export default App;
