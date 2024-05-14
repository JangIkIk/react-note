import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { _ } from "./asideStyle";
import { asideButtonData } from "../model/data";


export const Aside = ()=>{
    const location = useLocation();    
    const navigate = useNavigate();
    const onClickRoute = (path: string) => navigate(path);

    return(
        <_.aside>
            {asideButtonData.map( (value,idx)=>{
                return(
                    <_.category key={idx} $currentpath={location.pathname === value.router} onClick={() => onClickRoute(value.router)}>
                        <svg xmlLang={value.src.xmlns} width={value.src.width} height={value.src.height} fill={value.src.fill} viewBox={value.src.viewBox}>
                            <path d={value.src.d}></path>
                        </svg>
                        <_.category_name>{value.name}</_.category_name>
                    </_.category>
                );
            })}
        </_.aside>
    );
}