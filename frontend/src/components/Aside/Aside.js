import "./Aside.css";
import NavMenu from "./NavMenu/NavMenu";

const Aside = (props) => {
  return (
    <aside className="Aside">
      <div className="aside_content_wrapper">
        <NavMenu />
      </div>
    </aside>
  );
};

export default Aside;
