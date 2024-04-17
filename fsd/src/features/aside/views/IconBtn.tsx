import React from "react";
import "../styles/iconbtn.css";
import { NavLink, Link } from "react-router-dom";

interface IconBtnProps {
    (props:{data: {file:string, text:string, router: string}}) : JSX.Element;
}

const IconBtn:IconBtnProps = (props)=>{
    const {file, text, router} = props.data;
    return(
        // <Link className="iconbtn" to={router}>
        //     <img className="iconbtn-img" src={file} alt={text}/>
        //     <span className="iconbtn-text">{text}</span>
        // </Link>
        <NavLink className={({isPending, isActive})=>[isPending ? "" : "iconbtn"].join(" ")} to={router}>
            <img className="iconbtn-img" src={file} alt={text}/>
            <span className="iconbtn-text">{text}</span>
        </NavLink>
    );
}

export default IconBtn;