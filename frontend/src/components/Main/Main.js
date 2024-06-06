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
        return (
          <Route
            path={routerArrayItem.path}
            element={routerArrayItem.MainContent}
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
          /**
           * TODO:
           * Исправил, было allowedRoles={["GuestRole"]}
           * необходимо протестировать работоспособность. 
           * Раньше был смысл передаваать фиксированную роль в контроллер доступа,
           * как заглушку. теперь, как будто, нет... 
           * Возможно, структуру компронента нужно переработать на изнанку...
           */
          allowedRoles={element.allowedRoles}//TODO проверить: возможно ли прочитать пропсы передаваемого элемента
          userRole={user.role}
        />
      </div>
    </main>
  );
};

export default Main;
