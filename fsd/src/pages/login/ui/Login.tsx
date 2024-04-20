import React from "react";
import "./login.css";
import {LoginForm} from "@app/features/authentication/loginForm";
import {useAppSelector} from "@app/hooks";



export const Login = () =>{
    const lineValue = useAppSelector( state => state.line.value);

    return(
        <div className={`login ${lineValue ? "login-line" : ""}`}>
            <h1 className="login-title">로그인</h1>
            <LoginForm/>
        </div>
    );
}