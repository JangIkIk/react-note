import React from "react";
import "./logout.css";
import {useLogout} from "./hooks/useLogout";

export const Logout = ()=>{
    const logout = useLogout();

    return(
        <div className="logout" onClick={()=>logout()}>
            로그아웃버튼
        </div>
    );
}