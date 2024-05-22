import React from "react";
import { Outlet } from "react-router-dom";

import { _ } from "./defaultLayoutStyle";

import {Header} from "@widgets/header/index";
import { Aside } from "@widgets/aside/index";

export const DefaultLayout = ()=>{
    console.log("디폴트 레이아웃")
    return (
        <_.defaultLayout> 
            <_.header>
                <Header/>
            </_.header>
            <_.aside>
                <Aside/>
            </_.aside>
            <_.main>
                <Outlet/>
            </_.main>
        </_.defaultLayout>
    );
}