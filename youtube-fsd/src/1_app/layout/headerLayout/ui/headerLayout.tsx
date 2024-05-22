import React from "react";
import { Outlet } from "react-router-dom";

import { _ } from "./headerLayoutStyle";

import { Header } from "@widgets/header";

export const HeaderLayout = ()=>{
    console.log("헤더레이아웃");
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
