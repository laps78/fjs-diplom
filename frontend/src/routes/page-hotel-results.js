import Header from "../components/Header/Header";
import Aside from "../components/Aside/Aside";
import Main from "../components/Main/Main";

export default function MainPage(props) {
  return (
    <div className="App container-fluid">
      <Header />
      <div className="app__body">
        <Aside />
        <Main />
      </div>
    </div>
  );
}
