import React from "react";
import "./loginForm.css";
import {useLogin} from "../hooks/useLogin";
import {useDebug} from "@app/shared/hooks/useDebugStyle";

export const LoginForm = ()=>{
    const {debugStyle} = useDebug("features/loginForm");
    const login = useLogin();


    return(
        <div className="LoginForm" {...debugStyle}>
            <input type="text" placeholder="아이디"/>
            <input type="text" placeholder="비밀번호"/>
            <input type="button" value={"로그인하기"} onClick={()=> login()}/>
        </div>
    );
}