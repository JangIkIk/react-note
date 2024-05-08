import React from "react";
import "./loginForm.css";
import {usePostLogin} from "./hooks/usePostLogin";

export const LoginForm = ()=>{
    const login = usePostLogin();


    return(
        <div className="LoginForm">
            <input type="text" placeholder="아이디"/>
            <input type="text" placeholder="비밀번호"/>
            <input type="button" value={"로그인하기"} onClick={()=> login()}/>
        </div>
    );
}