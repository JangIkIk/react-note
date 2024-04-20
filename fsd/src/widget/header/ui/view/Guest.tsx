import React from "react";
import "../style/guest.css";
import loginLogo from "@image/loginLogo.svg";
import {HeaderMore} from "@features/headerMore/index";
import {Link} from "react-router-dom";

export const Guest = ()=>{

    return(
        <div className="guest">
            <HeaderMore/>
            <Link className="guest-login" to="/login">
                <div className="guest-login-icon"><img className="guest-login-icon__img" src={loginLogo} alt="login"/></div>
                <span className="guest-login__text">로그인</span>
            </Link>
        </div>
    );
}
