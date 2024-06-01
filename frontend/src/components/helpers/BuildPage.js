import "../../App.css";
import Main from "../Main/Main";
import Aside from "../Aside/Aside";
import Header from "../Header/Header";

export const BuildPage = (props) => {
  const { pageName } = props;
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Aside />
        <Main pageName={pageName} />
      </div>
    </div>
  );
};

export default BuildPage;
