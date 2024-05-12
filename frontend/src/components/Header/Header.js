import "./Header.css";
import HeaderRightColumn from "./HeaderRightColumn";

const Header = () => {
  return (
    <div class="global__header">
      <div className="header_left_column">logo</div>
      <div className="header_right_column">
        <HeaderRightColumn />
      </div>
    </div>
  );
};

export default Header;
