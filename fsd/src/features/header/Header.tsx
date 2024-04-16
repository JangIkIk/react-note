import React from "react";
import "./header.css";
import LeftPart from "./views/LeftPart";
import CenterPart from "./views/CenterPart";
import RightPart from "./views/RightPart";

const Header = ()=>{
    return(
        <div className="header">
            <LeftPart/>
            <CenterPart/>
            <RightPart/>
        </div>
    );
}

export default Header;