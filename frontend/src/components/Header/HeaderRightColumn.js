import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import { Link } from "react-router-dom";
import Avatar from "../atoms/Avatar/Avatar";

export default function HeaderRightColumn() {
  const { user } = useContext(AppContext);

  const unAuthorizedContent = (
    <div className="header_login_link">
      Неавторизованный пользователь v&nbsp;
      <Avatar avatarUrl={"/assets/cat-svgrepo-com 1.png"} />
    </div>
  );
  const authorizedContent = <Link to="/api/auth/logout">Выход</Link>;

  if (user) {
    return <>{authorizedContent}</>;
  }
  return <>{unAuthorizedContent}</>;
}
