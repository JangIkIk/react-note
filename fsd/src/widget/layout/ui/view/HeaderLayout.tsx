import React from "react";
import "../style/headerLayout.css";
import {Header} from "../../../header/index";

export const HeaderLayout = (props: {children: React.ReactNode})=>{
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