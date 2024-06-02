import { createBrowserRouter } from "react-router-dom";
import Pages from "./helpers/PageBuilder/Pages";

export const AppBrowserRoutesArray = [
  {
    name: Pages.name,
    path: "/",
    element: Pages.MainPage,
    loader: null,
    allowedRoles: ["GuestRole"],
  },
  {
    name: Pages.name,
    path: "/gui",
    element: Pages.MainPage,
    loader: null,
    allowedRoles: ["GuestRole"],
  },
  {
    name: Pages.name,
    path: "/gui/auth/register",
    element: Pages.RegisterPage,
    loader: null,
    allowedRoles: ["GuestRole"],
  },
  {
    name: Pages.name,
    path: "/gui/auth/login",
    element: Pages.LoginPage,
    loader: null,
    allowedRoles: ["GuestRole"],
  },
  {
    name: Pages.name,
    path: "/gui/hotels",
    element: Pages.HotelsPage,
    loader: null,
    allowedRoles: ["AdminRole", "UserRole", "ManagerRole"],
  },
  {
    name: Pages.name,
    path: "/gui/rooms/search",
    element: Pages.RoomsSearchPage,
    loader: null,
    allowedRoles: ["AdminRole", "UserRole", "ManagerRole"],
  },
  {
    name: Pages.name,
    path: "/gui/rooms/search/results",
    element: Pages.RoomsSearchResultsPage,
    loader: null,
    allowedRoles: ["AdminRole", "UserRole", "ManagerRole"],
  },
  {
    name: Pages.name,
    path: "/gui/hotels/:id/edit",
    element: Pages.EditHotelPage,
    loader: null,
    allowedRoles: ["AdminRole", "ManagerRole"],
  },
  {
    name: Pages.name,
    path: "/gui/hotels/search/results",
    element: Pages.HotelsSearchResultsPage,
    loader: null,
    allowedRoles: ["AdminRole", "ManagerRole", "UserRole"],
  },
  {
    name: Pages.name,
    path: "/gui/users/:id/edit",
    element: Pages.EditUserPage,
    loader: null,
    allowedRoles: ["AdminRole"],
  },
];

const preparedRoutesArray = AppBrowserRoutesArray.map((object) => {
  delete object.name;
  delete object.allowedRoles;
  return object;
});

export const AppBrowserRouter = createBrowserRouter(preparedRoutesArray);
const RouterObject = { AppBrowserRouter, AppBrowserRoutesArray };

export default RouterObject;
