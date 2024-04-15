import React from "react";
import "../../index.css";
import {PropsType} from "./IconBtnContainer.tsx";

interface IconBtnViewProps extends PropsType{
    active: boolean;
    clickIcon: ()=>void;
}

function IconBtnView(props: IconBtnViewProps){
    const {text, iconName, active, clickIcon} = props;
    return(
        <div className="short-icons__container" onClick={clickIcon}>
          <div className={`shorts-icons__action ${active ? "shorts-icons__action--true" : ""}`}>
            <span className="material-symbols-outlined">{iconName}</span>
          </div>
          <div>
            <span>{text}</span>
          </div>
        </div>
    );
}

export default IconBtnView;