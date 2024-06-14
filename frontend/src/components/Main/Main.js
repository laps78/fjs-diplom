import "./Main.css";

import { Routes, Route } from "react-router-dom";
import { AppBrowserRoutesArray } from "../../AppBrowserRouter";

const Main = ({ pageName }) => {
  return (
    <main className="shadowed_box Main col-7">
      <Routes>
        {AppBrowserRoutesArray.forEach((routerArrayItem) => {
          <Route
            path={routerArrayItem.path}
            element={routerArrayItem.MainContent}
            allowedRoles={routerArrayItem.allowedRoles}
          />;
        })}
      </Routes>
    </main>
  );
};

export default Main;
