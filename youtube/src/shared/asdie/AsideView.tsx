import React from "react";
import "./index.css";
import AsideButton from "./components/AsideButton.tsx"
import {MenuData} from "./AsideContainer.tsx";
import { NavLink } from "react-router-dom";

function AsideView(props: {menuData: MenuData[]}){
    const buttonData = props.menuData;
    return(
        <div className="aside">
            {buttonData && buttonData.map((value, idx)=> <NavLink key={idx} to={value.router} className={({isActive, isPending})=> [
                isPending ? "" : "aside_item",
                isActive ? "aside_item--active" : ""
            ].join(" ")}><AsideButton buttonInfo={value}/></NavLink>)}
        </div>
    );
};

export default AsideView;