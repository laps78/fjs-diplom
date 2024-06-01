import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppContext from "./contexts/AppContext";
import reportWebVitals from "./reportWebVitals";
import AppBrowserRouter from "./AppBrowserRouter";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContext.Provider value={{ AppContext }}>
      <RouterProvider router={AppBrowserRouter}>
        <App />
      </RouterProvider>
    </AppContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
