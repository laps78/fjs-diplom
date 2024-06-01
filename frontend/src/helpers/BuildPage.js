import "../App.css";
import Main from "../components/Main/Main";
import Aside from "../components/Aside/Aside";
import Header from "../components/Header/Header";

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
