import React from "react";
import "./baseLayout.css";
import Header from "features/header/Header";
import Aside from "features/aside/Aside";

const BaseLayout = (props: {children: React.ReactNode})=>{
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

export default BaseLayout;