import React, {useRef} from "react";
import { useNavigate } from "react-router-dom";
import { _ } from "./loginFormStyle";
import {useLogin} from "../api/useLogin";
import { useUserStore } from "@shared/lib/useUserStore";

export const LoginForm = () => {
    const userId = useRef<HTMLInputElement>(null);
    const userPw = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const updateUser = useUserStore( state => state.updateUser);

    // 유저가 아이디 비밀번호를 입력한후에 api 요청을 하고
    // 해당 api요청 결과에 따른 처리를 해주어야함
    const onClicklogin = async ()=>{
        if (userId.current && userPw.current) {
            // const token = await useLogin(userId.current.value, userPw.current.value);
            updateUser("userId");
            navigate("/");
        }
    
    }

    return(
        <_.loginForm style={{color: "white"}}>
            <input type="text" placeholder="아이디" ref={userId}/>
            <input type="text" placeholder="비밀번호" ref={userPw}/>
            <input type="button" value={"로그인하기"} onClick={onClicklogin}/>
        </_.loginForm>
    );
}