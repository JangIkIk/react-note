import React from "react";
import "./defaultLayout.css";
import {Header} from "@features/header/Header";
import {Aside} from "@features/aside/Aside";
import { Outlet } from "react-router-dom";

export const DefaultLayout = ()=>{
    return(
        <div className="baseLayout">
            <div className="baseLayout-header"><Header/></div>
            <div className="baseLayout-aside"><Aside/></div>
            <div className="baseLayout-main">
                <Outlet/>
            </div>
        </div>
    );
}