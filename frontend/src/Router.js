import { createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/page-hotel-results";

const AppBrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/gui",
    element: <MainPage />,
  },
  {
    path: "/gui/register",
    element: <MainPage />,
  },
]);

export default AppBrowserRouter;
