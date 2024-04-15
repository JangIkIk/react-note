import React from "react";
import Header from "../shared/header/Header.tsx";
import Aside from "../shared/asdie/AsideContainer.tsx";
import Router from "./Router.tsx";

function App(){
    return(
        <div className="layout">
            <header className="header-layout"><Header/></header>
            <aside className="aside-layout"><Aside/></aside>
            <main className="main-layout"><Router/></main>
        </div>
    );
}

// useState를 사용한 탭창으로 ->
// 

export default App;
