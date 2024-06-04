import "./Main.css";

import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

import UnAuthorizedSection from "./content/UnAuthorized.content,js/UnAuthorized.section";
import AccessController from "../../helpers/AccessController";

import { Routes, Route } from "react-router-dom";
import { AppBrowserRoutesArray } from "../../AppBrowserRouter";
import MainRouter from "./content/MainRouter";

const Main = ({ pageName }) => {
  const user = useContext(UserContext);
  //
  //console.log("Main User", user);
  //
  const authorizedContent = (
    <Routes>
      {AppBrowserRoutesArray.forEach((routerArrayItem) => {
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
  return (
    <main className="shadowed_box Main col-6">
      <div className="main_content_wrapper text-center">
        <AccessController
          element={
            user.role !== "GuestRole" ? (
              <>{authorizedContent}</>
            ) : (
              <UnAuthorizedSection />
            )
          }
          allowedRoles={["GuestRole"]}
          userRole={user.role}
        />
      </div>
    </main>
  );
};

export default Main;
