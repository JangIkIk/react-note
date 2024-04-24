import React from "react";
import "./login.css";
import {LoginForm} from "@app/features/authentication/loginForm";
import {useDebug} from "@app/shared/hooks/useDebugStyle";


export const Login = () =>{
    const {debugStyle} = useDebug("pages/login");

    return(
        <div className="login" {...debugStyle}>
            <h1 className="login-title">로그인</h1>
            <LoginForm/>
        </div>
    );
}