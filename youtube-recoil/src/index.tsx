// npm
import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./app/GlobalStyle";
import { RecoilRoot } from "recoil";
// slice
import { AppRouter } from "./app/AppRouter";
import { RouterProvider } from "react-router-dom";
import { ThemeContext } from "./app/ThemeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeContext>
        <GlobalStyle />
        <RouterProvider router={AppRouter} />
      </ThemeContext>
    </RecoilRoot>
  </React.StrictMode>
);
