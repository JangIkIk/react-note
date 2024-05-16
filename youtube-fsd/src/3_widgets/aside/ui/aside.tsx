import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { _ } from "./asideStyle";
import {buttonData} from "../lib/buttonData";


/*
    [고민]
    svg를 쓰기위해서 assets에 svg파일을 저장하기를 원치않기에
    google icons에서 svg 속성을 가지고와서, 버튼 정보와 함께 obj타입으로 만들었다
    또한 로그인 여부에 따라 aside의 버튼 하나정도가 바뀐다. 해당부분은 추가할지 말지 좀다 고려중

*/
export const Aside = ()=>{
    const location = useLocation();    
    const navigate = useNavigate();
    const onClickRoute = (path: string) => navigate(path);

    return(
        <_.aside>
            {buttonData.map( (value,idx)=>{
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