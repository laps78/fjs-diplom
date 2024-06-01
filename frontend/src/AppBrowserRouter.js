import { createBrowserRouter } from "react-router-dom";
import { BuildPage } from "./components/helpers/BuildPage";

const AppBrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: BuildPage("Главная страница"),
  },
  {
    path: "/gui",
    element: BuildPage("Главная страница"),
  },
  {
    path: "/gui/auth/register",
    element: BuildPage("Регистрация"),
  },
  {
    path: "/gui/auth/login",
    element: BuildPage("Вход в систему"),
  },
  {
    path: "/gui/hotels",
    element: BuildPage("Все отели"),
  },
  {
    path: "/gui/rooms/search",
    element: BuildPage("Поиск отеля"),
  },
  {
    path: "/gui/rooms/search/results",
    element: BuildPage("Результаты поиска"),
  },
  {
    path: "/gui/hotels/:id/edit",
    element: BuildPage("Редактировать отель"),
  },
  {
    path: "/gui/hotels/:id/edit",
    element: BuildPage("Результаты поиска"),
  },
  {
    path: "/gui/users/:id/edit",
    element: BuildPage("Результаты поиска"),
  },
]);

export default AppBrowserRouter;
