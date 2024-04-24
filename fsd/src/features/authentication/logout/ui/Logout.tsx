import React from "react";
import "./logout.css";
import {useLogout} from "../hooks/useLogout";
import {useDebug} from "@app/shared/hooks/useDebugStyle";

export const Logout = ()=>{
    const {debugStyle} = useDebug("features/logout");
    const logout = useLogout();

    return(
        <div className="logout" {...debugStyle} onClick={()=>logout()}>
            로그아웃버튼
        </div>
    );
}