import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import {AppRouter} from "./AppRouter";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
