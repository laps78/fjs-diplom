import "./Main.css";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import {
  linkToDropdownLoginForm,
  LoginForm,
} from "../atoms/forms/LoginForm/LoginForm";
import {
  linkToDropdownRegisterForm,
  RegisterForm,
} from "../atoms/forms/RegisterForm/RegisterForm";

const Main = (props) => {
  const { user } = useContext(AppContext);

  const unAuthorizedContent = (
    <div className="container text-center">
      <p>
        К сожалению, незарегистрированным пользователям не разрешено
        просматривать данный контент. Однако, безвыходных ситуаций не бывает!
      </p>
      <p>
        Вы можете {linkToDropdownLoginForm} или {linkToDropdownRegisterForm}
        <LoginForm />
        <RegisterForm />
      </p>
    </div>
  );

  const authorizedContent = "main";
  return (
    <main className="shadowed_box Main col-6">
      <div className="main_content_wrapper text-center">
        {user ? <>{authorizedContent}</> : <>{unAuthorizedContent}</>}
      </div>
    </main>
  );
};

export default Main;
