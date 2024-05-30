import "./Main.css";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";

const Main = (props) => {
  const { user } = useContext(AppContext);

  const unAuthorizedContent = "суда воткни форму входа??";

  const authorizedContent = "main";
  return (
    <main className="shadowed_box Main col-6">
      <div className="main_content_wrapper">
        {user ? <>{authorizedContent}</> : <>{unAuthorizedContent}</>}
      </div>
    </main>
  );
};

export default Main;
