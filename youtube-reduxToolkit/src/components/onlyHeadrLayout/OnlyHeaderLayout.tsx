import React from "react";
import "./onlyHeaderLayout.css";
import {Header} from "@features/header/Header";
import { Outlet } from "react-router-dom";

export const OnlyHeaderLayout = ()=>{
    return(
        <div className="headerLayout">
            <div className="headerLayout-header"><Header/></div>
            <div className="headerLayout-main">
                <Outlet/>
            </div>
        </div>
    );
}