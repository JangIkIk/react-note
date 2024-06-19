import React from "react";
import { Outlet } from "react-router-dom";

import { _ } from "./headerLayoutStyle";

import { Header } from "@widgets/header";

export const HeaderLayout = ()=>{
    return(
        <_.headerLayout>
            <_.header>
                <Header/>
            </_.header>
            <_.main>
                <Outlet/>
            </_.main>
        </_.headerLayout>
    );
}
