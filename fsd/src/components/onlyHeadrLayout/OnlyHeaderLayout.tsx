import React from "react";
import "./onlyHeaderLayout.css";
import {Header} from "@features/header/Header";

export const OnlyHeaderLayout = (props: {children: React.ReactNode})=>{
    const {children} = props;
    return(
        <div className="headerLayout">
            <div className="headerLayout-header"><Header/></div>
            <div className="headerLayout-main">
                {children}
            </div>
        </div>
    );
}