import Page from "./Page";

export const Pages = {
  MainPage: <Page pageName={"Главная"} />,
  RegisterPage: <Page pageName={"Регистрация"} />,
  LoginPage: <Page pageName={"Вход"} />,
  HotelsPage: <Page pageName={"Все отели"} />,
  RoomsSearchPage: <Page pageName={"Поиск отеля"} />,
  HotelsSearchResultsPage: <Page pageName={"Результаты поиска"} />,
  RoomsSearchResultsPage: <Page pageName={"Пезультаты поиска"} />,
  EditHotelPage: <Page pageName={"Изменить отель"} />,
  EditUserPage: <Page pageName={"Изменить клиента"} />,
};

export default Pages;
