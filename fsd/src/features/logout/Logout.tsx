import React from "react";
import "./logout.css";
import {useDeleteLogout} from "./hooks/useDeleteLogout";

export const Logout = ()=>{
    const logout = useDeleteLogout();

    return(
        <div className="logout" onClick={()=>logout()}>
            로그아웃버튼
        </div>
    );
}