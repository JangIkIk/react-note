import React from "react";
import { Outlet } from "react-router-dom";

import { Style } from "./styles/headerLayout"

// import { Header } from "3_widgets/header";

export const HeaderLayout = ()=>{
    return(
        <Style.headerLayout>
            <Style.header>
                {/* <Header/> */}
            </Style.header>
            <Style.main>
                <Outlet/>
            </Style.main>
        </Style.headerLayout>
    );
}
