import "./Main.css";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import UnAuthorizedSection from "./content/UnAuthorized.content,js/UnAuthorized.section";

const Main = (props) => {
  const { user } = useContext(AppContext);
  const authorizedContent = "main";
  return (
    <main className="shadowed_box Main col-6">
      <div className="main_content_wrapper text-center">
        {user ? <div>{authorizedContent}</div> : <UnAuthorizedSection />}
      </div>
    </main>
  );
};

export default Main;
