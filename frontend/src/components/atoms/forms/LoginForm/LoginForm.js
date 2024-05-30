import "./LoginForm.css";
import { useRef } from "react";

export const linkToDropdownLoginForm = (
  <button
    type="button"
    className="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    data-bs-auto-close="outside"
  >
    Войти
  </button>
);

export const LoginForm = () => {
  return (
    <div className="dropdown">
      <form className="dropdown-menu p-4">
        <div className="mb-3">
          <label for="exampleDropdownFormEmail2" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail2"
            placeholder="email@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleDropdownFormPassword2" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword2"
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="dropdownCheck2"
            />
            <label className="form-check-label" for="dropdownCheck2">
              Remember me
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};

const DropdownLoginForm = { linkToDropdownLoginForm, LoginForm };

export default DropdownLoginForm;
