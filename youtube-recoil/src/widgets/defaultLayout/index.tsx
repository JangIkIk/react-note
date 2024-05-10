import React from "react";
import { Style } from "./styles/defaultLayout";
import { Header } from "@widgets/header";

export const DefaultLayout = ()=>{
    return (
        <Style.root> 
            <Style.header>
                <Header/>
            </Style.header>
            <Style.aside>메뉴</Style.aside>
            <Style.main>메인</Style.main>
        </Style.root>
    );
}