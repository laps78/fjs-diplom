import "./NavMenu.css";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const NavMenu = (props) => {
  const menuItems = [
    {
      text: "Все гостиницы",
      target: "/gui/hotels/all",
    },
    {
      text: "Поиск номера",
      target: "/gui/hotels/search",
    },
    {
      text: "Добавить гостиницу",
      target: "/gui/hotels/add",
    },
  ];
  return (
    <ul className="NavMenu">
      {menuItems.map((item) => {
        const key = uuid();
        return (
          <li key={key} className="NavMenu__item">
            <Link to={item.target}>{"> " + item.text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMenu;
