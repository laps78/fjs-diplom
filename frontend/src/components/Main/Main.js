import "./Main.css";

import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

import UnAuthorizedSection from "./content/UnAuthorized.content,js/UnAuthorized.section";
import AccessController from "../../helpers/AccessController";

import { Routes, Route } from "react-router-dom";
import { AppBrowserRoutesArray } from "../../AppBrowserRouter";

const Main = ({ pageName }) => {
  const user = useContext(UserContext);
  //
  //console.log("Main User", user);
  //
  const authorizedContent = (
    <Routes>
      {AppBrowserRoutesArray.forEach((routerArrayItem) => {
        const routeToControl = <Route
            path={routerArrayItem.path}
            element={routerArrayItem.MainContent}
            allowedRoles={routerArrayItem.allowedRoles}
          />
        return (
          <AccessController
            element={routeToControl}
            allowedRoles={routerArrayItem.allowedRoles}
            userRole={user.role}
          />
        );
      })}
    </Routes>
  );
  return (
    <main className="shadowed_box Main col-6">
      <div className="main_content_wrapper text-center">
        {() => {
          if(user.role === "GuestRole") {
            return <UnAuthorizedSection />
          } else { 
            return <>{authorizedContent}</>
          }
        }}
      </div>
    </main>
  );
};

export default Main;
