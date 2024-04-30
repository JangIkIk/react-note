import React from "react";
import "./iconbtn.css";
import { NavLink } from "react-router-dom";

interface IconBtnProps {
    (props:{data: {file:string, text:string, router: string}}) : JSX.Element;
}

export const IconBtn:IconBtnProps = (props)=>{
    const {file, text, router} = props.data;
    return(
        <NavLink className={({isPending, isActive})=>[isPending ? "" : "iconbtn"].join(" ")} to={router}>
            <img className="iconbtn-img" src={file} alt={text}/>
            <span className="iconbtn-text">{text}</span>
        </NavLink>
    );
}

