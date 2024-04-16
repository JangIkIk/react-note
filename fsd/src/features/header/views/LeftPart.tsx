import React from "react";
import "../styles/leftpart.css";
import menu from "@image/menu.svg";
import logo from "@image/yotubeLogo.png";


const LeftPart = ()=>{
    return(
        <div className="leftpart">
            <div className="leftpart-menu">
                <img className="leftpart-menu__img" src={menu} alt="menu"/>
            </div>
            <div className="leftpart-logo">
                <img className="leftpart-logo__img" src={logo} alt="logo"/>
                <span className="leftpart-logo__title">YouTube</span>
                <span className="leftpart-logo__language">KR</span>
            </div>
        </div>
    );
}

export default LeftPart;