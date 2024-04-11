import React from "react";
import "@css/aside.css";

interface ButtonData{
    iconType: string;
    iconText: string;
    router: string;
};

function AsideButton (props: { buttonInfo: ButtonData}){
    const {iconType, iconText} = props.buttonInfo;
    return(
        <>
            <span className="material-symbols-outlined">{iconType}</span>
            <span>{iconText}</span>
        </>
    );
};


export default AsideButton;