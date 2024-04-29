import React from "react";
import "./loginForm.css";
import {useLogin} from "./hooks/useLogin";

export const LoginForm = ()=>{
    const login = useLogin();


    return(
        <div className="LoginForm">
            <input type="text" placeholder="아이디"/>
            <input type="text" placeholder="비밀번호"/>
            <input type="button" value={"로그인하기"} onClick={()=> login()}/>
        </div>
    );
}