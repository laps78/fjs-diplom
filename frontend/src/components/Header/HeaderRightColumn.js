export default function HeaderRightColumn() {
  return (
    <div className="header_login_link">
      <a href="gui/login" className="App-link">
        Вход
      </a>{" "}
      | <a href="/gui/register">Регистрация</a>
    </div>
  );
}
