import "./NavMenu.css";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../../contexts/AppContext";
import AccessController from "../../helpers/AccessController";

const NavMenu = (props) => {
  const menuItems = [
    {
      text: "Все отели",
      target: "/gui/hotels/all",
      allowedRoles: ["AdminRole", "UserRole", "ManagerRole"],
    },
    {
      text: "Поиск номера",
      target: "/gui/hotels/search",
      allowedRoles: ["AdminRole", "UserRole", "ManagerRole"],
    },
    {
      text: "Добавить отель",
      target: "/gui/hotels/add",
      allowedRoles: ["AdminRole", "ManagerRole"],
    },
    {
      text: "Пользователи",
      target: "/gui/hotels/add",
      allowedRoles: ["AdminRole", "ManagerRole"],
    },
    {
      text: "Войти",
      target: "/gui/auth/login",
      allowedRoles: [undefined],
    },
    {
      text: "Зарегистрироваться",
      target: "/gui/auth/register",
      allowedRoles: [undefined],
    },
  ];

  const user = useContext(AppContext);

  return (
    <ul className="NavMenu">
      {menuItems.map((item) => {
        const key = uuid();
        return (
          <AppContext.Consumer key={key}>
            {(user) => {
              return (
                <AccessController
                  element={
                    <li className="NavMenu__item">
                      <Link to={item.target}>{">" + item.text}</Link>
                    </li>
                  }
                  allowedRoles={item.allowedRoles}
                  user={user}
                />
              );
            }}
          </AppContext.Consumer>
        );
      })}
    </ul>
  );
};

export default NavMenu;
