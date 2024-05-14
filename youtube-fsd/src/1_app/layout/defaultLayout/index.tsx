import React from "react";
import { Outlet } from "react-router-dom";

import { Style } from "./styles/defaultLayout";

import {Header} from "@widgets/header/index";
import { Aside } from "@widgets/aside/index";

export const DefaultLayout = ()=>{
    return (
        <Style.defaultLayout> 
            <Style.header>
                <Header/>
            </Style.header>
            <Style.aside>
                <Aside/>
            </Style.aside>
            <Style.main>
                <Outlet/>
            </Style.main>
        </Style.defaultLayout>
    );
}