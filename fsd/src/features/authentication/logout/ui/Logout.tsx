import React from "react";
import "./logout.css";
import { useAppSelector } from "@app/hooks";
import {useLogout} from "../hooks/useLogout";

export const Logout = ()=>{
    const lineValue = useAppSelector((state) => state.line.value);
    const logout = useLogout();

    return(
        <div className={`logout ${lineValue ? "logout-line" : ""}`} onClick={()=>logout()}>
            로그아웃버튼
        </div>
    );
}