import "./Aside.css";
import NavMenu from "./NavMenu/NavMenu";

const Aside = (props) => {
  return (
    <aside className="shadowed_box Aside">
      <NavMenu />
    </aside>
  );
};

export default Aside;
