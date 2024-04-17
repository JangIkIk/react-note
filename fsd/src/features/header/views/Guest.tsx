import React from "react";
import "../styles/guest.css";
import useLogin from "../hooks/useLogin";
import loginLogo from "@image/loginLogo.svg";
import more from "@image/more.svg";

const Guest = ()=>{
    const {login} = useLogin();

    return(
        <div className="guest">
            <div className="guest-more"><img className="guest-more__img" src={more} alt="more"/></div>
            <div className="guest-login" onClick={login}>
                <div className="guest-login-icon"><img className="guest-login-icon__img" src={loginLogo} alt="login"/></div>
                <span className="guest-login__text">로그인</span>
            </div>
        </div>
    );
}

export default Guest;