import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppBrowserRouterArray from "./AppBrowserRouter";
import { v4 as uuid } from "uuid";

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
