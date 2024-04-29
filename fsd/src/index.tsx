import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
/*
  각페이지의 에러핸들링을 위해 기존 Router.tsx 파일로 분리한부분을
  AppRouter.tsx로 변경하여 App 컴포넌트 자체를 라우터 파일로 쓰는것이 좋을것같음
  AppRouter 부분에서는 createBrowserRouter를 사용하여 각페이지에대한 에러처리를 상세히 설정하고
  loader부분을 통한 데이터 접근이 쉬운지도 확인해야함
*/

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);
