import React from "react";
import "../index.css";
import {MenuData} from "../AsideContainer.tsx";

function AsideButton (props: { buttonInfo: MenuData}){
    const {iconType, iconText} = props.buttonInfo;
    return(
        <>
            <span className="material-symbols-outlined">{iconType}</span>
            <span>{iconText}</span>
        </>
    );
};


export default AsideButton;