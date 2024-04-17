import React from "react";
import "./header.css";
import LeftPart from "./views/LeftPart";
import CenterPart from "./views/CenterPart";
import RightPart from "./views/RightPart";

const Header = ()=>{
    return(
        <div className="header">
            <div className="header-left"><LeftPart/></div>
            <div className="header-center"><CenterPart/></div>
            <div className="header-right"><RightPart/></div>
        </div>
    );
}

export default Header;