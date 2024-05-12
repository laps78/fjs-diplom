import "./NavMenu.css";

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
      {menuItems.map((item) => (
        <li>
          <a href={item.target} className="NavMenu__item">
            {"> " + item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
