import React from "react";
import "./icon.css";

interface IconProps {
    (props:{src:string, alt:string}) : JSX.Element;
}

export const Icon:IconProps = (props)=>{
    const {src,alt} = props;
    return(
        <img className="iconbtn-img" src={src} alt={alt}/>
    );
}