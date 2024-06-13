import "./Main.css";

import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

import UnAuthorizedSection from "./content/UnAuthorized.content,js/UnAuthorized.section";
import AccessController from "../../helpers/AccessController";

import { Routes, Route } from "react-router-dom";
import { AppBrowserRoutesArray } from "../../AppBrowserRouter";

const Main = ({ pageName }) => {
  const user = useContext(UserContext);
  const authorizedContent = (
    <Routes>
      {AppBrowserRoutesArray.forEach((routerArrayItem) => {
        const routeToControl = (
          <Route
            path={routerArrayItem.path}
            element={routerArrayItem.MainContent}
            allowedRoles={routerArrayItem.allowedRoles}
          />
        );
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

  const TMPMainValidator = ({ component }) => {
    return (
      <main className="shadowed_box Main col-6">
        <div className="main_content_wrapper text-center">{component}</div>
      </main>
    );
  };

  //TODO переписать убогий гвонокод комнпонента. Что еще за TMPValidator???
  if (user.role === "GuestRole") {
    return <TMPMainValidator component={authorizedContent} />;
  }
  return <TMPMainValidator component={<UnAuthorizedSection />} />;
};

export default Main;
