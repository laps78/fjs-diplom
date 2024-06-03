import "./Main.css";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import UnAuthorizedSection from "./content/UnAuthorized.content,js/UnAuthorized.section";
import AccessController from "../../helpers/AccessController";
import { Routes, Route } from "react-router-dom";
import { AppBrowserRoutesArray } from "../../AppBrowserRouter";

const Main = (props) => {
  const { user } = useContext(AppContext);
  const userMock = {
    name: "Гость",
    role: "GuestRole",
  };
  console.log("user: ", userMock);
  const { pageName } = props;
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
            <>
              {user ? <div>{authorizedContent}</div> : <UnAuthorizedSection />}
            </>
          }
          allowedRoles={["GuestRole"]}
          user={userMock}
        />
      </div>
    </main>
  );
};

export default Main;
