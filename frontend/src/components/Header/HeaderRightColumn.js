import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import { Link } from "react-router-dom";

export default function HeaderRightColumn() {
  const { user } = useContext(AppContext);

  const unAuthorizedContent = (
    <div className="header_login_link">
      <a href="gui/login" className="App-link">
        Вход
      </a>{" "}
      | <a href="/gui/register">Регистрация</a>
    </div>
  );
  const authorizedContent = <Link to="/api/auth/logout">Выход</Link>;

  if (user) {
    return <>{authorizedContent}</>;
  }
  return <>{unAuthorizedContent}</>;
}
