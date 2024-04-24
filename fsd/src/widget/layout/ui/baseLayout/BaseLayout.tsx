import React from "react";
import "./baseLayout.css";
import {Header} from "../../../header/index";
import {Aside} from "../../../aside/index";

export const BaseLayout = (props: {children: React.ReactNode})=>{
    const {children} = props;
    return(
        <div className="baseLayout">
            <div className="baseLayout-header"><Header/></div>
            <div className="baseLayout-aside"><Aside/></div>
            <div className="baseLayout-main">
                {children}
            </div>
        </div>
    );
}
